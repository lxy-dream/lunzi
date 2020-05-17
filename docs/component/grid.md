---
title: Grid
---

# 网格

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

::: details 点击查看代码

```js
  * {
            box-sizing: border-box;
          }
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
```

:::

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

::: details 点击查看代码

```js
        * {
            box-sizing: border-box;
          }
          <g-row class="demoRow" gutter="10">
            <g-col span="8">
              <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
              <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
              <div class="demoCol">8</div>
            </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
            <g-col span="6">
              <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
              <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
              <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
              <div class="demoCol">6</div>
            </g-col>
          </g-row>
```

:::

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

::: details 点击查看代码

```js
        * {
            box-sizing: border-box;
          }
          <g-row class="demoRow" gutter="10">
            <g-col span="8">
              <div class="demoCol">8</div>
            </g-col>
            <g-col span="8" offset="8">
              <div class="demoCol">8</div>
            </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
            <g-col span="6" offset="6">
              <div class="demoCol">6</div>
            </g-col>
            <g-col span="6" offset="6">
              <div class="demoCol">6</div>
            </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
            <g-col span="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4" offset="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4" offset="8">
              <div class="demoCol">4</div>
            </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
              <div class="demoCol">2</div>
            </g-col>
          </g-row>
```

:::
