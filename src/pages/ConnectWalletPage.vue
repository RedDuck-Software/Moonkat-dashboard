<template>
  <WalletConnect />
</template>

<script>
import WalletConnect from "@/components/WalletConnect";
export default {
  name: "ConnectWalletPage",
  components: {
    WalletConnect,
  },
  data() {
    return {
      CONTRACT_ADDRESS: constants.CONTRACT_ADDRESS,
    };
  },
};
</script>

<style scoped></style>
