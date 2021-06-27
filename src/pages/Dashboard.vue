<style> 
  .modal-content { 
    background-color: black;
    color: white !important;
    -webkit-box-shadow: 3px 3px 46px 31px rgba(9, 9, 9, 0.43);
-moz-box-shadow: 3px 3px 46px 31px rgba(9, 9, 9, 0.43);
box-shadow: 3px 3px 46px 31px rgba(9, 9, 9, 0.43);
  }
  .share-network-twitter { 
    color: white ;
  }
  .share-network-twitter:hover { 
    color: white ;
  }
</style>

<template>
  <section class="dashboard-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <Sidebar :contract="contract" />
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mt-3">
                    <div class="tab-card-header">
                      <ul id="myTab" class="nav nav-tabs card-header-tabs" role="tablist">
                        <li class="nav-item">
                          <a
                            id="one-tab"
                            class="nav-link"
                            :class="{ 'active show': isActive('one') }"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="One"
                            aria-selected="true"
                            @click.prevent="setActive('one')"
                            >Claim BNB</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            id="two-tab"
                            class="nav-link"
                            :class="{ 'active show': isActive('two') }"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="Two"
                            aria-selected="false"
                            @click.prevent="setActive('two')"
                            >Atomic Transfer</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            id="three-tab"
                            class="nav-link"
                            :class="{ 'active show': isActive('three') }"
                            data-toggle="tab"
                            href="#three"
                            role="tab"
                            aria-controls="Three"
                            aria-selected="false"
                            @click.prevent="setActive('three')"
                            >Statistic</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6"></div>
              </div>
              <div class="mt-3">
                <div id="myTabContent" class="tab-content">
                  <div id="one" class="tab-pane fade p-3 claim-reward" :class="{ 'active show': isActive('one') }">
                    <div class="claim-reward-content">
                      <div class="row">
                        <div class="col-sm-3 p-1">
                          <div class="title-1">Reward Pool</div>
                          <div class="image-content">
                            <img src="@/assets/images/Max_trans.png" class="image-reward-pool" />
                          </div>
                          <div class="title-2">BNB <span class="card-panel-num"> </span></div>
                        </div>
                        <div class="col-sm-9 p-2">
                          <div class="title-1">
                            My reward: <span class="bold">{{ myBnbReward }} BNB</span>
                          </div>
                          <div class="title-2">
                            Next claim date: <span class="bold">{{ nextClaimDate }} </span>
                          </div>
                          <div class="title-noted">
                            *pool is always changing based on buys, sells, and collects by others, learn more here
                            <span
                              ><a href="#" target="_blank"><i class="fa fa-question-circle"></i></a
                            ></span>
                          </div>
                          <div class="button-wrapper hide-on-mobile">
                            <div>
                              <button
                                id="claim-button"
                                type="button"
                                :disabled="myBnbReward === '0'"
                                class="el-button button-custom-new el-button--default el-button--medium is-disabled"
                                @click="claimMyReward()"
                              >
                                <span><i class="fa fa-gift"></i> Claim My Reward </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="statistic-wrapper">
                      <div class="item-statistic">
                        <div class="row">
                          <div class="col-sm-4 p-1"><img src="@/assets/images/Max_trans.png" class="img-icon" /></div>
                          <div class="col-sm-8 p-2">
                            <div class="text-1">Max Transaction Amount</div>
                            <div class="text-2">
                              <span id="max-mkat-tx">{{ maxMkatTx }}</span
                              ><span class="card-panel-num"> MKAT </span><a><i class="el-icon-document-copy"></i></a
                              ><span> | </span><span class="card-panel-num"> {{ maxBNBTx }} BNB </span
                              ><a><i class="el-icon-document-copy"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-statistic">
                        <div class="row">
                          <div class="col-sm-4 p-1">
                            <img src="@/assets/images/Total_liquidity_pool.png" class="img-icon" />
                          </div>
                          <div class="col-sm-8 p-2">
                            <div class="text-1">Total Liquidity Pool</div>
                            <div class="text-2">
                              <span>$</span><span class="card-panel-num"> {{ totalLiquidityPoolUSD }} </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-statistic">
                        <div class="row">
                          <div class="col-sm-4 p-1">
                            <img src="@/assets/images/Total_liquidity_pool.png" class="img-icon" />
                          </div>
                          <div class="col-sm-8 p-2">
                            <div class="text-1">Total BNB in liquidity pool</div>
                            <div class="text-2">
                              <span> {{ totalBnbInPool }} </span><span class="card-panel-num"> BNB </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-statistic">
                        <div class="row">
                          <div class="col-sm-4 p-1"><img src="@/assets/images/moonKat.jpg" class="img-icon" /></div>
                          <div class="col-sm-8 p-2">
                            <div class="text-1">Current 100,000 MKAT price</div>
                            <div class="text-2">
                              <span></span><span class="card-panel-num">$ {{ hundredThousandMKATUSD }} </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="hidden-input el-input el-input--medium">
                      <input id="copy-value" type="text" autocomplete="off" class="el-input__inner" />
                    </div>
                    <div class="hidden-input el-input el-input--medium">
                      <input id="copy-value-bnb" type="text" autocomplete="off" class="el-input__inner" />
                    </div>
                    <div
                      class="sweet-modal-content sweet-modal-overlay theme-light sweet-modal-clickable"
                      style="display: none"
                    >
                      <div class="sweet-modal theme-light has-content is-alert">
                        <div class="sweet-box-actions">
                          <div class="sweet-action-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                fill="#292c34"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div class="sweet-content">
                          <div class="sweet-content-content">
                            <div class="content-dialog-claim-success">
                              <div class="main-title">CLAIM REWARD SUCCESSFULLY!</div>
                              <!--                                  <img src="@/assets/images/rat_hold_bnb.1d72ec18.png" class="image-logo-token" />-->
                              <div class="reward-content">
                                <div class="text-1">Your reward: 0.0000 BNB</div>
                                <div class="text-2">
                                  Next collectable date: Mon, May 31, 2021 2:04 PM (at your time zone)
                                </div>
                              </div>
                              <div class="button-share-wrapper">
                                <div>Share now</div>
                                <div class="p-1">
                                  <a
                                    page-title="I just collected 0.0000 BNB at MoonRat.Finance! You should give it a try!
                                                         #MoonRat #EarnBNB #BinanceSmartChain #BSC #MKAT"
                                    button-design="flat"
                                    has-icon="true"
                                    class="button-social twitter__design__flat"
                                    ><i class="icon-twitter"></i></a
                                  ><a button-design="flat" has-icon="true" class="button-social facebook__design__flat"
                                    ><i class="icon-facebook"></i
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-content">
                  <div
                    id="two"
                    class="tab-pane fade p-3"
                    role="tabpanel"
                    aria-labelledby="two-tab"
                    :class="{ 'active show': isActive('two') }"
                  >
                    <div class="disruptive-transfer-wrapper">
                      <div class="form-wrapper">
                        <div class="text-main">
                          Disruptive Transfer between 2 wallets
                          <span style="margin-left: 10px"
                            ><a href="#" target="_blank"><i class="el-icon-question"></i></a
                          ></span>
                        </div>
                        <form class="el-form">
                          <div class="el-form-item el-form-item--medium">
                            <div class="el-form-item__content">
                              <div class="el-input el-input--medium">
                                <input
                                  id="addressEnter"
                                  v-model.trim="recipientAddress"
                                  autocomplete="off"
                                  placeholder="Recipient (address)"
                                  class="el-input__inner"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="el-form-item el-form-item--medium">
                            <div class="el-form-item__content">
                              <div class="el-input el-input--medium">
                                <input
                                  id="amount"
                                  v-model.number="amountMkat"
                                  type="number"
                                  autocomplete="off"
                                  placeholder="Amount (MKAT)"
                                  class="el-input__inner"
                                />
                              </div>
                              <div class="button-max">
                                <button
                                  type="button"
                                  class="el-button el-button--text el-button--medium"
                                  @click="getMaxAmountForDisruptiveTransfer()"
                                >
                                  <span>Max</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            class="el-button button-send-disruptive el-button--primary el-button--medium"
                            @click="disruptiveTransfer()"
                          >
                            <i class="el-icon-position"></i><span>Send </span>
                          </button>
                        </form>
                      </div>
                      <div
                        class="sweet-modal-content sweet-modal-overlay theme-light sweet-modal-clickable"
                        style="display: none"
                      >
                        <div class="sweet-modal theme-light has-content is-alert">
                          <div class="sweet-box-actions">
                            <div class="sweet-action-close">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                  fill="#292c34"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div class="sweet-content">
                            <div class="sweet-content-content">
                              <div class="content-dialog-claim-success">
                                <!--                                  <img src="@/assets/images/anti_whales.25f69da2.png" style="width: 200px;" />-->
                                <div class="text-1">Congratulations!</div>
                                <div class="text-2">You transferred <span class="bnb">0.00 MKAT</span></div>
                                <div class="text-4">to</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-content">
                  <div
                    id="three"
                    class="tab-pane fade p-3"
                    role="tabpanel"
                    aria-labelledby="three-tab"
                    :class="{ 'active show': isActive('three') }"
                  >
                    <div class="statistic-all">
                      <div class="statistic-p1">
                        <div class="row">
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Symbol</div>
                            <div class="text-2">MKAT</div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Total Supply</div>
                            <div class="text-2">1,000,000,000 MKAT</div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Holders</div>
                            <div class="text-2">Updating...</div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Token Address</div>
                            <div class="text-2">
                              <a
                                :href="`https://bscscan.com/address/${mkatAddress}`"
                                target="_blank"
                                style="color: rgb(4, 171, 234); font-size: 12px; word-break: break-all"
                              >
                                view on bscscan.com...
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="row-2 hide-on-mobile"></div>
                        <div class="row">
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Volume (24h)</div>
                            <div class="text-2">Updating...</div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Market Cap</div>
                            <div class="text-2">
                              $
                              <span class="card-panel-num"> {{ marketCap }} </span>
                            </div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Current Circulating Supply</div>
                            <div class="text-2">{{ currentCircularingBalance }} MKAT</div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div  class="text-1"> Contract BNB reward pool </div>
                              <div  class="text-2"> {{ contractBNBRewardPool}} BNB</div>
                          </div>
                        </div>
                      </div>
                      <div class="statistic-p1 mt-25">
                        <div class="row">
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Current 100,000 MKAT</div>
                            <div class="text-2">
                              <span class="card-panel-num">$ {{ hundredThousandMKATUSD }} </span>
                            </div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Total Liquidity Pool</div>
                            <div class="text-2">
                              <span class="card-panel-num"> $ {{ totalLiquidityPoolUSD }} </span>
                            </div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Total BNB in liquidity pool</div>
                            <div class="text-2">
                              {{ totalBnbInPool }} BNB
                            </div>
                          </div>
                          <div class="item-statistic col-sm-3">
                            <div class="text-1">Max Transaction Amount</div>
                            <div class="text-2">
                              1,000,000
                              <span class="card-panel-num"> MKAT </span><a><i class="el-icon-document-copy"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="hidden-input el-input el-input--medium">
                        <input id="copy-value-max" type="text" autocomplete="off" class="el-input__inner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>

    <b-modal id="bv-share-modal" hide-footer>
      <template #modal-title>
        Congratulations!
      </template>
      <div class="d-block text-center">
         You just withdrawed {{ myBnbReward }}. Wanna share it on twitter?
      </div>
      <b-button class="mt-3" block>  
        <ShareNetwork
          @open="open"
          network="twitter"
          url="https://moonkat.net/"
          :title="`I just claimed ${myBnbReward} BNB only by holding MKAT token. You can try it too!`"
        > 
          Of course!
        </ShareNetwork></b-button>
    </b-modal>
