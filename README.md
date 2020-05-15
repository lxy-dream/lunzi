# 轮子 -一个 Vue  UI组件

## 介绍
这是我在学习Vue过程中做的一个UI框架，以便于更好的去理解Vue

## 开始使用

1.添加css样式

    使用本框架前请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    IE 8 及以上浏览器都支持此样式
    用的时候还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```
        html {
                --button-height: 32px;
                --font-size: 14px;
                --button-bg: white;
                --button-active-bg: #eee;
                --border-radius: 4px;
                --color: #333;
                --border-color: #999;
                --border-color-hover: #666;
            }
    ```
    IE 15 及以上浏览器都支持此样式。

2.安装lunzi
```
npm i --save lunzi
```

3.引用轮子
```
import {Button,ButtonGroup,Icon} from 'lunzi'
import 'lunzi/dist/index.css'

export default{
    name:'app',
    components:{
        HelloWorld,
        'g-button':Button,
        'g-icon':Icon
    }
}
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码