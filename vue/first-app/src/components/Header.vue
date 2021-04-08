<template>
  <div class="header">
    <p>Vue</p>
    <div class="exo">
      <router-link to="/exo1" tag="button">Test 1</router-link>
      <router-link to="/exo2" tag="button">Test 2</router-link>
      <router-link to="/exo3" tag="button">Test 3</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style>
.header {
  width: 100%;
  padding: 2%;
  font-size: 30px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  font-family: "Courier New", monospace;
  text-align: center;
    margin-bottom: 1%;
}
</style>