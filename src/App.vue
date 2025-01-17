<template>
  <div id="app">
    <main-content></main-content>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import MainContent from "./components/MainContent.vue"



export default {
  name: "App",
  components: {
    MainContent,

  },
};
</script>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Russo+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cuprum:wght@500&display=swap');*/
@import url('https://fonts.googleapis.com/css2?family=Cuprum:wght@500&family=Squada+One&display=swap');

#app {
  font-family: 'Squada One', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;

}
</style>
