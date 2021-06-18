<template>
  <!-- TOKENOMICS AREA START -->

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
              <img src="images/moonkat1.jpg" alt="about-img" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row product-pa">
              <div class="col-lg-7 mob-mar-bottom">
                  <div class="product-item">
                      <div class="row">
                          <div class="col-lg-8 col-md-7 product-txt">
                              <span>Total Supply:</span>
                              <h3>1 Quadrillion</h3>
                          </div>
                          <div class="col-lg-8 col-md-7 product-txt">
                              <span>Circulating Supply:</span>
                              <h3>400,000,000,000,000</h3>
                          </div>
                          <div class="col-lg-8 col-md-7 product-txt">
                              <span>Burned Forever: </span>
                              <h3>400,000,000,000,000</h3>
                              <a href="#">Liquidity Locks</a>
                              <a href="#">Token Burn</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-5 mob-mar-bottom">
                  <div class="product-item">
                      <div class="row">
                          <div class="col-lg-8 col-md-7 product-txt">
                              <span>1 $RDS price:</span>
                              <h3>$0.000000001</h3>
                          </div>
                          <div class="col-lg-8 col-md-7 product-txt">
                              <span>Market Cap:</span>
                              <h3>$3,112,890</h3>
                          </div>
                          <div class="col-lg-8 col-md-7 product-txt">
                              <span>Airdrop pool:</span>
                              <h3>100,000,000,000,000</h3>
                              <a href="#">Smart Contract</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div> -->
    <div class="row">
      <div class="col-lg-10 m-auto about-item col-md-12">
        <div class="row">
          <div class="col-lg-4 col-sm-8 m-sm-auto text-center col-md-5">
            <div class="">
              <img src="images/nft.svg" alt="about-img" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-1 col-md-1"></div>
          <div class="col-lg-7 col-md-6">
            <div class="about-txt">
              <span class="separet-span">MoonKat NFTS</span>
              <p>
                Our superb use case enables all kitty lovers to mint unique NFTS for their pets backed by a real-world
                product like T-shirts, sweatshirts, hats, masks and many, many more! These NFTs can be further traded on
                the platform.
                <br />
                COMING SOON!
              </p>
              <span class="separet-span">The Kitty Foundation</span>
              <p class="separate-p tab-hider">
                We are neither blind nor ignorant to the harsh treatments given to kitties worldwide, especially
                physically deformed kitties , we believe every kitty is unique in its own way. Your funds will go to the
                different feline charities world wide
              </p>
              <!-- <a href="#">Donate</a> -->
              <a href="#" onclick="CopyToClipboard('0x193ED1547ef35e0CbdF8c785E4C5D64699e2A6B9');return false;"
                >Donate</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- TOKENOMICS AREA ENDS -->
</template>

<script>
export default {
  name: "Tokenomics",
};
</script>

<style scoped>
*=========================== 3.0 *** FEATURE area START *** =============================*/ #overview {
  padding: 80px 0;
}

.over-pa {
  padding-top: 60px;
}

.over-item {
  background: #161616;
  -webkit-box-shadow: 0 31px 35px rgba(0, 0, 0, 0.1);
  box-shadow: 0 31px 35px rgba(0, 0, 0, 0.1);
  padding: 35px 31px;
  margin-top: 30px;
}

.unique-style,
.unique-style2 {
  position: relative;
}

.unique-style::after {
  position: absolute;
  content: "";
  top: 50%;
  right: -145px;
  height: 2px;
  width: 190px;
  border: 2px solid #ededed;
  border-color: #1d1d1d;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -11;
}

.unique-style::before {
  position: absolute;
  content: "";
  top: 50%;
  right: -152px;
  height: 10px;
  border-radius: 50%;
  width: 10px;
  background: #ff7657;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -1;
}

.unique-style2:after {
  position: absolute;
  content: "";
  top: 50%;
  left: -170px;
  height: 2px;
  width: 230px;
  border: 2px solid #ededed;
  border-color: #1d1d1d;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -11;
}

.unique-style2:before {
  position: absolute;
  content: "";
  top: 50%;
  left: -171px;
  height: 10px;
  border-radius: 50%;
  width: 10px;
  background: #ff7657;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -1;
}

.unique-style3::after {
  position: absolute;
  content: "";
  top: -70px;
  left: 20px;
  height: 230px;
  width: 2px;
  border: 2px solid #ededed;
  border-color: #1d1d1d;
  z-index: -11;
}

.unique-style3::before {
  position: absolute;
  content: "";
  top: -76px;
  left: 16px;
  height: 10px;
  border-radius: 50%;
  width: 10px;
  background: #ff7657;
  z-index: -1;
}

.unique-style4::after {
  position: absolute;
  content: "";
  bottom: -105px;
  right: 20px;
  height: 230px;
  width: 2px;
  border: 2px solid #ededed;
  border-color: #1d1d1d;
  z-index: -11;
}

.unique-style4::before {
  position: absolute;
  content: "";
  bottom: -106px;
  right: 17px;
  height: 10px;
  border-radius: 50%;
  width: 10px;
  background: #ff7657;
  z-index: -1;
}

.header-text h3 {
  font-size: 37px;
  font-family: pb;
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

.over-i {
  font-size: 27px;
  color: #fff;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  text-align: center;
  background: #f8615a;
}

.over-item h3 {
  font-size: 24px;
  color: white;
  font-family: pb;
  padding: 20px 0;
  position: relative;
}

.over-item p {
  font-size: 17px;
  color: #787878;
  line-height: 26px;
}

.over-btn {
  padding-top: 15px;
}

.over-btn a {
  color: #ff7657;
  font-size: 17px;
  font-family: pb;
}

over-btn a i {
  padding-right: 5px;
}

.txt-right {
  text-align: right;
}

.txt-right p {
  padding-left: 20px;
}

.txt-left p {
  padding-right: 20px;
}
</style>
