<template>
  <div class="container">
    <div class="split">
      <h4>{{title}}</h4>
      <p class="pledge" v-show="pledge != null">Pledge ${{pledge}} or more</p>
    </div>
    <p>{{description}}</p>
    <p class="quantity" v-show="quantity != null"><span>{{quantity}}</span> left</p>
    <button class="btn btn-teal"
      :disabled = "quantity == 0"
      @click="initializePledge"
    >Select Reward</button>
  </div>
</template>

<script>
export default {
  name: 'Variant',
  props: {
    title: {
      type: String,
      required: true
    },
    pledge: {
      type: Number,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: false
    }
  },
  methods: {
    initializePledge() {
      this.$emit('finishPledge', this.id)
    }
  }
}
</script>

<style scoped>

  .container {
    width: 100%;
    border: 2px solid var(--clr-neutral-300);
    padding: 2rem 1.5rem;
    border-radius: 10px;
  }

  h4, p {
    text-align: start;
    padding: 0;
  }

  h4 {
    padding-bottom: .3rem;
  }

  p {
    display: flex;
    align-items: center;
  }

  .quantity {
    padding-top: 1rem;
  }

  span {
    font-weight: var(--fw-bold);
    font-size: var(--fs-statistics);
    color: var(--clr-neutral-900);
    margin-right: .5rem;
  }

  .split {
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .pledge {
    color: var(--clr-primary);
    font-weight: var(--fw-medium);
  }

  .btn {
    margin-top: 1.5rem;
  }
</style>