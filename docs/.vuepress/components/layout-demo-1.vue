<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:#58b4ae;">header</g-header>
      <g-content style="height: 100px; background:#ffe277;">content</g-content>
      <g-footer style="height: 50px; background:#ffb367;">footer</g-footer>
    </g-layout>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import GLayout from "../../../src/layout";
import GHeader from "../../../src/header";
import GFooter from "../../../src/footer";
import GContent from "../../../src/content";
import GSider from "../../../src/sider";
export default {
  components: { GLayout, GHeader, GFooter, GContent, GSider }
};
</script> 