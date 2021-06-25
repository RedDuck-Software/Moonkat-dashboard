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
                            class="nav-link active show"
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
                            My reward: <span class="bold">{{ myBnbReward.div(10 ** 19).toString() }} BNB</span>
                          </div>
                          <div class="title-noted">
                            *pool is always changing based on buys, sells, and collects by others, learn more here
                            <span
                              ><a href="#" target="_blank"><i class="fa fa-question-circle"></i></a
                            ></span>
                          </div>
                          <div class="title-2">You will be received {{ myBnbRewardAfterTax.toString() }} BNB (after tax)</div>
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
                              ><span> | </span><span>2.6</span><span class="card-panel-num"> BNB </span
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
                            <div class="text-2"><span>$</span><span class="card-panel-num"> 3,044,668.38 </span></div>
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
                            <div class="text-2"><span> {{ totalBnbInPool }} </span><span class="card-panel-num"> BNB </span></div>
                          </div>
                        </div>
                      </div>
                      <div class="item-statistic">
                        <div class="row">
                          <div class="col-sm-4 p-1"><img src="@/assets/images/moonKat.jpg" class="img-icon" /></div>
                          <div class="col-sm-8 p-2">
                            <div class="text-1">Current 100,000 MKAT price</div>
                            <div class="text-2"><span></span><span class="card-panel-num"> 0.26 BNB </span></div>
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
                                type="text"
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
                                type="text"
                                autocomplete="off"
                                placeholder="Amount (MKAT)"
                                class="el-input__inner"
                              />
                            </div>
                            <div class="button-max">
                              <button type="button" class="el-button el-button--text el-button--medium">
                                <span>Max</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="el-button button-send-disruptive el-button--primary el-button--medium"
                          @click="send()"
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
                              href="#"
                              target="_blank"
                              style="color: rgb(4, 171, 234); font-size: 12px; word-break: break-all"
                            >
                              ...
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
                            <span class="card-panel-num"> 63,500 </span>
                          </div>
                        </div>
                        <div class="item-statistic col-sm-3">
                          <div class="text-1">Current Circulating Supply</div>
                          <div class="text-2">Updating...</div>
                        </div>
                        <div class="item-statistic col-sm-3">
                          <!-- <div  class="text-1"> Burned </div>
                            <div  class="text-2"> 8.56% </div> -->
                        </div>
                      </div>
                    </div>
                    <div class="statistic-p1 mt-25">
                      <div class="row">
                        <div class="item-statistic col-sm-3">
                          <div class="text-1">Current 100,000 MKAT</div>
                          <div class="text-2">
                            <span class="card-panel-num"> 0.26 BNB </span>
                          </div>
                        </div>
                        <div class="item-statistic col-sm-3">
                          <div class="text-1">Total Liquidity Pool</div>
                          <div class="text-2">
                            <span class="card-panel-num"> -------- </span>
                          </div>
                        </div>
                        <div class="item-statistic col-sm-3">
                          <div class="text-1">Total BNB in liquidity pool</div>
                          <div class="text-2">
                            <!-- BNB -->--------
                            <!-- <span  class="card-panel-num">
                                                4,559.36
                                                </span> | BUSD <span  class="card-panel-num">
                                                1,498,706.96
                                                </span> -->
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
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { CONTRACT_ADDRESS } from "@/constants";
import MetamaskService from "@/MetamaskService";
import Sidebar from "@/components/Dashboard/Sidebar";
import axios from "axios";

export default {
  name: "Dashboard",
  components: { Sidebar },
  data() {
    return {
      contract: null,
      activeItem: "one",
      maxMkatTx: null,
      myBnbReward: "0",
      estimatedGas: {},
      myMkatBalance: null,
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
    setTimeout(async function () {
      await this.getBnbReward(new MetamaskService());
    }, 600000);
  },
  methods: {
    async loadContractInfo() {
      const service = new MetamaskService();
      this.contract = await service.getContractInstance(CONTRACT_ADDRESS);
      this.maxMkatTx = await service.getMaxTx();
      this.myBnbReward = await service.getBnbReward(this.signerAddress);
      this.myBnbRewardAfterTax = this.myBnbReward - (await this.contract.estimate.claimBNBReward());
      this.totalBnbInPool = '0';
      this.myMkatBalance = await service.getBalance(this.signerAddress);
      this.myMkatBalanceInBUSD = await service.getMkatValueInBUSD(myMkatBalance);
      await this.getBnbReward(service);
/*  */
      // console.log(gasLimitBN);
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    async claimMyReward() {
      const txResponse = await this.contract.claimBNBReward();
      const txReceipt = await txResponse.wait();

      console.log({ txResponse });
      console.log({ txReceipt });

      return txReceipt;

      // const txReceipt = await txResponse.wait()
      // return {transaction: txReceipt.transactionHash}
    },
    // async getGas() {
    //   let gasLimit = 21000;
    //   // random address just to estimate gas
    //   const receiver = "0xF231C3443c2725E534c828B1e42e71c16875d0f3"; // TBD - replace with our address - estimate how crucial it is
    //
    //   const gasLimitBN = this.myBnbReward
    //     ? await this.contract.estimateGas.transfer(receiver, this.myBnbReward, {
    //         from: this.signerAddress,
    //       })
    //     : "0.00";
    //
    //   gasLimit = gasLimitBN.toNumber();
    //
    //   //   if (coin.value.toLowerCase() !== "eth") {
    //   //     const amountToSend = this.amountToSend;
    //   //     const contractInstance = await this.getContractInstance(coin.contractAddress);
    //   //     const calculatedTransferValue = calculateTransferValue(contractInstance, amountToSend);
    //   //
    //   //     // random address just to estimate gas
    //   //     const receiver = "0xF231C3443c2725E534c828B1e42e71c16875d0f3"; // TBD - replace with our address - estimate how crucial it is
    //   //     const sender = await provider.getSigner().getAddress();
    //   //
    //   //     // using the promise
    //   //     const gasLimitBN = await contractInstance.estimateGas.transfer(receiver, calculatedTransferValue, {
    //   //       from: sender,
    //   //     });
    //   //     gasLimit = gasLimitBN.toNumber();
    //   //
    //   //     // console.log('fetched gas limit to be', gasLimit)
    //   //   }
    //
    //   const gasPriceResponse = await axios.get(
    //     "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=M18A5B2C77P86CC29B34NT15H7SDWU51Y2"
    //   );
    //
    //   console.log(gasPriceResponse);
    //   //
    //   // const med = gasPriceResponse.data.result.ProposeGasPrice * 1_000_000_000;
    //   //
    //   // const gasInfo = {
    //   //   gasLimit: gasLimit,
    //   //   mediumGasPrice: med,
    //   // };
    //   //
    //   // this.estimatedGas = gasInfo;
    // },
  },
};
</script>

<style scoped></style>
