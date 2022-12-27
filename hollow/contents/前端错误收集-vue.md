---
title: 前端错误收集（Vue）
slug: Vue
date: 2020-06-02 
tags: [Vue]
desc: 对开发者：为了更快速的定位及解决bug，减少 JS Error 的错误量；
对用户体验：让用户更加流畅的使用我们的产品，减少用户反馈时间，让尽量少的用户遇到这样的场景就把问题修改掉，保证尽量多的用户可以正常使用；
对产品：不断发现产品的问题，提升产品质量。
---

## 前言

对开发者：为了更快速的定位及解决bug，减少 JS Error 的错误量；
对用户体验：让用户更加流畅的使用我们的[产品](https://www.zhuzi.com.cn/)，减少用户反馈时间，让尽量少的用户遇到这样的场景就把问题修改掉，保证尽量多的用户可以正常使用；
对产品：不断发现产品的问题，提升产品质量。

所以前端错误收集，必不可少。

调研了现存的错误监控方案，现将相关的知识点整理如下
* JS异常处理的方式
* vue项目的异常处理
* 错误上报
* 常见错误消息
* 错误监控产品

## JS异常处理的方式
前端错误类型：语法错误、运行错误；

**语法错误**:语法错误不会通过解析器，他会被标记为非法的JS并报告在控制台中。
看一下这个代码，却少右括号，所以是一个语法错误。控制台会打印出Uncaught SyntaxError: missing ) after argument list(…)
````
var alarm = "Dragons approach!"; 
alert(alarm
````
**运行错误**:
````
alert(alarm);
````
这段代码是语法正确的，但是在C语言中，alarm是没有定义的，会被报告语法错误，所以静态语言的查错能力提前了，在程序编译的时候就会指出这种错误，但是JS没有这种能力，在解析器尝试运行这段代码的时候，会抛出“run-time error”。

###  try-catch
通过catch捕获到错误，做一些处理（上报错误）
````
 try {
        msg
    } catch (e) {
        console.log('catch error!');
        console.log(e)
    }
````
限制：无法捕获语法、异步错误，但是：可以捕获async await错误
* 语法错误
````
 try {
  // 括号未闭合
    console.log('error'
  } catch (e) {
    console.error('try-catch', e);
  }

````
* 异步错误
````
 try {
    setTimeout(() => {
      throw '出错啦！';
    }, 1000)
  } catch (e) {
    console.error(e);
  }
````
捕获async-await
````
  function p() {
    let x = new Promise((resolve, reject) => {
      reject('出错啦！')
    })
    return x;
  }

  async function f() {
    try {
      await p();
    } catch (e) {
      console.error('try-catch', e);
    }
  }
  f();
````
运行结果
![](https://upload-images.jianshu.io/upload_images/11899053-5b2abe45bf9d8175.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



###  window.onerror
优点:可以捕获异步错误
````
window.onerror=function(errMsg,url,row,col,error){
  console.log({msg, url, row, col, error});
 return true
}
````
限制：不能捕获资源加载错误错误
````
<script>
  window.onerror = function (msg, url, row, col, error) {
    console.log({
      msg,  url,  row, col, error
    })
    return true;
  };
</script>
<img src="./404.png">
````
需要注意的是，window.onerror 函数只有在返回 true 的时候，异常才不会向上抛出，否则即使是知道异常的发生控制台还是会显示 Uncaught Error: xxxxx。

###  addEventListener(error,handle)
优点：除了onerror捕获的错误之外，还可以捕获资源加载错误

````
    window.addEventListener('error', (e) => {
        console.log(e, e.message)
    },true)
````
由于网络请求异常不会事件冒泡，因此必须在捕获阶段将其捕捉到才行，但是这种方式虽然可以捕捉到网络请求的异常，但是无法判断 HTTP 的状态是 404 还是其他比如 500 等等，所以还需要配合服务端日志才进行排查分析才可以。

### addEventListener("unhandledrejection"，handle）
捕获未catch 的 promise 错误




## vue项目的异常处理
vue提供了一个全局配置 errorHandle,，用于收集Vue运行时发生的错误。
```
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
 let componentName = formatComponentName(vm);
}
// 获取组件的名称
  function formatComponentName(vm) {
    if (vm.$root === vm) return 'root';
    let name = vm._isVue
      ? (vm.$options && vm.$options.name) ||
      (vm.$options && vm.$options._componentTag)
      : vm.name;
    return (
      (name ? 'component <' + name + '>' : 'anonymous component') +
      (vm._isVue && vm.$options && vm.$options.__file
        ? ' at ' + (vm.$options && vm.$options.__file)
        : '')
    );
  }
```
拿到vue对应的实例之后，就可以获取vue对应的组件名称，定位到是哪一个组件报错；

##  常见错误消息
* Script error.
  引入与当前不同源的资源，脚本出错时，就报此错误消息；
  解决方案:
  1.同源化
````
将js代码内联到html文件中
将js文件与html文件放到同一域名下
````
以上方式能够简单直接地解决问题，但也可能带来其他影响，如内联资源不好利用文件缓存，同域无法充分利用cdn优势等等。
2.跨源资源共享机制( CORS )
````
<script src="http://127.0.0.1:8077/main.js" crossorigin></script>
````
服务端也需要支持跨域资源共享
````
 Access-Control-Allow-Origin:*
````


* ResizeObserver loop limit exceeded
  在升级chrome64版本之后会报这个错误，可以忽略这个错误；
  这个是提示你无法在单帧动画所有的observers，不会导致程序中断
  https://segmentfault.com/q/1010000015836349

## 错误上报

我们的项目实现方案：
请求错误上报的api：上报公司的错误平台，然后通过钉钉机器人向相应人员发送消息。
![image.png](https://upload-images.jianshu.io/upload_images/11899053-a469045bb8680343.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

钉钉开发者文档：[https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq](https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq)

## error-log
[https://github.com/merrylmr/error-log](https://github.com/merrylmr/error-log)



## 错误监控产品
* [fundebug](https://www.fundebug.com/) 收费产品
* [Frontend Tracker]([https://github.com/Pgyer/frontend-tracker](https://github.com/Pgyer/frontend-tracker) 免费)

## 参考文章
* [前端错误日志收集方案](https://juejin.im/post/5bd2dbc7f265da0af16183f8)
* [前端一站式异常捕获方案(全)](https://jixianqianduan.com/frontend-weboptimize/2018/02/22/front-end-react-error-capture.html)

* [脚本错误量极致优化](https://github.com/joeyguo/blog/issues/13)
* [前端代码异常监控实战](https://github.com/happylindz/blog/issues/5)
* [前端错误收集脚本](https://www.jianshu.com/p/6ccbbc16be5d)
* [[前端错误日志采集上报](https://segmentfault.com/a/1190000015350696)
  ](https://segmentfault.com/a/1190000015350696)
* [前端错误收集（Vue.js、微信小程序](https://blog.csdn.net/qappleh/article/details/84984967)
* [JS异常(语法错误与运行时错误)处理的技巧](https://zhuanlan.zhihu.com/p/66405982?from_voters_page=true)
