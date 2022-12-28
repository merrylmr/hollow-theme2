---
title: "elementUI及vuetifyjs动态换色实践"
slug: elementUI
date: 2018-08-26
tags: [vue,elementUI]
desc: elementUI 根绝配置的颜色，实现对应颜色组件渲染
category: vue
---
## 前言
**背景 ：**

1.项目中，需要通过一个后台系统操作配色，为另一个系统实现配色；
2.项目开发使用的ui是elementUI。

**目的 ：**

使用elementUI实现系统的动态更改主题色。

## 功能分析

调研了[vuetifyjs](https://vuetifyjs.com/zh-Hans/theme-generator)的主题色实现方案及[elementUI](http://element.eleme.io/#/zh-CN/component/installation "elementUI")官方实现的更换主题色的方案。把两者结合到一起，实现我们系统需要的配色功能。

下面分别介绍一下两者配色方案的实现：

### vuetifyjs

首先，去看了它的在线主题色生成器，
![image](http://upload-images.jianshu.io/upload_images/11899053-b52acae7eea98b21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
更换颜色时候，主要是红色框出里面的css代码发生了改变。



接着，看了其实现配色的核心源码部分**，得出结论：核心css代码是动态生成的**。

**代码分析：**

流程如下：

第一步，初始化的时候，根据配置的主题色，生成主题色的css样式

在vue的生命周期created阶段：调用核心方法 genStyle()和applyTheme()；

genStyle方法：生成一个id="vuetify-theme-stylesheet"style标签,并插入到dom结构中。

applyTheme方法：将主题色样式放到id="vuetify-theme-stylesheet"的style标签中。

![image](http://upload-images.jianshu.io/upload_images/11899053-d5a06f95ab4ef13f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image](http://upload-images.jianshu.io/upload_images/11899053-d3f4766cb362bc1c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



可以看出，applyTheme（）方法依赖“generatedStyles”，

第二步：watch了“generatedStyles”，generatedStyles一旦发生改变，则会调用applyTheme()方法，将id为"vuetify-theme-stylesheet"的style标签内容实现更换。

![image](http://upload-images.jianshu.io/upload_images/11899053-8137595e86362b1e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


第三步：查看generatedStyles这个计算属性，可以看出其主要依赖parsedTheme这个计算属性，而发生改变。

![image](http://upload-images.jianshu.io/upload_images/11899053-c78d382d3cfe544b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


parsedTheme获取的是主题色值；

当更改主题色的时候，parsedTheme发生改变；
generatedStyles计算属性就也会随之改变，然后调用genBaseColor()方法（此方法主要就是生成style标签里面的内容）
watch监测到“generatedStyles”发生了改变，就会调用applyTheme()，将“genBaseColor（）”方法生成的css放入到style标签内，主色系就发生了变化。

![image](http://upload-images.jianshu.io/upload_images/11899053-fe92fd22b482175d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image](http://upload-images.jianshu.io/upload_images/11899053-d21c846c9a7f80bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


看下面这个图，基本上就是其依赖关系，及发生改变时的调用

![image](http://upload-images.jianshu.io/upload_images/11899053-28737cf69aac0010.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### elementUI动态换肤

Element官网提供了自定义主题的方案，同时也提供了一个在线自定义主题的[demo](https://elementui.github.io/theme-preview/#/zh-CN "demo")

下面是demo实现动态换肤的思路：

![image](http://upload-images.jianshu.io/upload_images/11899053-a67a56e644f8909d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
图片来自:https://github.com/ElemeFE/element/issues/3054

下载了官网的Demo之后，进行了一些优化（适合我们项目）。

主要如下：
将样式文件放到本地；只保留涉及到颜色的样式css。不需要全部的css（体力活，有点耗时）

**优点：**

1.不需要去请求element的样式文件；

2.第一次初始化的时候，系统就会很快的根据配色去替换调相应的颜色代码。
而不会让用户发现颜色的变化（蓝色-->绿色），采用本地的方式替换，用户看到的就是绿色。

## 自定义颜色Demo
https://github.com/merrylmr/element-theme


## 相关文档

https://github.com/ElemeFE/element/issues/3054
https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/theme.html#%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96
