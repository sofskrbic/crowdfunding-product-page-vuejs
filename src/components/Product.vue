<template>
  <div>
      <Variant
        v-for="variant in variants" :key="variant.id"
        v-show="variant.id != 0"
        :id="variant.id"
        :title="variant.title"
        :pledge="variant.pledge"
        :description="variant.description"
        :quantity="variant.quantity"
        :class="{ outOfStock: variant.quantity == 0 }"
        @initializePledge="openModal"
      />
  </div>
</template>

<script>
import Variant from './Variant'

export default {
  name: 'Product',
  components: {
    Variant
  },
  computed: {
    variants() {
      return this.$store.getters.getAllVariants
    }
  },
  methods: {
    openModal(variant) {
      this.$emit('openSuccessModal')
      this.$store.commit('updateSelectedVariant', {
        selected: variant
      })
    }
  }
}
</script>

<style scoped>

  div {
    margin-bottom: 2rem;
  }

  p {
    padding: 0;
  }

  .outOfStock {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 1440px) {
    div {
      width: 98%;
      margin-inline: auto;
    }
  }
</style>