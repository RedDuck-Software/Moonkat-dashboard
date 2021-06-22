<template>
  <section id="tokenomics">
    <div class="container">
      <div class="row header-text text-center about-header">
        <div class="col-lg-12">
          <h3 class="mt-4 pt-4">TOKE<span>NO</span>MICS</h3>
        </div>
      </div>
      <div class="row about-pa">
        <div class="col-lg-10 m-auto about-item col-md-12">
          <div class="row">
            <div class="col-lg-7 col-md-6">
              <div class="about-txt sm-reduce-pa">
                <span class="separet-span">Total Supply: 1 BILLION (1,000,000,000) $MKAT </span>
                <div class="p-bars">
                  <div class="col-lg-11 p-bar">
                    <span>74% Presale/Locked in Liquidity</span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 74%"
                        aria-valuenow="74"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-11 p-bar">
                    <span>6% Burn </span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 6%"
                        aria-valuenow="6"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-10 p-bar">
                    <span>5% Marketing & Airdrop </span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 5%"
                        aria-valuenow="5"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-10 p-bar">
                    <span>5% Team </span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 5%"
                        aria-valuenow="5"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-10 p-bar">
                    <span>10% Community Reserve </span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 5%"
                        aria-valuenow="5"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 text-center mob-hide sm-hide col-md-6">
              <div>
                <img src="@/assets/images/moonkat1.jpg" alt="about-img" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 m-auto about-item col-md-12">
          <div class="row">
            <div class="col-lg-4 col-sm-8 m-sm-auto text-center col-md-5">
              <div class="">
                <img src="@/assets/images/nft.svg" alt="about-img" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-1 col-md-1"></div>
            <div class="col-lg-7 col-md-6">
              <div class="about-txt">
                <span class="separet-span">MoonKat NFTS</span>
                <p>
                  Our superb use case enables all kitty lovers to mint unique NFTS for their pets backed by a real-world
                  product like T-shirts, sweatshirts, hats, masks and many, many more! These NFTs can be further traded
                  on the platform.
                  <br />
                  COMING SOON!
                </p>
                <span class="separet-span">The Kitty Foundation</span>
                <p class="separate-p tab-hider">
                  We are neither blind nor ignorant to the harsh treatments given to kitties worldwide, especially
                  physically deformed kitties , we believe every kitty is unique in its own way. Your funds will go to
                  the different feline charities world wide
                </p>

                <a href="#" onclick="donateUs()">Donate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tokenomics",
  data() {
    return {
      donateWallet: "0x193ED1547ef35e0CbdF8c785E4C5D64699e2A6B9",
    };
  },
  methods: {
    donateUs(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.about-header h3:after {
  width: 192px;
}

.about-header h3:after {
  width: 192px;
}

.about-pa {
  padding-top: 25px;
}

.about-item {
  padding-top: 90px;
}

.ai-one::after {
  position: absolute;
  content: "";
  top: 350px;
  left: -65px;
  width: 120px;
  height: 120px;
  border: 25px solid #161616;
  z-index: -1;
  border-radius: 50%;
}

.ai-two::after {
  position: absolute;
  content: "";
  top: 344px;
  right: -55px;
  width: 120px;
  height: 120px;
  border: 25px solid #161616;
  z-index: -1;
  -webkit-transform: rotate(35deg);
  -ms-transform: rotate(35deg);
  transform: rotate(35deg);
}

.ai-three::after {
  position: absolute;
  content: "";
  top: 350px;
  left: -65px;
  width: 120px;
  height: 120px;
  border: 25px solid #161616;
  z-index: -1;
  border-radius: 50%;
}

.about-img img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
}

.about-img:hover img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

.separet-span {
  font-family: Poppins, Helvetica, sans-serif;
  font-size: 19px;
  color: #ff7657;
}

.about-txt {
  padding-top: 30px;
}

.about-txt h3 {
  font-family: Poppins-Bold, Helvetica, sans-serif;
  font-size: 26px;
  color: #fff;
  padding-bottom: 16px;
  padding-top: 8px;
}

.about-txt p {
  font-size: 17px;
  color: #787878;
  line-height: 27px;
  padding-bottom: 30px;
}

.separate-p {
  padding-bottom: 50px !important;
}

.about-txt a {
  padding: 14px 20px;
  background: #ff7657;
  color: #fff;
  font-size: 18px;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  position: relative;
}

.about-txt a i {
  padding-left: 8px;
}

.about-txt a::after {
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

.about-txt a:hover:after {
  top: 6px;
}

.p-bar span {
  font-size: 18px;
  color: #787878;
}

.p-bars {
  padding-top: 35px;
}

.progress-bar {
  background: #ff7657;
}

.progress {
  background: #151515;
}

.p-bar {
  margin-bottom: 20px;
}

.counter-main {
  padding-top: 50px;
}

.counter-1 h5 {
  font-size: 18px;
  color: #ff7657;
  margin-top: -56px;
  margin-left: 28px;
  padding-bottom: 38px;
}

.counter-1 span {
  font-size: 18px;
  color: #787878;
}
</style>
