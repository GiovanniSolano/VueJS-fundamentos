<template>
  <h2>{{customTitle}}</h2>
  <p>{{counter}} <sup>2</sup> = {{squareCounter}}</p>
  <p data-testid="counter">{{counter}}</p>
  <div class="buttons-container">
      <button @click="increase()">+1</button>
      <button @click="decrease()">-1</button>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {


    // props: ['title', 'start'],
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required: true
            validator(value) {
                return value >= 0;
            }

        }
    },

    data() {
        return  {
            counter: this.start
        }
    },

    methods: {

        increase() {
            this.counter += 1;
        },

        decrease() {
            this.counter -= 1;
        }

    },

    computed: {
        squareCounter() {
            return this.counter * this.counter;
        },

        customTitle() {
            return this.title || 'Counter';
        }
    }
}
</script>

<style>

button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>