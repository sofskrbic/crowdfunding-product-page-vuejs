<template>
  <div>
      <Variant
        v-for="variant in variants" :key="variant.id"
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
  data() {
    return {
      variants: [
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
    opacity: 0.5;
  }
</style>