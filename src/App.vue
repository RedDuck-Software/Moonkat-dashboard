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

<style>
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

<style>
.team-pa {
  padding-top: 85px;
}

.header-text h3 {
  font-size: 37px;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  color: white;
  letter-spacing: 10px;
  position: relative;
  display: inline-block;
}

.header-text h3:after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 240px;
  height: 2px;
  background: #1d1d1d;
}

.header-text h3 span {
  color: #ff7657;
}

.team-header h3:after {
  width: 164px;
}

.banner-txt h3 {
  font-size: 36px;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  color: #ff7657;
  line-height: 45px;
  padding-bottom: 23px;
  padding-top: 16px;
}

.banner-txt p {
  font-size: 17px;
  color: #787878;
  padding-right: 40px;
  line-height: 26px;
  padding-bottom: 45px;
}

.banner-txt a {
  padding: 14px 20px;
  background: #ff7657;
  color: white;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  font-size: 18px;
  position: relative;
}

.banner-txt a:hover:after {
  top: 7px;
}

.banner-txt a::after {
  width: 100%;
  height: 100%;
  position: absolute;
  content: "";
  top: 10px;
  left: 0;
  background: #db5536;
  z-index: -1;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
}

input::placeholder,
textarea::placeholder {
  color: white !important;
}
</style>
