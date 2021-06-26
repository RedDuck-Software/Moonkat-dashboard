<template>
  <div class="moonkat-sidebar">
    <div class="logo-and-buy">
      <div class="text-center"><img src="@/assets/images/moonKat.jpg" class="logo" /></div>
      <div class="mrat-text hide-on-mobile">moonkat</div>
      <div class="mrat-desc">Earn BNB by Holding MKAT</div>
      <div class="button-buy-mrat hide-on-mobile">
        <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x38bd8cd90374dbc903aed9d2ee28f5ab856342ce" target="_blank" class="button-custom-new button-sidebar"
          ><i class="fa fa-shopping-cart"></i> BUY $MKAT
        </a>
      </div>
    </div>
    <div class="address-info">
      <div class="text-1 hide-on-mobile">Address information</div>
      <div class="text-2 hide-on-mobile">Your address</div>
      <div id="myAddress" class="text-3 hide-on-mobile">
        <div class="d-flex">
          <span id="my-address" ref="myAddr" class="truncate">{{ signerAddress }}</span>
          <input id="testing-code" type="hidden" :value="signerAddress" />
        </div>
      </div>
      <div class="text-4 hide-on-mobile">
        <span id="copy-address" @click="copyAddress()">
          <span style="margin-right: 3px"> <i class="fa fa-clone"></i></span> Copy address
        </span>
        <a id="bscscan" :href="`https://bscscan.com/address/${signerAddress}`" target="_blank" style="margin-left: 10px"
          ><span style="margin-right: 3px"><i class="fa fa-clone"></i></span> View on BscScan Explorer
        </a>
      </div>
      <div class="text-2">Your MKAT balance:</div>
      <div class="text-3">
        MKAT
        <span> {{ myMkatBalance }} </span><br />
        (
        <span>
          {{ myMkatBalanceInBUSD }}
        </span>
        $)
      </div>
    </div>
    <div class="button-logout-wrapper hide-on-mobile" style="cursor: pointer" @click="logout()">
      <a target="_blank" class="button-custom-new button-sidebar"><i class="fa fa-sign-out"></i> LOGOUT </a>
    </div>
  </div>
</template>

<script>
import { ContractFactory, FixedNumber } from "ethers";
import { mapGetters } from "vuex";
import BigNumber from "bignumber.js";
import { formatNumberWithSpace } from "@/utils/utils";
import MetamaskService from "@/MetamaskService";
import { ethers } from "ethers";

const service = new MetamaskService();

export default {
  name: "Sidebar",
  props: {
    contract: {
      type: ContractFactory,
      required: true,
    },
  },
  data() {
    return {
      canCopy: false,
      myMkatBalance: "0.00",
      myMkatBalanceInBUSD: "0.00",
    };
  },
  computed: {
    ...mapGetters(["signerAddress"]),
  },
  watch: {
    contract() {
      this.loadContractInfo();
    },
  },
  mounted() {
    this.canCopy = !!navigator.clipboard;
    this.loadContractInfo();

    setTimeout(async function() {
      await this.loadContractInfo();
    }, 600000);
  },
  methods: {
    async loadContractInfo() {
      const service = new MetamaskService();
      this.myMkatBalance = await service.getBalance(this.signerAddress);
      this.myMkatBalanceInBUSD = await service.getMkatValueInBUSD(this.myMkatBalance);
    },
    async copyAddress() {
      const address = this.$refs.myAddr;
      await navigator.clipboard.writeText(address.innerHTML);
      alert("Copied!");
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/connect-wallet");

      alert("You logged out!");
    },
  },
};
</script>

<style scoped></style>
