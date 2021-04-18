<template>
  <div class="container">
    <div class="split">
      <p><span>{{moneyCollected}}</span> of $100,000 backed</p>
      <hr>
      <p><span>{{totalBackers}}</span> total backers</p>
      <hr>
      <p><span>{{daysLeft}}</span> days left</p>
    </div>
    <div class="progress">
      <div class="progress-bar" id="progress-bar" :style="{ 'width' : percentage + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  data() {
    return {
      percentage: 0
    }
  },
  created() {
    var intval = setInterval(() => {
      if(this.percentage < Math.round(this.$store.getters.getProjectDetails.backed / 1000))
        this.percentage += 1.5
      else
        clearInterval(intval)
    }, 10);
  },
  computed: {
    moneyCollected() {
      let money = "$" + this.$store.getters.getProjectDetails.backed + ""      
      return money.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    totalBackers() {
      let total = this.$store.getters.getProjectDetails.backers + ""      
      return total.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    daysLeft() {
      return this.$store.getters.getProjectDetails.daysLeft
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
      height: 1rem;
      background-color: var(--clr-primary);
      border-radius: 50px;
    }
</style>