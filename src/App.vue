<template>
  <div id="app">
    <Header @overlayActive="activateOverlay"/>
    <SelectionModal v-show="selectionModal" 
      @closeModal="showSelectionModal" 
      @openSuccess="toggleSuccessModal"
     />
    <SuccessModal v-show="successModal" @closeModal="toggleSuccessModal" />
    <div :class="{dimmed: overlay}"></div>
    <Featured @showModal="showSelectionModal"/>
    <Statistics />
    <Project @openSelection="showSelectionModal" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Featured from './components/Featured.vue'
import Statistics from './components/Statistics.vue'
import Project from './components/Project.vue'
import SelectionModal from './components/SelectionModal.vue'
import SuccessModal from './components/SuccessModal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Featured,
    Statistics,
    Project,
    SelectionModal,
    SuccessModal
  },
  data() {
    return {
      overlay: false,
      selectionModal: false,
      successModal: false,
    }
  },
  methods: {
    activateOverlay() {
      this.overlay = !(this.overlay);
    },
    showSelectionModal() {
      this.selectionModal = !(this.selectionModal);
      this.activateOverlay()
    },
    toggleSuccessModal() {
      if (this.selectionModal) {
        this.selectionModal = false
        this.activateOverlay()
      }
      this.successModal = !(this.successModal)
      this.activateOverlay()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap');

:root {
  /* PRIMARY COLORS */
  --clr-primary: hsl(176, 50%, 47%);
  --clr-primary-dark: hsl(176, 72%, 28%);
  /* NEUTRAL COLORS */
  --clr-neutral-100: hsl(0, 0%, 100%);
  --clr-neutral-300: hsl(0, 0%, 95%);
  --clr-neutral-500: hsl(0, 0%, 48%);
  --clr-neutral-900: hsl(0, 0%, 0%);

  /* TYPOGRAPHY */
  --ff-default: 'Commissioner', sans-serif;
  /* FONT SIZES */
  --fs-body: 1rem;
  --fs-h1: 1.5rem;
  --fs-button: 0.875rem;
  --fs-statistics: 2.3rem;
  /* FONT WEIGHTS */
  --fw-normal: 400;
  --fw-medium: 500;
  --fw-bold: 700;

  /* SCREEN WIDTH */
  --screen-mobile: 375px;
  --screen-desktop: 1440px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background-color: var(--clr-neutral-300);
}

h1, h2, h3, h4 {
  color: var(--clr-neutral-900);
  text-align: center;
}

p {
  padding: 1.5rem 0.5rem;
  line-height: 1.7;
  text-align: center;
}

/* UTILITY CLASSES */

.dimmed {
  /* z-index: 1; */
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--clr-neutral-900);
  opacity: 0.6;
}

.split {
  display: flex;
}

.btn {
  border-radius: 50px;
  font-weight: var(--fw-bold);
  border: none;
  padding: 1.1rem 3rem;
  font-size: var(--fs-button);
}

.btn:hover {
  cursor: pointer;
}

.btn-teal {
  background-color: var(--clr-primary);
  color: var(--clr-neutral-100);
}

.btn-teal:hover {
  background-color: var(--clr-primary-dark);
}

.btn-teal:disabled {
  background-color: var(--clr-neutral-300);
  cursor: unset;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
}

.btn-icon span {
  display: none;
}

.btn-icon:hover {
  opacity: 0.7;
}

/* GENERAL STYLES */
#app {
  font-family: var(--ff-default);
  font-size: var(--fs-body);
  font-weight: var(--fw-normal);
  color: var(--clr-neutral-500);
}

#app ul {
  list-style: none;
}

#app ul li a {
  text-decoration: none;
}
</style>
