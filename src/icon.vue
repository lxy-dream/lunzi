<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "GuluIcon",
  props: ["name"]
};
</script>

<style lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
}
</style>