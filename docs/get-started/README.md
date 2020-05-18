---
title:快速上手
---

### 快速上手

::: tip
接下来的这段代码是展示部署成功之后如何在你的项目中引用这个组件，仿照这个代码实现一个 Hello World 吧
:::

```
import {Button} from 'lunzi-1-2'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```
