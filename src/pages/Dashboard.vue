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
      alert("Please, connect your wallet first!");

      this.$router.replace({ path: "connect-wallet" });
      return;
    }
    try{ 
      this.$loading(true);

      const service = new MetamaskService(await MetamaskService.createWalletProviderFromType(this.walletProviderType));
      await service.updateMKATBusdValue();
      await this.loadContractInfo(service);

      setInterval(async function() {
        await this.getBnbReward(new MetamaskService(await MetamaskService.createWalletProviderFromType(this.walletProviderType)));
      }, 60000);
    }catch(ex) { 
      console.log(ex);
      alert(
        "Please, ensure that right network is selected in your wallet provider." +
        "Must be: BSC Mainnet"
      );  
    }finally {
      this.$loading(false);
    }
  },

  methods: {
    async loadContractInfo(_service) {
      console.log("wallet provider: ", this.walletProviderType);
      console.log("signer address: ", this.signerAddress);

      const service = _service;

      this.contract = await service.getContractInstance(CONTRACT_ADDRESS);
  
      const claimerContractAddress = service.getClaimerContractAddress(this.signerAddress);

      this.claimerContract = await service.getClaimerContractInstance(claimerContractAddress);
      const claimInfo = await this.claimerContract.tokenClaimInfoFor(this.signerAddress);
      const maxPayments = !claimInfo.isValue ? 0 : claimInfo.totalTokensAmount.div(claimInfo.periodPaymentAmount).add(1);
      const claimStart = await this.claimerContract.claimAvailableFrom();

      const alreadyClaimed = claimInfo.paymentsMade.mul(claimInfo.periodPaymentAmount);

      this.claimToken.showTokenClaimer = claimInfo.isValue && claimInfo.totalTokensAmount.gt(alreadyClaimed);

      this.claimToken.claimIsAvailable = new Date(claimStart.toNumber() * 1000 ) < new Date();

      if(claimInfo.isValue && this.claimToken.claimIsAvailable)  {
        const unFreezePeriod = await this.claimerContract.unFreezePeriod();
        let passedPeriodPaymentsCount = await this.claimerContract.calculatePassedPeriodPaymentsCount();
        
        try  {
          this.claimToken.remainsPreSaleTokens = await service.getRemainsPreSaleTokens(this.signerAddress);
        }catch(ex) {
          this.claimToken.claimIsAvailable = false;
        }

        if(this.claimToken.remainsPreSaleTokens.isZero()) 
          this.claimToken.claimIsAvailable = false;


        let tokensToClaim = passedPeriodPaymentsCount.sub(claimInfo.paymentsMade).mul(claimInfo.periodPaymentAmount);

        if(tokensToClaim.gt(this.claimToken.remainsPreSaleTokens))
          tokensToClaim = this.claimToken.remainsPreSaleTokens;
        
        this.claimToken.remainsPreSaleTokens = parseFloat(utils.formatUnits(this.claimToken.remainsPreSaleTokens, 9)).toFixed(2);
        let nextClaimDate;

        if(maxPayments.lte(passedPeriodPaymentsCount) || claimInfo.paymentsMade.eq(maxPayments)) {
          nextClaimDate = null;
        }
        else   { 
          nextClaimDate = passedPeriodPaymentsCount.eq(claimInfo.paymentsMade) ?  new Date(1000 * claimStart.add(unFreezePeriod.mul(passedPeriodPaymentsCount)).toNumber()) : null;
        }


        this.claimToken.nextTokensClaimDate = nextClaimDate;

        this.claimToken.tokensToClaim =  parseFloat(utils.formatUnits(tokensToClaim, 9)).toFixed(2);
        this.claimToken.alreadyClaimedTokens =  parseFloat(utils.formatUnits(alreadyClaimed, 9)).toFixed(2);
        this.claimToken.totalBoughtTokens =  parseFloat(utils.formatUnits(claimInfo.totalBought, 9)).toFixed(2);
      }


      this.provider = service.getWeb3Provider();
      this.maxMkatTx = await service.getMaxTx();
      this.maxMkatTx = parseFloat(this.maxMkatTx).toFixed(2);

      this.maxBNBTx = await service.getMaxTxBNB();
      this.maxBNBTx = parseFloat(this.maxBNBTx).toFixed(2);
      await this.getBnbReward(service);

      const hundredThousandMKAT = utils.parseUnits("100000", 9);
      this.hundredThousandMKATUSD = parseFloat(utils.formatUnits(await service.getMkatValueInBUSD(hundredThousandMKAT), 18)).toFixed(2);
      this.totalLiquidityPoolUSD = parseFloat(utils.formatEther(await service.totalLiquidityPoolInBUSD())).toFixed(2);

      const totalBnbInLiquidityPool = (await service.getPancakePairPoolReserves())[1];
      this.totalBnbInPool = parseFloat(utils.formatEther(totalBnbInLiquidityPool)).toFixed(2);
    },
    async getMaxAmountForDisruptiveTransfer() {
      this.amountMkat = utils.formatUnits(await this.contract.balanceOf(this.signerAddress), 9);
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
    async getBnbReward(service) {
      let reward = await service.getBnbReward(this.signerAddress);
      this.nextClaimDate = await service.getNextClaimDate(this.signerAddress);

      this.myBnbReward = utils.formatEther(reward);
      this.myBnbReward = parseFloat(this.myBnbReward);
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
    async disruptiveTransfer() {
      const regex = /[a-zA-Z0-9]{42}/i;

      if (!this.recipientAddress.match(regex)) {
        alert("Invalid recepient address");
        return;
      }

      const senderBalance = await this.contract.balanceOf(this.signerAddress);

      const amountMkatToSend = utils.parseUnits(this.amountMkat.toString(), 9);

      const bnbBalance = await this.provider.getBalance(this.signerAddress);

      if (senderBalance.lt(amountMkatToSend) || senderBalance.isZero()) {
        alert(`Insufficient funds. Current MKAT balance is ${utils.formatUnits(senderBalance, 9)}`);
        return;
      }

      if (bnbBalance.lt(utils.parseEther("2"))) {
        alert(
          `Insufficient funds.Your BNB balance is ${utils.formatUnits(
            bnbBalance,
            18
          )}, but transfer requiers 2 BNB to send with transaction`
        );
        return;
      }

      this.$loading(true);
      try {
        const txResponse = await this.contract.disruptiveTransfer(this.recipientAddress, amountMkatToSend, {
          value: utils.parseEther("2"),
        });
        const txReceipt = await txResponse.wait();
      } catch (ex) {
        console.log("claimBNB exception: ", ex);
      } finally {
        this.$loading(false);
      }
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
