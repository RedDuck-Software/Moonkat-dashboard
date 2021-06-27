<template>
  <nav class="navbar navbar-expand-lg  navbar-light bg-light fixed-top" :class="isSticky ? stickyClass : ''">
    <div class="container">
      <a class="navbar-brand" href="/">MoonKat<b>.</b></a>
      <button v-show="isMobile" type="button" @click="toggleMenu()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div class="header-social">
        <a href="https://twitter.com/moonkatBSC"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="https://t.me/moonkat_finance"><i class="fa fa-telegram" aria-hidden="true"></i></a>
        <a href="https://medium.com/@moonkatfinance"><i class="fa fa-medium" aria-hidden="true"></i></a>
      </div>
      <transition name="list">
        <div v-show="isMobile && showMenuMobile" id="navbarSupportedContent" class=" navbar-collapse menu-main">
          <ul class="navbar-nav ml-auto menu-item">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home', hash: '#tokenomics' }">Tokenomics</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#roadmap">Roadmap</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#team">Team</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#media">Media</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#contact">FAQs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link bor" to="/connect-wallet">Launch Dapp</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Header",
  components: {},
  data() {
    return {
      isSticky: false,
      stickyClass: "nav-bg",
      scrollPosition: 0,
      showMenuMobile: false,
      isMobile: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      this.isSticky = this.scrollPosition >= 100;
    },
    toggleMenu() {
      this.showMenuMobile = !this.showMenuMobile;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 9999;
  -weebkit-transition: all linear 0.3s;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
  padding-top: 30px;
  background: transparent !important;
}

.menu-item {
  padding-right: 30px;
}

.navbar-light .navbar-nav .nav-link {
  color: #fff;
  font-family: Poppins, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 500;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
  position: relative;
  margin-right: 18px;
}

.bor {
  background: #161616;
  padding: 10px 25px !important;
  position: relative;
  border-radius: 3px;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
}

.bor:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 44px;
  top: 7px;
  left: 0;
  background: #212121;
  z-index: -1;
  border-radius: 3px;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
  -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.67);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.67);
}

.bor:hover:after,
.bor:focus:after {
  top: 0;
}

.bor:focus:after {
  top: 0;
}

.navbar-light .navbar-nav .nav-link:focus {
  color: white;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #ff7657;
}

.navbar-light .navbar-nav .nav-link.router-link-active {
  color: #ff7657;
}

.navbar-light .navbar-brand {
  color: #fff;
  font-family: Poppins, Helvetica, sans-serif;
  font-size: 26px;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
}

.navbar-light .navbar-brand b {
  color: #ff7657;
}

.navbar-light .navbar-brand:focus {
  color: #ff7657;
}

.navbar-light .navbar-brand:hover {
  color: #ff7657;
}

.nav-bg {
  background: #161616 !important;
  padding: 25px 0;
  -webkit-box-shadow: 0 31px 35px rgba(0, 0, 0, 0.1);
  box-shadow: 0 31px 35px rgba(0, 0, 0, 0.1);
}

.nav-bg .navbar-brand {
  color: #fff;
  font-size: 26px;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
}

.nav-bg .navbar-brand:hover {
  color: #fff;
}

.nav-bg .bor {
  background: #ff7657;
}

.nav-bg .bor:after {
  background: #db5536;
}

.nav-bg .bor:hover {
  color: white !important;
}

.nav-bg .navbar-nav .nav-link {
  color: #fff;
}

.menu-main {
  /*position: absolute;*/
}

.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
  content: "\f0c9";
}

.list-enter,
.list-leave-to {
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
</style>
