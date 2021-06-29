import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { WalletType } from "../MetamaskService";


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    signerAddress: null,
    signer: null,
    contract: null,
    walletProviderType : null,
  },
  mutations: {
    updateSignerAddress(state, address) {
      state.signerAddress = address;
    },
    updateSigner(state, signer) {
      state.signer = signer;
    },
    updateContract(state, contract) {
      state.contract = contract;
    },
    updateWalletProviderType(state, walletProviderType) {
      state.walletProviderType = walletProviderType;
    },
    logout: state => {
      state.signerAddress = null;
      state.walletProviderType = null;
      state.signer = null;
    },
  },
  getters: {
    signerAddress: state => state.signerAddress,
    walletProviderType: state => state.walletProviderType,

  },
  actions: {
    async loadContractInfo(context) {},
    // initCurrencies(context) {
    //   return axios.get("/api/currencies").then(response => {
    //     context.commit("setCurrencies", response.data);
    //   });
    // },
  },
  plugins: [createPersistedState()],
});

export default store;
