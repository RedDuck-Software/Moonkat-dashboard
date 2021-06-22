<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AccordionGroup",
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
