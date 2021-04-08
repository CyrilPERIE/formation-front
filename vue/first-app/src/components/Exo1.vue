<template>
  <div class="exo">
    <h1>Test 1</h1>
    <p v-if="!show">{{ counter }}</p>
    <br v-if="show"/>
    <br v-if="show"/>
    <button @click="minus">-</button>
    <button @click="plus">+</button>
    <br />
    <br />
    <button @click="alert">Alert !</button>
    <br />
    <br />
    <button @click="hidden">{{buttonmsg}}</button>
  </div>
</template>

<script>
export default {
  name: "Exo1",
  props: {
  },
  data() {
    return {
      counter: 1,
      show: false,
      buttonmsg: "Montrer le compteur"
    };
  },

  methods: {
    plus: function () {
      this.counter += 1;
    },
    minus: function () {
      this.counter -= 1;
    },
    alert: function() {
      alert("aaaaaah")
    },
    hidden: function() {
      this.show ? this.buttonmsg = "Cacher le compteur": this.buttonmsg = "Montrer le compteur";
      this.show ? this.show = false: this.show = true;
    }
  },
};
</script>

<style>
</style>