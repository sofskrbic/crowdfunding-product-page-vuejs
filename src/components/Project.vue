<template>
  <div class="container">
    <h3>About this project</h3>
    <p>
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
      your screen to a more comfortable viewing height. Placing your monitor at eye level
      has the potential to improve your posture and make you more comfortable while at work,
      helping you stay focused on the task at hand.
    </p>
    <p>
      Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
      your computer to allow notepads, pens, and USB sticks to be stored under the stand.
    </p>
    <div class="split">
      <Product @openSuccessModal="openSelection"/>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'Project',
  components : {
    Product,
  },
  methods: {
    openSelection() {
      this.$emit('openSelection')
    }
  }
}
</script>

<style scoped>

  .container {
    width: 90%;
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    padding-inline: 1.5rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  h3, p {
    text-align: start;
  }

  h3 {
    padding-top: 1rem;
    padding-inline: .5rem;
  }

  .split {
    flex-direction: column;
  }
</style>