<template>
  <div class="exo">
    <h1>Test 2</h1>
    <input v-model="search" type="text" />
    <button @click="addElem">Add</button>
    <p v-if="isInList" class="alert">Déja dans la liste ou zone de texte vide</p>
    <p></p>
    <div class="items">
      <div class="item" v-for="item in filteredList()" v-bind:key="item">
        {{ item }}
        <eva-icon
          name="trash-outline"
          animation="shake"
          fill="red"
          v-on:click="deleteElem(item)"
        ></eva-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";

export default {
  name: "Exo2",
  components: {
    [EvaIcon.name]: EvaIcon,
  },
  props: {
  },
  data() {
    return {
      list: ["banane", "pomme", "fraise"],
      newElem: "",
      search: "",
      isInList: false,
    };
  },

  methods: {
    addElem: function () {
      if (
        this.search == "" ||
        this.list.filter((elem) => elem == this.search).length > 0
      ) {
        this.isInList = true;

      } 
      else {
        this.isInList = false;
        this.list.push(this.search);
        this.search = "";
      }
    },
    deleteElem: function (key) {
      this.list.splice(this.list.indexOf(key), 1);
    },
    filteredList: function () {
      if (this.search == "") {
        return this.list;
      }
      return this.list.filter((elem) => elem.includes(this.search));
    },
  },
};
</script>

<style>
.items {
  margin-top: 1%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  background-color: rgb(245, 245, 245);
}

.item {
  margin-bottom: 1%;
  margin-top: 1%;
  margin-right: 1%;
  margin-left: 1%;
}

.alert {
  color: red;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>