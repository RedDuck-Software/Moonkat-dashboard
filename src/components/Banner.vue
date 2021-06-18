<template>
  <div>
    <div id="particles-js" class=".particles-js-canvas-el"></div>
    <div class="design-layer"></div>
    <div class="backtotop">
      <a href="#banner"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
    </div>
    <div class="container zindex">
      <div class="row">
        <div class="col-lg-7 banner-txt">
          <!-- <div class="mb-4">
            <a href="#">Presale</a>
            <a href="#">Moon Sheet</a>
          </div> -->
          <!-- <h3>$MKAT Presale Countdown</h3> -->
          <!-- <div id="flipdown" class="flipdown"></div> -->
          <h3>MoonKat Finance</h3>
          <p>
            MoonKat ($MKAT) is a community driven project built on Binance Smart Chain #BSC. MoonKat brings the most
            disruptive approach to BSC ecosystem: A community based project which ensures that holders of $MKAT are
            entitled to receive BNB through the community pool system. You don’t have to do anything to Earn BNB, just
            hold $MKAT in your wallet.
          </p>
          <a href="./documents/Moonkat Litepaper-2-1.pdf" class="red">Whitepaper</a>
          <!--<a
          href="https://bscscan.com/token/0xd6378cb2f3a9dff595ad8f26d590c11c39e3727b"
          >Smart Contract</a > -->
        </div>
        <div class="col-lg-5">
          <div class="banner-img">
            <img src="images/moonKat.jpg" alt="banner-img" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- BANNER AREA ENDS -->
</template>

<script>
export default {
  name: "Banner",
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
  border: 2px solid #ededed;
  display: block;
  border-color: #1d1d1d;
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
  border: 2px solid #ededed;
  display: block;
  border-color: #1d1d1d;
  -webkit-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  transform: rotate(-60deg);
}

.banner-txt h3 {
  font-size: 36px;
  font-family: pb;
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

.separate-p {
  padding-bottom: 40px;
}

.banner-txt a {
  padding: 14px 20px;
  background: #ff7657;
  color: white;
  font-family: pb;
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
</style>
