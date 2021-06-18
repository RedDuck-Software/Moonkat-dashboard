<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Preloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #343a40;
  z-index: 9999;
}

.circles {
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.1rem 0 0.1rem;
  background-color: #e63b7a;
  opacity: 80%;
  border-radius: 50%;
  -webkit-animation-name: scaleIn;
  animation-name: scaleIn;
  -webkit-animation: 0.56s linear 0s infinite alternate scaleIn;
  -moz-animation: 0.56s linear 0s infinite alternate scaleIn;
  -o-animation: 0.56s linear 0s infinite alternate scaleIn;
  animation: 0.56s linear 0s infinite alternate scaleIn;
}
.circle:nth-child(1) {
  animation-delay: 0s;
}
.circle:nth-child(2) {
  animation-delay: 0.2s;
}
.circle:nth-child(3) {
  animation-delay: 0.3s;
}

@-webkit-keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1.2em);
  }
}
</style>
