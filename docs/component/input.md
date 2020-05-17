---
title: Input
---

# 输入框

<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

::: details 点击查看代码

```js
          <g-input></g-input>
          <g-input value="中文"></g-input>
          <g-input value="中文" disabled></g-input>
          <g-input value="中文" readonly></g-input>
```

:::

<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

::: details 点击查看代码

```js
    data:{
            value: '1'
          }
          <g-input v-model="value"></g-input>
          <div>
            value: {{value}}
          </div>
```

:::
