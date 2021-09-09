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
                      <div class="item-statistic w-100">
                        <div class="row">
                          <div class="col-sm-4 p-1"><img src="@/assets/images/Moonkat.png" class="img-icon" /></div>
                          <div class="col-sm-8 p-2">
                            <div class="text-1">Current 100,000 MKAT price</div>
                            <div class="text-2">
                              <span></span><span class="card-panel-num">$ {{ hundredThousandMKATUSD }} </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div 
                    v-if="claimToken.showTokenClaimer"
                    class="bought-tokens-claimer col" >

                    <div v-if="claimToken.claimIsAvailable">

                    <div class="claim-head row">
                      <span>Already claimed: <span class="val">{{ claimToken.alreadyClaimedTokens  }}</span>  MKAT</span> 
                      <div class="pl-3"></div>
                      <span>Total bought: <span class="val">{{ claimToken.totalBoughtTokens  }} </span> MKAT</span> 
                    </div>
                      <div class="mt-2"></div>
                    <div class="claim-body row">
                      <div >
                        <div>Tokens to claim remains:  <span class="val">{{ claimToken.remainsPreSaleTokens }} </span> MKAT </div>
                        <div v-if="claimToken.tokensToClaim > 0">Available to claim:<span class="val"> {{ claimToken.tokensToClaim }} </span> MKAT</div>
                      </div>
                          <div>
                        <button
                              v-if="claimToken.nextClaimDate == null"
                              type="button"
                              class="el-button button-custom-new el-button--default el-button--medium is-disabled"
                              @click="claimTokens()"
                        >
                          <span><i class="fa fa-gift"></i> Claim My tokens </span>
                        </button>
                      </div>
                        <div v-if="claimToken.nextClaimDate != null">Next available claim: {{ claimToken.nextTokensClaimDate.toGMTString() }} </div>
                      </div>
                    </div>

                      <div v-if="!claimToken.claimIsAvailable">Pre-bought tokens claim is not available yet </div>
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
                    aria-labelledby="three-tab"
                    :class="{ 'active show': isActive('two') }"
                  >
                    <Statistic
                      v-if="contract"
                      :hundredthousandmkatusd="hundredThousandMKATUSD"
                      :totalliquiditypoolusd="totalLiquidityPoolUSD"
                      :totalbnbinpool="totalBnbInPool"
                      :contract="contract"
                    />
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
        <div class="d-block text-center">You just withdrawed {{ myBnbReward }}. Wanna share it on twitter?</div>
        <b-button class="mt-3" block>
          <ShareNetwork
            network="twitter"
            url="https://moonkat.net/"
            :title="`I just claimed ${myBnbReward} BNB only by holding MKAT token. You can try it too!`"
            @open="open"
          >
            Of course!
          </ShareNetwork></b-button
        >
      </b-modal>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { BigNumber, ethers, utils } from "ethers";

import { CONTRACT_ADDRESS } from "@/constants";
import MetamaskService from "@/MetamaskService";
import Sidebar from "@/components/Dashboard/Sidebar";
import Statistic from "@/components/Dashboard/Statistic";

export default {
  name: "Dashboard",
  components: { Statistic, Sidebar },
  data() {
    return {
      service : null, 
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
      maxBNBTx: "...",
      provider: null,
      claimerContract: null,
      claimToken : {
        claimIsAvailable : false,
        claimAvailableFrom: null, 
        showTokenClaimer: false,
        nextTokensClaimDate: null,
        remainsPreSaleTokens: 0,
        tokensToClaim: 0,
        alreadyClaimedTokens: 0, 
        totalBoughtTokens : 0, 
      },
    };
  },
  computed: {
    ...mapGetters(["signerAddress"]),
    ...mapGetters(["walletProviderType"]),
  },
  watch: {
    myBnbReward() {},
  },
  async mounted() {
    if(!this.signerAddress) { 
      console.error("user`s wallet is not connected");
      this.$router.replace({ path: "connect-wallet" });
      return;
    }
    try{ 
      this.$loading(true);

      this.service = new MetamaskService(await MetamaskService.createWalletProviderFromType(this.walletProviderType));
      await this.service.initialize();

      await this.loadContractInfo();

      setInterval(async function() {
        await this.getBnbReward(new MetamaskService(await MetamaskService.createWalletProviderFromType(this.walletProviderType)));
      }, 60000);
    }catch(ex) { 
      console.error(ex);
      alert(
        "An error occured. Error msg: " + ex +
        "Must be: BSC Mainnet"
      );  
    }finally {
      this.$loading(false);
    }
  },

  methods: {
    async loadContractInfo() {
      console.log("wallet provider: ", this.walletProviderType);
      console.log("signer address: ", this.signerAddress);

      this.contract = this.service.getTokenContractInstance();
      console.log("contract:  ", this.contract);
  
      this.provider = this.service.getWeb3Provider();

      const staticRewardsInfo =  await this.contract.getAccountDividendsInfo(this.signerAddress);

      console.log(staticRewardsInfo);

      const hundredThousandMKAT = utils.parseUnits("100000", 18);
      const usdPrice = await this.service.getMkatValueInBUSD(hundredThousandMKAT);

      this.hundredThousandMKATUSD = parseFloat(utils.formatUnits(usdPrice, 18)).toFixed(2);
      this.totalLiquidityPoolUSD = parseFloat(utils.formatEther(await this.service.totalLiquidityPoolInBUSD())).toFixed(2);

      const totalBnbInLiquidityPool = (await this.service.getPancakePairPoolReserves())[1];
      this.totalBnbInPool = parseFloat(utils.formatEther(totalBnbInLiquidityPool)).toFixed(2);
    },
    async claimTokens() { 
      this.$loading(true);

      try { 
        const txResponse = await this.claimerContract.claimTokens();
        await txResponse.wait();

        location.reload();
      }catch(ex) { 
        console.log(ex);
        alert(`Error occured on token claiming. Message: ${ex.data.message}`)
      }finally {
        this.$loading(false);
      }
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },

    open() {
      this.$bvModal.hide("bv-share-modal");
    },
    openShareOnTwitterModal() {
      this.$bvModal.show("bv-share-modal");
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
      } catch (ex) {
        console.log("claimBNB exception: ", ex);
      } finally {
        this.$loading(false);
      }
    },
  },
};
</script>

<style>
.modal-content {
  background-color: black;
  color: white !important;
  -webkit-box-shadow: 3px 3px 46px 31px rgba(9, 9, 9, 0.43);
  -moz-box-shadow: 3px 3px 46px 31px rgba(9, 9, 9, 0.43);
  box-shadow: 3px 3px 46px 31px rgba(9, 9, 9, 0.43);
}
.share-network-twitter {
  color: white;
}
.share-network-twitter:hover {
  color: white;
}


</style>
