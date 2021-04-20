<template>
  <div class="container-modal">
    <div class="split">
      <h3>Back this project</h3>
      <img src="../assets/icon-close-modal.svg" alt="Close modal icon" @click="$emit('closeModal')">
    </div>
    <p>
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
    </p>
    <div>
      <SelectPledge v-for="variant in allVariants" :key="variant.id"
        :id="variant.id"
        :title="variant.title"
        :pledge="variant.pledge"
        :description="variant.description"
        :quantity="variant.quantity"
        :class="{ outOfStock: variant.quantity == 0 }"
        @onUpdate="updateActiveVariant"
        @finishPledge="finishPledgeAction"
      />
    </div>
  </div>
</template>

<script>
import SelectPledge from './SelectPledge'

export default {
  name: 'SelectionModal',
  methods: {
    updateActiveVariant(variant) {
      this.$store.commit('updateSelectedVariant', {
        selected: variant
      })
    },
    finishPledgeAction() {
      this.$emit('openSuccess')
    }
  },
  computed: {
    allVariants() {
      return this.$store.getters.getAllVariants
    }
  },
  components: {
    SelectPledge,
  },
}
</script>

<style scoped>
  .container-modal {
    width: 90%;
    position: absolute;
    z-index: 20;
    left: 50%;
    transform: translateX(-50%);
    top: 5rem;
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    padding-inline: 1.5rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
  }

  img {
    cursor: pointer;
  }

  p {
    text-align: start;
    padding-bottom: 1rem;
    padding-inline: 0;
  }

  .container {
    margin-bottom: 1rem;
  }

  .split {
    justify-content: space-between;
    padding-top: 1rem;
  }
</style>