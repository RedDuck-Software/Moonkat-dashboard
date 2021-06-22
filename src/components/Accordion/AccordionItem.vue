<template>
  <div ref="item" class="accordion-item">
    <div v-if="hasHeader" @click="toggle">
      <slot name="header" />
    </div>
    <div ref="content" :class="['accordion-content', { show, collapsing }]" :style="heightStyle">
      <div class="accordion-content-inner">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: {
    autoScroll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      collapsing: false,
      height: null,
    };
  },
  computed: {
    hasHeader() {
      return !!this.$slots.header;
    },
    heightStyle() {
      if (this.height !== null) {
        return `height: ${this.height}px;`;
      }
      return "";
    },
  },
  methods: {
    collapse() {
      this.height = this.$refs.content.scrollHeight;
      this.collapsing = true;
      this.show = false;
      setTimeout(() => {
        this.height = null;
      }, 5);
      setTimeout(() => {
        this.show = false;
        this.collapsing = false;
      }, 200);
    },
    toggle() {
      if (this.collapsing) return;
      this.$emit("toggle", !this.show);
      if (!this.show && this.autoScroll) {
        setTimeout(() => {
          window.scrollTo({
            top: this.$refs.item.offsetTop - 8,
            behavior: "smooth",
          });
        }, 250);
      }
      if (!this.show) {
        if (!this.$parent.multiple) {
          this.$parent.$children.forEach(component => {
            if (component !== this) {
              component.collapse();
            }
          });
        }
        this.collapsing = true;
        this.$nextTick(() => {
          this.height = this.$refs.content.scrollHeight;
        });
        setTimeout(() => {
          this.show = true;
          this.height = null;
          this.collapsing = false;
        }, 200);
      } else {
        this.collapse();
      }
    },
  },
};
</script>

<style scoped>
.accordion-header {
  cursor: pointer;
}
.accordion.show > .accordion-header,
.accordion-header:hover {
  background-color: #f2f2f2;
}
.accordion-content {
  transition: height 200ms ease;
}
.accordion-content:not(.show):not(.collapsing) {
  display: none;
}
.accordion-content.collapsing {
  height: 0;
  overflow: hidden;
}
</style>
