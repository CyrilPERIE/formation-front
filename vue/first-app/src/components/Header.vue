<template>
  <div class="header">
    <p>Vue</p>
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