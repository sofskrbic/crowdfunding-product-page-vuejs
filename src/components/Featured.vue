<template>
  <div class="container">
    <img src="../assets/logo-mastercraft.svg" alt="Mastercraft logo" class="mastercraft-logo">
    <h1>Mastercraft Bamboo Monitor Riser</h1>
    <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
    <div class="split">
      <button class="btn btn-teal" @click="$emit('showModal')">Back this project</button>
      <button class="btn btn-icon">
        <img src="../assets/icon-bookmark.svg" alt="Bookmark icon">
        <span>Bookmark</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Featured',
  
}
</script>

<style scoped>

  .container {
    width: 90%;
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    padding: 2rem 1rem;
    margin-inline: auto;
    margin-top: -3.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .mastercraft-logo {
    width: 60px;
    height: 60px;
    margin-inline: auto;
    margin-top: -4rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: var(--fs-h1);
  }

  .split {
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>