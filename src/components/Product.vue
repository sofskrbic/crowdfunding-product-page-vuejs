<template>
  <div>
      <Variant
        v-for="variant in variants" :key="variant.id"
        v-show="variant.id != 0"
        :title="variant.title"
        :pledge="variant.pledge"
        :description="variant.description"
        :quantity="variant.quantity"
        :class="{ outOfStock: variant.quantity == 0 }"
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
</style>