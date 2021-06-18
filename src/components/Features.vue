<template>

    <div class="container">
      <div class="row header-text text-center">
        <div class="col-lg-12">
          <h3>FEA<span>TU</span>RES</h3>
        </div>
      </div>
      <div class="row over-pa">
        <div class="col-lg-9 col-sm-12 m-auto">
          <div class="row">
            <div class="col-lg-6 col-sm-6">
              <div class="over-item txt-right unique-style3">
                <i class="fa fa-rocket over-i" aria-hidden="true"></i>
                <div class="break"></div>
                <h3>Community Built</h3>
                <p>
                  70% of tokens will be used for presale and to provide initial liquidity.
                  To ensure a fair and complete distribution, the Moonkat team owns 5% of
                  all tokens which is cliffed for six (6) months. For the ﬁrst 6 moths everyone
                  has to buy on the open market.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="over-item txt-left unique-style">
                <i class="fa fa-ban over-i" aria-hidden="true"></i>
                <div class="break"></div>
                <h3>Anti Pump-Dump-Exit Whales</h3>
                <p>
                  Transactions (sell/buy) that trade more than 0.1% of the
                  total supply will be rejected. Whales who don’t want to be
                  taxed 6% to make a transfer (between 2 wallets) that is
                  larger than 0.1% of the total supply, can use the atomic
                  transfer feature and be charged for 2.0 BNB without being taxed 6%.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="over-item txt-right unique-style2">
                <i class="fa fa-money over-i" aria-hidden="true"></i>
                <div class="break"></div>
                <h3>Automatic Liquidity Pool</h3>
                <p>
                  2% of every transaction contributes toward automatically generating further liquidity on Pancake Swap.
                  Beneﬁting long term $MKAT holders the most!
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="over-item txt-right unique-style2">
                <i class="fa fa-star over-i" aria-hidden="true"></i>
                <div class="break"></div>
                <h3>EARN $BNB REWARDS</h3>
                <p>
                  4% of every transaction is taken and re-distributed to
                  moonkat holders in $BNB. $MKAT holders can claim their BNB
                  at the end of their weekly cycle.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="over-item txt-left unique-style4">
                <i class="fa fa-lock over-i" aria-hidden="true"></i>
                <div class="break"></div>
                <h3>No Locked Staking</h3>
                <p>
                  Users don't have to lock up their tokens to claim their rewards,
                  just hold MKAT to claim BNB weekly from DApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
name: "Features"
}
</script>

<style scoped>

#overview {
  padding: 80px 0;
}

.over-pa {
  padding-top: 60px;
}

.over-item {
  background: #161616;
  -webkit-box-shadow: 0 31px 35px rgba(0, 0, 0, .1);
  box-shadow: 0 31px 35px rgba(0, 0, 0, .1);
  padding: 35px 31px;
  margin-top: 30px;
}

.unique-style,
.unique-style2 {
  position: relative;
}

.unique-style::after {
  position: absolute;
  content: '';
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
  content: '';
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
  content: '';
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
  content: '';
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
  content: '';
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
  content: '';
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
  content: '';
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
  content: '';
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
  content: '';
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
