<template>
  <body>
    <Header />
    <Home />

    <div class="exo">
      <Exo1 msg="Exo 1!" />
    </div>

    <div class="exo">
      <Exo2 msg="Exo 2!" />
    </div>
    
    <div class="exo">
      <Exo3 msg="Exo 3!" />
    </div>
    <Footer />
  </body>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Exo1 from "./components/Exo1.vue";
import Exo2 from "./components/Exo2.vue";
import Exo3 from "./components/Exo3.vue";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Exo1,
    Exo2,
    Exo3,
    Home,
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
