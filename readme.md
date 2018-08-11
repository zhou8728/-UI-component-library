
简易vue组件库

[![Build Status](https://www.travis-ci.org/zhou8728/-UI-component-library.svg?branch=dev)](https://www.travis-ci.org/zhou8728/-UI-component-library)

作者:zhoudc

## 介绍
学习vue过程中做的UI框架

## 开始使用

1.添加css样式
    使用本框架前 请在CSS中开启border-box
    
    ```
    *,*::before,*""after{box-sizing:border-box}
    
    
    IE8及以上浏览器都支持此样式
    
    你还需要自己设置默认颜色等变量(后续会改为scss)
    
    html {
        --button-right:32px;
        --font-size:14px;
        --button-bg:white;
        --button-active-bg:#eee;
        --border-radius:4px;
        --border-color:#999;
        --border-color-hover:#666;
    }
    
    IE15 及以上浏览器都支持此样式
    ```
    
    2 安装组件库
    npm i --save vue-ui
    
    3 引入组件库
    ```
    import {Button,ButtonGroup, Icon} from 'frank-test-1-1'
    import 'frank-test-1-1/dist/index.css'
    
    export default {
        name: 'app',
        components:{
        'g-button':Button,
        'g-icon':Icon
        }
    }
    ```
    
    4 引入 svg symbols
    ```
    <script src="//at.alicdn.com/t/font_775244_ksna98gzkc.js"></script>
    ```
    

## 文档

## 提问

##联系方式

##变动记录

##贡献代码


