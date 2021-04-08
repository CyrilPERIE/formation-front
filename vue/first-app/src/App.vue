<template>
  <body>
    <Header />
    <router-view />
    <Footer />
  </body>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  background-color: rgb(209, 209, 209);
}

.exo {
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: rgb(245, 245, 245);
  padding: 100px;
  max-width: 80%;
  margin: auto;
  margin-bottom: 1%;
}

button {
  margin-left: 15px;
  margin-right: 15px;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border: 2px solid #4caf50;
  font-family: "Courier New", monospace;
}

button:hover {
  background-color: white;
  color: #4caf50;
  border: 2px solid #4caf50;
}

button:disabled {
  background-color: rgb(209, 209, 209);
  color: black;
  border: 2px solid black;
}

input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: black;
  background-color: rgb(245, 245, 245);
}
input:focus {
  border-color: #4caf50;
}
</style>
