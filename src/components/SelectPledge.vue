<template>
  <div class="container" :class="{disabled: quantity == 0, active: selected == id}">
    <div class="split">
    <input type="radio" name="variant-type" :id="id" :disabled="quantity == 0" :checked="selected == id" :value="id" @change="updateActiveVariant">
      <div class="modal-header">
        <h4>{{title}}</h4>
        <p class="pledge" v-show="pledge != null">Pledge ${{pledge}} or more</p>
      </div>
    </div>
    <p>{{description}}</p>
    <p class="quantity" v-show="quantity != null"><span>{{quantity}}</span> left</p>
    <div class="enter-pledge" v-show="selected == id && quantity > 0">
    <hr>
      <p>Enter your pledge</p>
      <div class="pledge-split">
        <div class="input"><span class="currency">$</span><input type="number" name="pledge" id="pledge" :min="pledge" :placeholder="pledge" v-model.number="pledgeAmount"></div>
        <button class="btn btn-teal" @click="initializePledge">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPledge',
  data() {
    return {
      pledgeAmount: ''
    }
  },
  computed: {
    selected() {
      return this.$store.getters.getSelectedVariant
    }
  },
  methods: {
    updateActiveVariant() {
      this.$emit('onUpdate', this.id)
    },
    initializePledge() {
      this.$emit('finishPledge', this.id)
      this.$store.commit('makePledge', {
        variantId: this.id,
        pledgeAmount: this.pledgeAmount
      })
    }
  },
  props: {
    id: {
      type:Number,
      required:true
    },
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
      type: Number
    }
  }

}
</script>

<style scoped>

@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='radio'] {
    -webkit-appearance: none;
    -webkit-appearance: none;
    --active: var(--clr-neutral-100);
    --active-inner: var(--clr-primary);
    --border: var(--clr-neutral-300);
    --focus: 2px hsla(176, 50%, 47%, .3);
    --border-hover: var(--clr-primary);
    --disabled: #F6F8FF;
    outline: none;
    vertical-align: top;
    width: 2rem;
    height: 2rem;
    margin: 0;
    display: inline-block;
    position: relative;
    cursor: pointer;
    border: 2px solid var(--bc, var(--border));
    background: var(--b, var(--active));
    transition: background .3s, border-color .3s, box-shadow .2s;

    border-radius: 50%;
  }

  input[type='radio']::after {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 22%;
    left: 20%;
    opacity: 0;
    transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
    background: var(--active-inner);
    transform: scale(var(--s, .7));
  }

  input[type='radio']:checked {
    --b: var(--active);
    --bc: var(--border);
    --d-o: .3s;
    --d-t: .6s;
    --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
  }

  input[type='radio']:checked::after {
    opacity: 1;
  }

  input[type='radio']:disabled {
    --b: var(--disabled);
      cursor: not-allowed;
      opacity: .9;
  }

  input[type='radio']:hover {
     --bc: var(--border-hover);
  }

  input[type='radio']:focus {
    box-shadow: 0 0 0 var(--focus);
  }
}

.disabled {
  cursor: not-allowed;
  opacity: .4;
}

.container {
    width: 100%;
    border: 2px solid var(--clr-neutral-300);
    padding: 2rem 1.5rem;
    border-radius: 10px;
  }

.container.active {
  border: 2px solid var(--clr-primary);
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
    justify-content: flex-start;
    color: var(--clr-neutral-500);
  }

  .quantity {
    padding-block: 1rem;
  }

  span {
    font-weight: var(--fw-bold);
    font-size: 1.3rem;
    color: var(--clr-neutral-900);
    margin-right: .5rem;
  }

  hr {
    border-color: var(--clr-neutral-300);
    width: 120%;
    margin-bottom: 1.5rem;
    opacity: 0.2;
  }

  .split {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .checked-empty {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid var(--clr-neutral-300);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checked {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--clr-primary);
  }

  .modal-header {
    flex-direction: column;
    padding-left: 1rem;
  }

  .pledge {
    color: var(--clr-primary);
    font-weight: var(--fw-medium);
    display: flex;
    flex-direction: column;
  }

  .enter-pledge {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pledge-split {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .enter-pledge p {
    margin-bottom: 1rem;
  }

  input[type='number'] {
    width: 100%;
    border: none;
    -moz-appearance: textfield;
    text-align: start;
    font-weight: var(--fw-bold);
    color: var(--clr-neutral-900);
    font-size: 1rem;
  }

  input[type='number']:focus {
    outline: none;
    caret-color: var(--clr-primary);
  }

  .currency {
    font-size: var(--fs-default);
    color: var(--clr-neutral-500);
    font-weight: var(--fw-medium);
    padding-left: .5rem;
  }

  .input {
    display: flex;
    align-items: center;
    border-radius: 50px;
    border: 2px solid var(--clr-neutral-300);
    width: 35%;
    padding-block: 1rem;
    padding-inline: .5rem;
    margin-right: 1rem;
  }

  .btn {
    padding-inline: 1.5rem;
  }
</style>