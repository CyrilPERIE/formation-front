<template>
  <div>
    <h1>Test 3</h1>

    <p>Name :</p>
    <input
      v-bind:class="{ valid: !isNameValidBool }"
      v-on:keyup="isNameValid"
      v-model="name"
      type="text"
    />
    <eva-icon v-if="!isNameValidBool" name="close-outline" fill="red" />
    <eva-icon v-if="isNameValidBool" name="checkmark-outline" fill="#4caf50" />

    <p>Password :</p>
    <input v-bind:class="{ valid: !isPasswordValidBool }" v-on:keyup="isPasswordValid" v-model="password" type="text" />
    <eva-icon v-if="!isPasswordValidBool" name="close-outline" fill="red" />
    <eva-icon v-if="isPasswordValidBool" name="checkmark-outline" fill="#4caf50" />

    <p>Mail :</p>
    <input v-bind:class="{ valid: !isMailValidBool }"  v-on:keyup="isMailValid" v-model="mail" type="text" />
    <eva-icon v-if="!isMailValidBool" name="close-outline" fill="red" />
    <eva-icon v-if="isMailValidBool" name="checkmark-outline" fill="#4caf50" />

    <br /><br />
    <button :disabled='!isNameValidBool || !isPasswordValidBool || !isMailValidBool' @click="addUser">Add user</button>
    <br /><br />
    <div class="item" v-for="user in userlist" v-bind:key="user.name">
      {{ user.name }} | {{ user.password }} | {{ user.mail }}
    </div>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";

export default {
  name: "Exo3",
  components: {
    [EvaIcon.name]: EvaIcon,
  },
  props: {
  },
  data() {
    return {
      userlist: [
        {
          name: "name",
          password: "password",
          mail: "mail@mail.mel",
        },
      ],
      name: "",
      isNameValidBool: false,
      password: "",
      isPasswordValidBool: false,
      mail: "",
      isMailValidBool: false,
    };
  },

  methods: {
    isNameValid: function () {
      var re = /^$/;
      this.isNameValidBool = !re.test(this.name);
    },
    isPasswordValid: function () {
      var re = /^$/;
      this.isPasswordValidBool = !re.test(this.password);
    },
    isMailValid: function () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.isMailValidBool = re.test(this.mail);
    },
    addUser: function () {
      if (
        this.isNameValidBool &&
        this.isPasswordValidBool &&
        this.isMailValidBool
      ) {
        this.userlist.push({
          name: this.name,
          password: this.password,
          mail: this.mail,
        });
        this.reset()
      }
    },
    reset: function () {
        this.name = "";
        this.password = "";
        this.mail = "";
        
        this.isNameValid()
        this.isPasswordValid()
        this.isMailValid()
    }
  },
};
</script>

<style>
.valid {
    border-color: red;
}
.valid:focus {
    border-color: red;
}
</style>