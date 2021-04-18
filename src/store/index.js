import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    variants: [
      {
        id: 0,
        title: "Pledge with no reward",
        pledge: "",
        description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
      },
      {
        id: 1,
        title: "Bamboo Stand",
        pledge: "Pledge $25 or more",
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        quantity: 101
      },
      {
        id: 2,
        title: "Black Edition Stand",
        pledge: "Pledge $75 or more",
        description: "You get a Black Special Edition computer and a personal thank you. You'll be added to a special Backer member list. Shipping is included",
        quantity: 64
      },
      {
        id: 3,
        title: "Mahogany Special Edition",
        pledge: "Pledge $200 or more",
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you! You'll be added to a special Backer member list. Shipping is included",
        quantity: 0
      }
    ],
    project: {
      backed: 89914,
      backers: 5007,
      daysLeft: 56
    }
  },
  mutations: { // synchronous way to update state
    
  },
  actions: {},
  modules: {},
  getters: {
    getAllVariants() {
      return store.state.variants
    },
    getProjectDetails() {
      return store.state.project
    }
  }
});

export default store