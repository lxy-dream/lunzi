<template>
  <div style="padding-top: 16px;">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="$toast('点击弹出提示')" style="background:#58b4ae">上方弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'middle'})" style="background:#ffb367">中间弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'bottom'})" style="background:#ffe277">下方弹出</g-button>
    </div>
  </div>
</template>
<style>
.gulu-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from "../../../src/plugin";
import GButton from "../../../src/button";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: { GButton }
};
</script> 