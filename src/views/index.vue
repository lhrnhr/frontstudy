<template>
  <div>
    <div class="home"></div>
    <div class="home-circle1"></div>
    <div class="home-circle2"></div>
    <div class="text">
    <div class="text1">WEBSITE STUDY</div>
    <div class="text2">基础学习首页</div>
    <div class="text3">前端学习精选</div>
    <div class="text4">FONT STUDY INTERFACE</div>
    <div class="three">
      <div class="header">
        <div class="logo">ЛОГО</div>
        <div class="navigation">
          <a @click="jsStudyJump" style="margin:0 20px;">jsStudy</a>
          <a @click="lecodeStudyJump" style="margin:0 20px;">lecodeStudy</a>
          <a @click="cssStudyJump" style="margin:0 20px;">cssStudy</a>

        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    jsStudyJump () {
      this.$router.push('./jsStudy')
    },
    lecodeStudyJump () {
      this.$router.push('./lecodeStudy')
    },
    cssStudyJump () {
      this.$router.push('./cssStudy')
    }
  }
}
</script>

<style>
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
width: 1280px;
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
width: 460px;
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
width: 610px;
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
.three{
  /* 3 */

position: absolute;
/* left: 5px; */
top: 210px;
width: 1600px;
height: 3306.58px;
border-radius: 42.65px;
opacity: 1;
/* 外部/BG */
background: #0B1D26;
box-shadow: -11.6px 11.6px 23.2px 0px rgba(0, 0, 0, 0.3);
}
.header{
  /* Header */
position: absolute;
left: 56.85px;
top: 39.45px;
width: 1262.3px;
height: 17.93px;
opacity: 1;
}
.logo{
  /* ЛОГО */

position: absolute;
left: 0px;
top: -4.3px;
width: 67px;
height: 32.25px;
opacity: 1;
font-family: BookAntiqua;
font-size: 22.93px;
font-weight: normal;
line-height: 32.25px;
letter-spacing: 0.23px;
/* 外部/Weiß */
color: #FFFFFF;
}
.navigation{
  /* Снаряжение */
position: absolute;
left: 530.02px;
top: 1.43px;
opacity: 1;
font-family: Gilroy-Bold;
font-size: 18px;
font-weight: normal;
line-height: 17.92px;
letter-spacing: 0px;
color: #FFFFFF;
}
a:hover{
  color:#273176;
}
</style>
