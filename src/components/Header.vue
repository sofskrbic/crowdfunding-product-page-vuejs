<template>
  <div class="container">
    <div class="split">
      <img src="../assets/logo.svg" alt="Crowdfund logo" class="logo">
      <nav>
        <img src="../assets/icon-hamburger.svg" alt="Menu icon" id="menu-icon" @click="openMenu" v-show="!isOpen">
        <img src="../assets/icon-close-menu.svg" alt="Menu icon" id="close-icon" @click="openMenu" v-show="isOpen">
        <ul class="navigation-links" v-show="isOpen" :class="{active: isOpen}">
          <li><a href="#">About</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Get Started</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    openMenu() {
      this.isOpen = !(this.isOpen);
      this.$emit('overlayActive');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Hero image with navigation container */
  .container {
    background: url(../assets/image-hero-mobile.jpg) no-repeat, linear-gradient(var(--clr-neutral-500), var(--clr-neutral-100));
    background-size: cover;
    background-blend-mode: multiply;
    height: 35vh;
  }
/*  Class for splitting content in two+ columns */
  .split {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;
  }

/* Navigation style */
  .navigation-links {
    flex-direction: column;
    background-color: var(--clr-neutral-100);
    border-radius: 0.5rem;
    /* padding: 1rem 2.5rem; */
    /* display: none; */
  }

  .navigation-links li {
    border-bottom: 1px solid var(--clr-neutral-300);
  }

  .navigation-links li:nth-child(3) {
    border-bottom: none;
  }

  .navigation-links li, .navigation-links li a {
    padding: 0.8rem 0.3rem;
    color: var(--clr-neutral-900);
    font-weight: var(--fw-medium);
    font-size: var(--fs-body);
    padding-left: .8rem;
    padding-block: 1.2rem;
  }

  .navigation-links.active {
    display: flex;
    z-index: 20;
    width: 80%;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 1500ms ease-out;
  }

/* Navigation images styling */
  #menu-icon, #close-icon, .logo {
    cursor: pointer;
  }

  nav, .logo {
    z-index: 20;
  }
</style>
