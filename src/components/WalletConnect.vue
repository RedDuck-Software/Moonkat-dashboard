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
                <br />
                <br   />
                <a
                  v-if="isAndroid"
                  class="el-button button-custom-new el-button--secondary el-button--small"
                  href="https://link.trustwallet.com/open_url?coin_id=60&url=https://moonkat.net/dashboard"
                  >Trust wallet</a
                >
    
                <a
                  class="el-button button-custom-new el-button--secondary el-button--small"
                  @click="connectWalletConnect()"
                  >Wallet connect</a
                >

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
import WalletConnectProvider from "@walletconnect/web3-provider";

export default {
  name: "WalletConnect",

  data() {
    return {
      isAndroid: false,
      isIos: false,
    };
  },
  computed: {
    ...mapGetters(["signerAddress"]),
  },
  mounted() {
    this.detectMobile();

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
        this.$store.commit("updateWalletProvider", window.ethereum);

        window.ethereum.on("accountsChanged", function(accounts) {
          // Time to reload your interface with accounts[0]!
          this.$store.commit("logout");
          window.location.reload();
        });

        window.ethereum.on("networkChanged", function(networkId) {
          // Time to reload your interface with the new networkId
          this.$store.commit("logout");
          window.location.reload();
        });
      } else {
        alert("Please install MetaMask!");
      }
    },
    async connectWalletConnect() {
      const walletConnectProvider = new WalletConnectProvider({
        rpc: "https://bsc-dataseed.binance.org/",
        qrcode: true, // Required
      });

      await walletConnectProvider.enable();
      
      const provider = new ethers.providers.Web3Provider(walletConnectProvider)

      const signer = provider.getSigner();
      console.log("signer:", signer);
      const address = await signer.getAddress();
      this.$store.commit("updateSignerAddress", address);
      this.$store.commit("updateWalletProvider", walletConnectProvider);


      walletConnectProvider.on("connect", (error, payload) => {
        if (error) {
          throw error;
        }
        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
      });
      
      walletConnectProvider.on("session_update", (error, payload) => {
        if (error) {
          throw error;
        }
      
        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
      });
      
      walletConnectProvider.on("disconnect", (error, payload) => {
        this.$store.commit("logout");
        window.location.reload();
        // Delete connector
      });
    },
    detectMobile() {
      if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.isAndroid = true;
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        this.isIos = true;
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
