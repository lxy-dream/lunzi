<template>
  <div>
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button style="background:#58b4ae">默认按钮</g-button>
    <g-button icon="settings" style="background:#ffe277">默认按钮</g-button>
    <g-button :loading="true" style="background:#ffb367">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
  </div>
</template>
<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  }
};
</script>
