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
      <SelectPledge v-for="variant in variants" :key="variant.id"
        :id="variant.id"
        :title="variant.title"
        :pledge="variant.pledge"
        :description="variant.description"
        :quantity="variant.quantity"
        :class="{ outOfStock: variant.quantity == 0 }"
        :selected="selected"
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
  data(){
    return {
      selected: -1,
      variants: [
      {
        id: 0,
        title: 'Pledge with no reward',
        pledge: '',
        description: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'
      },
      {
        id: 1,
        title: 'Bamboo Stand',
        pledge: 'Pledge $25 or more',
        description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you\'ll be added to a special Backer member list.',
        quantity: 101
      },
      {
        id: 2,
        title: 'Black Edition Stand',
        pledge: 'Pledge $75 or more',
        description: 'You get a Black Special Edition computer and a personal thank you. You\'ll be added to a special Backer member list. Shipping is included',
        quantity: 64
      },
      {
        id: 3,
        title: 'Mahogany Special Edition',
        pledge: 'Pledge $200 or more',
        description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you! You\'ll be added to a special Backer member list. Shipping is included',
        quantity: 0
      }
    ]
    }
  },
  methods: {
    updateActiveVariant(variant) {
      this.selected = variant
    },
    finishPledgeAction() {
      this.$emit('closeModal')
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