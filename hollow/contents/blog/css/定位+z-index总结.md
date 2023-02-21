---
title: "定位+z-index总结"
slug: zIndex
date: 2019-11-06
tags: [css]
desc: fixed定位：一般会以窗口定位，当某一父级使用了transform:xxx属性时，则fixed定位就相对于该父级
category: css
---
##  fixed+transform
fixed定位：一般会以窗口定位，当某一父级使用了transform:xxx属性时，则fixed定位就相对于该父级。
![image.png](https://upload-images.jianshu.io/upload_images/11899053-4003818216137731.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
  <style>
    .box1 {
      position: fixed;
      top: 10px;
      left: 10px;
    }

    .parent {
      transform: scale(1);
      ...
    }

    .box2 {
      position: fixed;
      left: 10px;
      top: 10px;
    }
  </style>
<div class="box box1">
  <p>box1:fix定位相对于窗口</p>
</div>
<div class="parent">
  <div class="box box2">
    <p>box2:fix定位相对于父元素</p>
  </div>
</div>
```
## absolute width
当本身未设置宽度的时候，则当对定位的父级的宽度：为当前DOM的最大宽度。
````

````

## z-index
* 不给part1设置z-index.
  如下图所示：part1的z-index:auto,part2的z-index:1,from-part1是part1的子DOM，z-index为2，从图中，可以看出，from part1的浮在part2上。
  ![image.png](https://upload-images.jianshu.io/upload_images/11899053-8916be79dd9db082.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
  .box-part1{
   ......
    }
    .box-part2{
      position:relative;
      z-index:1;
      ......
    }
    .zIndex2{
     ......
      background:rgba(0,0,0,0.3);
      z-index:2;
    }
<div class="box">
  <div class="box-part1">
    <p>part1:z-index:auto</p>
    <div class="zIndex zIndex2">
      <span style="background-color:blue">from part1(z-index:2)</span></div>
  </div>
  <div class="box-part2">
    <p>part2:z-index:1</p>
  </div>
</div>
```
* 当给part1设置z-index为0的时，则from part1被part2遮盖（尽管from part1的z-index:2）。如下图所示
  ![image.png](https://upload-images.jianshu.io/upload_images/11899053-d515afa27e52b8d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
  .box-part1{
     z-index:0
    }
    .box-part2{
      position:relative;
      z-index:1;
      ......
    }
    .zIndex2{
     ......
      background:rgba(0,0,0,0.3);
      z-index:2;
    }
```
结论：
1.父级不设置z-index，父级相邻的DOM设置z-index，子设置z-index，
当子z-index>父级的兄弟的z-index，则层级越高；
2.父级设置的z-index,那么则以父级的z-index去和同级的DOM的z-index去比较



