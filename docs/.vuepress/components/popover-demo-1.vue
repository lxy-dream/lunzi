<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-popover>
      <g-button style="background:#58b4ae">上方弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="bottom">
      <g-button style="background:#ffe277">下方弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="left">
      <g-button style="background:#ffb367">左边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="right">
      <g-button style="background:#ffe2bc">右边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
import GButton from "../../../src/button";
import GPopover from "../../../src/popover";
export default {
  components: { GButton, GPopover },

  methods: {
    onClickButton() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      });
    }
  }
};
</script> 