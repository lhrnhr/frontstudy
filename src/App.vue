<template>
  <div id="app">
    <router-view/>
    <!-- <div class="home"></div>
    <div class="home-circle1"></div>
    <div class="home-circle2"></div>
    <div class="text">
    <div class="text1">WEBSITE STUDY</div>
    <div class="text2">基础学习首页</div>
    <div class="text3">前端学习精选</div>
    <div class="text4">FONT STUDY INTERFACE</div>
    </div> -->
  </div>
</template>

<script>
import Home from '@/views/index.vue'
import devPixelRatio from './utils/devicePixelRatio'
export default {
  name: 'App',
  components: {Home},
  created () {
    // 实现的效果是无论怎么缩放页面，整体的位置也不会变化
    // eslint-disable-next-line new-cap
    new devPixelRatio().init() // 初始化页面比例
  }
}
</script>

<style>
body{
  margin: 0;
}
.home{
  /* 背景色 */
position: relative;
/* left: 231px;
top: 218px; */
width: auto;
height: 1080px;
opacity: 1;
background: #273176;
}
.home-circle1{
  /* 装饰圆 */

position: absolute;
left: 0px;
top: 0px;
width: 581px;
height: 581px;
opacity: 1;
background: radial-gradient(50% 50% at 50% 50%, #15318D 0%, rgba(235,149,159,0.00) 100%);
filter: blur(100px);
}
.home-circle2{
  /* 装饰圆 */
position: absolute;
left: 680px;
top: 270px;
width: 910px;
height: 910px;
opacity: 1;
background: radial-gradient(50% 50% at 50% 50%, #15318D 0%, rgba(235,149,159,0.00) 100%);
filter: blur(100px);
}
.text{
 /* 文字信息 */
position: absolute;
left: 158px;
top: 52px;
width: 1284px;
height: 145px;
opacity: 1;
}
.text1{
  /* WEBSITE STUDY*/
position: absolute;
left: 0px;
top: 24px;
width: 200px;
height: 104px;
opacity: 1;
font-family: Source Han Sans CN;
font-size: 44px;
font-weight: 900;
line-height: 52px;
letter-spacing: 0em;
color: #FFFFFF;
}
.text2{
  /* 基础学习首页 */
position: absolute;
left: 342px;
top: 0px;
width: 800px;
height: 145px;
opacity: 1;
font-family: Source Han Sans CN;
font-size: 100px;
font-weight: 900;
text-align: center;
letter-spacing: 0em;
color: #FFFFFF;
}
.text3{
/*  前端学习精选 */
position: absolute;
left: 1134px;
top: 40px;
width: 400px;
height: 40px;
opacity: 1;
font-family: Source Han Sans CN;
font-size: 24px;
font-weight: normal;
line-height: 40px;
text-align: right;
letter-spacing: 0em;
color: #FFFFFF;
}
.text4{
/* FONT STUDY INTERFACE */
position: absolute;
left: 986px;
top: 87px;
width: 550px;
height: 40px;
opacity: 1;
font-family: Source Han Sans CN;
font-size: 24px;
font-weight: bold;
line-height: 40px;
text-align: right;
letter-spacing: 0em;
color: #FFFFFF;
}
</style>
