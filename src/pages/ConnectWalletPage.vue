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
      CONTRACT_ADDRESS: "0xcaab3e070517f250c3be78e5b427a66995effb89",
    };
  },
};
</script>

<style scoped></style>
