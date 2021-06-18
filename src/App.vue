<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <!--    <Preloader />-->
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style src="@/assets/responsive.css"></style>
<style src="@/assets/custom__style.css"></style>
<style src="@/assets/style.css"></style>
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
