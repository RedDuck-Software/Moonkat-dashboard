<template>
  <section class="connect-wallet">
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="section-2">
            <div class="connect-to-wallet">
              <img src="@/assets/images/moonKat.jpg" class="logo-section" />
              <div class="text-show-1">Welcome to MoonKat Dapp</div>
              <div class="content-main">
                <div class="text-1">You are not connected to MoonKat Dapp yet</div>
                <div class="line-2">
                  To use the Dapp, make sure: <br /><span
                    >You are using the <span class="text-color">Binance Smart Chain</span> network</span
                  ><br /><span>and you need to connect wallet to use</span><br />
                  <div style="margin-top: 10px;">
                    <span> We suggest to use: </span><br />
                    <a href="https://docs.binance.org/smart-chain/wallet/metamask.html" target="_blank"> Metamask</a
                    ><br />
                  </div>
                </div>
              </div>
              <div class="button-wrapper">
                <button
                  id="connectBtn"
                  type="button"
                  class="el-button button-custom-new el-button--primary el-button--medium"
                  @click="connectMetamask()"
                >
                  <i class="el-icon-connection"></i>
                  <span v-show="!signerAddress">Connect to a wallet </span>
                  <span v-show="signerAddress">{{ signerAddress }}</span>
                </button>

                <!---->
              </div>
              <!--              <div class="how-to-connect">-->
              <!-- <a  href="https://guide.MoonKat.finance/how-to-connect-MoonKats-dapp-to-wallet" target="_blank"> How to connect MoonKat's Dapp to wallet </a> -->
              <!--              </div>-->
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { ethers } from "ethers";
import { mapGetters } from "vuex";

export default {
  name: "WalletConnect",
  computed: {
    ...mapGetters(["signerAddress"]),
  },
  mounted() {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    if (this.signerAddress) {
      this.$router.push({ path: "dashboard" });
    }

    window.ethereum
      .request({ method: "eth_accounts" })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(e => alert(e));

    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "updateSignerAddress") {
        if (state.signerAddress) {
          this.$router.push({ path: "dashboard" });
        }
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },

  methods: {
    async connectMetamask() {
      if (typeof window.ethereum !== undefined) {
        await window.ethereum.enable(); // deprecated - need to use eth_requestAccounts
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log("signer:", signer);
        const address = await signer.getAddress();
        this.$store.commit("updateSignerAddress", address);
        provider.on("network", (newNetwork, oldNetwork) => {
          // When a Provider makes its initial connection, it emits a "network"
          // event with a null oldNetwork along with the newNetwork. So, if the
          // oldNetwork exists, it represents a changing network
          if (oldNetwork) {
            window.location.reload();
          }
        });
      } else {
        alert("Please install MetaMask!");
      }
    },
  },
};
</script>

<style scoped>
.section-2 .button-wrapper {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.button-custom-new {
  border-radius: 10px !important;
  font-size: 15px !important;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  flex: 1 0 100%;
  height: 44px;
}

.el-button {
  font-family: Poppins, sans-serif;
  background-image: -webkit-gradient(linear, left top, right top, from(#ff7657), to(#ff7657));
  background-image: linear-gradient(90deg, #ff7657, #ff7657);
  border: none !important;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  font-weight: 400;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button--primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
}
.el-button span {
  color: #fff;
}
</style>
