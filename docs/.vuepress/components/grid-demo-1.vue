<template>
  <div style="padding-top: 16px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-row class="demoRow">
      <g-col span="8" class="demoCol">8</g-col>
      <g-col span="8" class="demoCol">8</g-col>
      <g-col span="8" class="demoCol">8</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="6" class="demoCol">6</g-col>
      <g-col span="6" class="demoCol">6</g-col>
      <g-col span="6" class="demoCol">6</g-col>
      <g-col span="6" class="demoCol">6</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="4" class="demoCol">4</g-col>
      <g-col span="4" class="demoCol">4</g-col>
      <g-col span="4" class="demoCol">4</g-col>
      <g-col span="4" class="demoCol">4</g-col>
      <g-col span="4" class="demoCol">4</g-col>
      <g-col span="4" class="demoCol">4</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
      <g-col span="2" class="demoCol">2</g-col>
    </g-row>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import GRow from "../../../src/row";
import GCol from "../../../src/col";
export default {
  components: { GRow, GCol }
};
</script>