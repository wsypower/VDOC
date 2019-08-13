<template>
  <span class="doccolor" :style="{color:colorSel}">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "DocColor",
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    colorSel() {
      const colorSelect = {
        Success: "#67C23A",
        Warning: "#E6A23C",
        Danger: "#F56C6C",
        Info: "#909399",
        primary: "#409EFF"
      };
      return colorSelect[this.color];
    }
  }
};
</script>

<style  scoped>
.doccolor {
  color: red;
}
</style>