import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    signerAddress: null,
    signer: null,
    contract: null,
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
    logout: state => {
      state.signerAddress = null;
      state.signer = null;
    },
  },
  getters: {
    signerAddress: state => state.signerAddress,
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
