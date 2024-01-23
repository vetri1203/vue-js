<template>
  <!-- <h2>{{ hello }}</h2> -->
  <MyTemp data="vue hii"  :hello="hello"/>
</template>

<script>

import MyTemp from './components/MyTemp.vue';
export default {
  name: "App",
  components: {MyTemp},
  data() {
    return {
      hello: "Hello form vue",
    };
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
