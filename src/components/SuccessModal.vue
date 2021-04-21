<template>
  <div class="container-modal">
    <img src="../assets/icon-check.svg" alt="Icon with a checked mark">
    <h3>Thanks for your support!</h3>
    <p>
      Your pledge brings us one step closer to sharing Mastercraft Bamboo
      Monitor Riser worldwide. You will get an email once our campaign is completed.
    </p>
    <button class="btn btn-teal" @click="$emit('closeModal')">Got it</button>
  </div>
</template>

<script>
export default {
  name: 'SuccessModal',
}
</script>

<style scoped>
  .container-modal {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    position: absolute;
    z-index: 20;
    left: 50%;
    transform: translateX(-50%);
    top: 12rem;
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    padding: 2.5rem 1.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    margin-inline: auto;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 0.875rem;
  }

  .btn {
    width: 50%;
    margin-inline: auto;
  }

  @media (min-width: 1440px) {
    .container-modal {
      width: 35%;
      padding: 3rem 3.3rem;
    }
  }
</style>