<template>
  <section id="banner">
    <vue-particles lines-color="#212529" color="#212529" :particle-opacity="0.7" />
    <div class="design-layer"></div>
    <div class="backtotop">
      <a href="#banner"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
    </div>
    <div class="container zindex">
      <div class="row">
        <div class="col-lg-7 banner-txt">
          <h3>MoonKat Finance</h3>
          <p>
            MoonKat ($MKAT) is a community driven project built on Binance Smart Chain #BSC. MoonKat brings the most
            disruptive approach to BSC ecosystem: A community based project which ensures that holders of $MKAT are
            entitled to receive BNB through the community pool system. You don’t have to do anything to Earn BNB, just
            hold $MKAT in your wallet.
          </p>
          <a
            :href="`${publicPath}${pdfName}`"
            tabindex="-1"
            class="red"
            target="_blank"
            download="Moonkat-Litepaper.pdf"
            >Whitepaper
          </a>
        </div>
        <div class="col-lg-5">
          <div class="banner-img">
            <img src="@/assets/images/Moonkat.png" alt="banner-img" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  data: () => ({
    pdfName: "Moonkat-Litepaper.pdf",
    publicPath: process.env.BASE_URL,
  }),
  mounted() {},
  methods: {},
};
</script>

<style scoped>
#banner {
  padding: 260px 0 100px;
  position: relative;
  width: 100%;
}

#banner::after {
  position: absolute;
  content: "";
  top: 170px;
  right: 80%;
  overflow: hidden;
  width: 800px;
  height: 800px;
  border: 2px solid #1d1d1d;
  display: block;
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}

#banner::before {
  position: absolute;
  content: "";
  top: -349px;
  right: -300px;
  overflow: hidden;
  width: 800px;
  height: 800px;
  border: 2px solid #1d1d1d;
  display: block;
  -webkit-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  transform: rotate(-60deg);
}

.design-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.design-layer::after {
  position: absolute;
  content: "";
  top: 380px;
  right: 0;
  width: 170px;
  height: 140px;
  background: #ff7657;
  z-index: -1;
  -webkit-clip-path: polygon(34% 32%, 64% 46%, 100% 31%, 100% 55%, 65% 70%, 33% 56%, 0 61%, 0 39%);
  clip-path: polygon(34% 32%, 64% 46%, 100% 31%, 100% 55%, 65% 70%, 33% 56%, 0 61%, 0 39%);
  -webkit-box-shadow: 0 31px 35px rgba(0, 0, 0, 0.1);
  box-shadow: 0 31px 35px rgba(0, 0, 0, 0.1);
}

.design-layer::before {
  position: absolute;
  content: "";
  top: 430px;
  right: 0;
  width: 170px;
  height: 140px;
  background: #ff7657;
  z-index: -1;
  -webkit-clip-path: polygon(34% 32%, 64% 46%, 100% 31%, 100% 55%, 65% 70%, 33% 56%, 0 61%, 0 39%);
  clip-path: polygon(34% 32%, 64% 46%, 100% 31%, 100% 55%, 65% 70%, 33% 56%, 0 61%, 0 39%);
  -webkit-box-shadow: 0 31px 35px rgba(0, 0, 0, 0.1);
  box-shadow: 0 31px 35px rgba(0, 0, 0, 0.1);
}

@media (max-width: 575px) {
  #banner {
    padding: 140px 0 40px;
  }

  .banner-txt h3 {
    font-size: 33px;
  }

  .banner-txt {
    padding-bottom: 60px;
  }

  #banner::before,
  .mob-hide,
  .mob-img-hide,
  #team::before,
  #team::after,
  .design-layer {
    display: none;
  }

  .design-layer::after {
    top: 690px;
    right: -35px;
  }

  .design-layer::before {
    top: 730px;
    right: -35px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  #banner {
    padding: 155px 0 100px;
  }

  #banner::before {
    display: none;
  }

  .design-layer::before {
    top: 685px;
  }

  .design-layer::after {
    top: 727px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  #banner::before {
    display: none;
  }
}
</style>
