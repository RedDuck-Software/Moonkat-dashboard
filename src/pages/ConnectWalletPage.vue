<template>
  <WalletConnect />
</template>

<script>
import WalletConnect from "@/components/WalletConnect";
import { CONTRACT_ADDRESS } from "@/constants";
export default {
  name: "ConnectWalletPage",
  components: {
    WalletConnect,
  },
  data() {
    return {
      CONTRACT_ADDRESS: CONTRACT_ADDRESS,
    };
  },
};
</script>

<style scoped></style>