</div>
   

  </section>
</template>

<script>
import { mapGetters } from "vuex";

var ethers = require("ethers");
var utils =ethers.utils;

import { CONTRACT_ADDRESS, BURN_ADDRESS } from "@/constants";
import MetamaskService from "@/MetamaskService";
import Sidebar from "@/components/Dashboard/Sidebar";
import axios from "axios";
import { BigNumber } from "@ethersproject/bignumber";

export default {
  name: "Dashboard",
  components: { Sidebar },
  data() {
    return {
      contract: null,
      activeItem: "one",
      maxMkatTx: null,
      hundredThousandMKATUSD: "...",
      myBnbReward: "...",
      nextClaimDate: "...",
      myBnbRewardAfterTax: 0,
      totalBnbInPool: "...",
      estimatedGas: {},
      myMkatBalance: "...",
      totalLiquidityPoolUSD: "...",
      recipientAddress: "",
      amountMkat: 0,
      currentCircularingBalance: "...",
      maxBNBTx: "...",
      marketCap: "...",
      mkatAddress: CONTRACT_ADDRESS,
      contractBNBRewardPool: "...", 
      provider: null,
    };
  },
  computed: {
    ...mapGetters(["signerAddress"]),
  },
  watch: {
    myBnbReward() {},
  },
  mounted() {
    this.loadContractInfo();
    setTimeout(async function() {
      await this.getBnbReward(new MetamaskService());
    }, 600000);
  },
  
  methods: {
    async loadContractInfo() {
      const service = new MetamaskService();
      this.contract = await service.getContractInstance(CONTRACT_ADDRESS);
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      this.maxMkatTx = await service.getMaxTx();
      this.maxBNBTx = await service.getMaxTxBNB();
      await this.getBnbReward(service);
      // this.myBnbRewardAfterTax = this.myBnbReward;

      const hundredThousandMKAT = 100000 * 10 ** 9;
      this.hundredThousandMKATUSD = await service.getMkatValueInBUSD(hundredThousandMKAT);
      this.totalLiquidityPoolUSD = await service.totalLiquidityPoolInBUSD();
      console.log("hundredThousandMKATUSD", this.hundredThousandMKATUSD);
      console.log("totalLiquidityPoolUSD", this.totalLiquidityPoolUSD);

      const totalBnbInLiquidityPool = (await service.getPancakePairPoolReserves())[1];
      this.totalBnbInPool = utils.formatEther(totalBnbInLiquidityPool);
      this.currentCircularingBalance =  utils.formatUnits(await this.getCurrentCircularingBalance(), 9);

      let marketCap =  utils.formatUnits(await this.calculateMarketCap(service, hundredThousandMKAT, this.hundredThousandMKATUSD),18);
      
      const dotIndex= marketCap.indexOf('.');

      marketCap = dotIndex + 2 > marketCap.length - 1 || dotIndex == -1 ? marketCap:  marketCap.substring(0, dotIndex + 2 ); // leave only one digit after .

      this.marketCap = marketCap;

      this.contractBNBRewardPool = utils.formatEther(await this.provider.getBalance(CONTRACT_ADDRESS));
      
      console.log("total bnb in pool: " + this.totalBnbInPool);
    },
    async getMaxAmountForDisruptiveTransfer() {
      this.amountMkat = utils.formatUnits(await this.contract.balanceOf(this.signerAddress), 9);
      console.log(this.amountMkat);
    },

    async getBnbReward(service) {
      console.log("getBnbReward");
      let reward = await service.getBnbReward(this.signerAddress);
      this.nextClaimDate = await service.getNextClaimDate(this.signerAddress);
      this.myBnbReward = utils.formatEther(reward);
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    async calculateMarketCap(service,hundredThousandMKAT,hundredThousandMKATPrice ) { 
      var circularingBalance =  await this.getCurrentCircularingBalance();

      var oneTokenPrice = Math.floor(hundredThousandMKAT / hundredThousandMKATPrice);

      console.log("ONE TOKEN PRICE: ", oneTokenPrice);

      return  circularingBalance.mul(oneTokenPrice);
    },
    open() { 
      this.$bvModal.hide('bv-share-modal')
    },
    openShareOnTwitterModal() { 
      this.$bvModal.show('bv-share-modal');
    },
    async disruptiveTransfer() {
      console.log("DisTransfer: ", this.recipientAddress, " ", this.amountMkat);

      const regex = /[a-zA-Z0-9]{42}/i;

      if (!this.recipientAddress.match(regex)) {
        alert("Invalid recepient address");
        return;
      }

      const senderBalance = await this.contract.balanceOf(this.signerAddress);

      const amountMkatToSend = utils.parseUnits(this.amountMkat.toString(), 9);

      if (senderBalance < amountMkatToSend || senderBalance === 0) {
        alert(`Insufficient funds. Current MKAT balance is ${senderBalance}`);
        return;
      }

      this.$loading(true);
      try { 
        const txResponse = await this.contract.disruptiveTransfer(this.recipientAddress, amountMkatToSend, {
          value: utils.parseEther("2"),
        });
        const txReceipt = await txResponse.wait();

        console.log({ txResponse });
        console.log({ txReceipt });
      }catch(ex) { 
        console.log("claimBNB exception: ", ex);
      }finally{ 
        this.$loading(false);
      }
    },
    async getCurrentCircularingBalance() {
      let total = await this.contract.totalSupply();
      let zero = await this.contract.balanceOf("0x0000000000000000000000000000000000000000");
      let burn = await this.contract.balanceOf(BURN_ADDRESS);

      return total.sub(burn).sub(zero);
    },

    async claimMyReward() {
      if ((await this.contract.balanceOf(this.signerAddress)) == 0) {
        alert(`You need to own MKAT first!`);
        return;
      }
      this.$loading(true);

      try { 
        const txResponse = await this.contract.claimBNBReward();
        const txReceipt = await txResponse.wait();

        this.openShareOnTwitterModal();

        console.log({ txResponse });
        console.log({ txReceipt });
      }catch(ex) { 
        console.log("claimBNB exception: ", ex);
      }
      finally { 
        this.$loading(false);
      }
    },
  },
};
</script>

<style scoped></style>
