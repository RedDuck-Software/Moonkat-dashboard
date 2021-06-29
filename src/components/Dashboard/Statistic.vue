<template>
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
          <div class="text-1">Total Burned</div>
          <div class="text-2">{{ totalBurn }} %</div>
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
          <div class="text-1">Contract BNB reward pool</div>
          <div class="text-2">{{ contractBNBRewardPool }} BNB</div>
        </div>
      </div>
    </div>
    <div class="statistic-p1 mt-25">
      <div class="row">
        <div class="item-statistic col-sm-3">
          <div class="text-1">Current 100,000 MKAT</div>
          <div class="text-2">
            <span class="card-panel-num">$ {{ hundredthousandmkatusd }} </span>
          </div>
        </div>
        <div class="item-statistic col-sm-3">
          <div class="text-1">Total Liquidity Pool</div>
          <div class="text-2">
            <span class="card-panel-num"> $ {{ totalliquiditypoolusd }} </span>
          </div>
        </div>
        <div class="item-statistic col-sm-3">
          <div class="text-1">Total BNB in liquidity pool</div>
          <div class="text-2">{{ totalbnbinpool }} BNB</div>
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
    </div></div
></template>

<script>
import { CONTRACT_ADDRESS, BURN_ADDRESS } from "@/constants";
import MetamaskService from "@/MetamaskService";
import { ethers, utils } from "ethers";
import { mapGetters } from "vuex";

export default {
  name: "Statistic",
  props: {
    contract: {
      default: null,
    },
    hundredthousandmkatusd: {
      default: "...",
    },
    totalliquiditypoolusd: {
      default: "...",
    },
    totalbnbinpool: {
      default: "...",
    },
  },
  data() {
    return {
      mkatAddress: CONTRACT_ADDRESS,
      marketCap: "...",
      currentCircularingBalance: "...",
      contractBNBRewardPool: "...",
      provider: null,
      totalBurn: "...",
    };
  },
  computed: {
    ...mapGetters(["signerAddress"]),
    ...mapGetters(["walletProviderType"]),
  },
  mounted() {
    this.loadContractInfo();
  },
  methods: {
    async loadContractInfo() {
      const service = new MetamaskService(await MetamaskService.createWalletProviderFromType(this.walletProviderType));

      this.provider = service.getWeb3Provider();

      this.marketCap = await this.calculateMarketCap(service);
      this.marketCap = this.marketCap.toFixed(2);

      this.totalBurn = await this.calculateTotalBurnPercent(service);

      this.currentCircularingBalance = await utils.formatUnits(await this.getCurrentCircularingBalance(), 9);
      this.currentCircularingBalance = parseFloat(this.currentCircularingBalance).toFixed(2);

      this.contractBNBRewardPool = await utils.formatEther(await this.provider.getBalance(CONTRACT_ADDRESS));
      this.contractBNBRewardPool = parseFloat(this.contractBNBRewardPool).toFixed(2);
    },
    async calculateMarketCap(service) {
      const circularingBalance = await this.getCurrentCircularingBalance();

      return await service.getMkatValueInBUSD(circularingBalance);
    },
    async calculateTotalBurnPercent() {
      const { total, zero, burn } = await this.getCircularingBalances();
      return (((zero + burn) * 100) / total).toFixed(2);
    },
    async getCurrentCircularingBalance() {
      const { total, zero, burn } = await this.getCircularingBalances();
      return total.sub(burn).sub(zero);
    },
    async getCircularingBalances() {
      let total = await this.contract.totalSupply();
      let zero = await this.contract.balanceOf("0x0000000000000000000000000000000000000000");
      let burn = await this.contract.balanceOf(BURN_ADDRESS);

      return { total, zero, burn };
    },
  },
};
</script>

<style scoped></style>
