<template>
  <div id="app">
    <Header />
    <transition
      name="router-transition"
      enter-active-class="animated zoomIn"
      leave-active-class="animated bounceOutRight"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "App",
  components: { Header }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

body {
  margin: 0;
}

#app {
  height: 50vh;
  margin: 0 auto;
  background: #fff;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}

.page {
  position: fixed;
  right: 0;
  left: 0;
  width: inherit;
  padding: 0 50px;
}
</style>
