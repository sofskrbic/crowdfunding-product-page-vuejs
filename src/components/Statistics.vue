<template>
  <div class="container">
    <div class="split">
      <p><span>$89,914</span> of $100,000 backed</p>
      <hr>
      <p><span>5,007</span> total backers</p>
      <hr>
      <p><span>56</span> days left</p>
    </div>
    <div class="progress">
      <div class="progress-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
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

    .split {
      flex-direction: column;
    }

    p {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    hr {
      color: var(--clr-neutral-300);
      opacity: 0.4;
      width: 30%;
      margin-inline: auto;
    }

    span {
      font-size: var(--fs-statistics);
      font-weight: var(--fw-bold);
      color: var(--clr-neutral-900);
      text-align: center;
    }

    .progress {
      width: 100%;
      height: 1rem;
      background-color: var(--clr-neutral-300);
      margin: 0 auto;
      border-radius: 50px;
    }

    .progress-bar {
      width: 75%;
      height: 1rem;
      background-color: var(--clr-primary);
      border-radius: 50px;
    }
</style>