<template>
  <component :is="state.showMobile ? Mobile : Pc" />
</template>

<script setup>
import Mobile from "./mobile/Mobile.vue";
import Pc from "./components/Pc.vue";

import { ref, reactive, onMounted } from "vue";

const width = document.documentElement.clientWidth;
const showMobile = width <= 1200;
const state = reactive({ showMobile });

onMounted(() => {
  console.log("Component is mounted!");

  window.onresize = () => {
    const width = document.documentElement.clientWidth;
    const showMobile = width <= 1200;
    state.showMobile = showMobile;
  };
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}
</style>
