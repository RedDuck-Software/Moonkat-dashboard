<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <!--    <Preloader />-->
  </div>
</template>

<script>
import Header from "./components/Header";
import styles from "./assets/styles/style.css";

export default {
  name: "App",
  components: {
    Header,
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

@font-face {
  font-family: "Poppins-Light";
  src: local("Poppins-Light"), url(./assets/fonts/Poppins-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins";
  src: local("Poppins"), url(./assets/fonts/Poppins-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins-Bold";
  src: local("Poppins-Bold"), url(./assets/fonts/Poppins-Bold.ttf) format("truetype");
}
</style>
