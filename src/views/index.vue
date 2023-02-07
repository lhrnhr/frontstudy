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
     <div class="wrapper">
         <div class="display">
            <div id="time"></div>
         </div>
         <span></span>
         <span></span>
    </div>
    <div class="three">
      <div class="header">
        <div class="logo">ЛОГО</div>
        <div class="navigation">
          <a @click="jsStudyJump"><span></span><span></span><span></span><span></span>jsStudy</a>
          <a @click="lecodeStudyJump"><span></span><span></span><span></span><span></span>lecodeStudy</a>
          <a href="#" @click="cssStudyJump"><span></span><span></span><span></span><span></span>cssStudy</a>
          <a @click="temporaryStudyJump"><span></span><span></span><span></span><span></span>temporaryStudy</a>
          <!-- <a @click="lecodeStudyJump" style="margin:0 20px;">lecodeStudy</a> -->
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    this.timeLoad()
  },
  methods: {
    jsStudyJump () {
      this.$router.push('./jsStudy')
      console.log('ok')
    },
    lecodeStudyJump () {
      this.$router.push('./lecodeStudy')
    },
    cssStudyJump () {
      this.$router.push('./cssStudy')
    },
    temporaryStudyJump () {
      this.$router.push('./temporaryStudy')
    },
    timeLoad () {
      setInterval(() => {
        const time = document.querySelector('.display #time')
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let day = 'AM'
        if (hours > 12) {
          day = 'PM'
          hours = hours - 12
        }
        if (seconds < 10) {
          seconds = '0' + seconds
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
        if (hours < 10) {
          hours = '0' + hours
        }
        time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + day
      })
    }
  }
}
</script>

<style lang="less">
.home{
  /* 背景色 */

position: relative;
/* left: 231px;
top: 218px; */
width: auto;
height: 1307px;
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
height: 800px;
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
left: 280px;
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
/* 时钟的样式 */
.wrapper{
  height: 100px;
  width: 360px;
  position: relative;
  left: 145%;
  top: 18%;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  border-radius: 10px;
  cursor: default;
  animation: animate 1.5s linear infinite;
}
.wrapper .display,
.wrapper span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.wrapper .display{
  z-index: 999;
  height: 85px;
  width: 345px;
  background: #1b1b1b;
  border-radius: 6px;
  text-align: center;
}
.display #time{
  line-height: 85px;
  color: #fff;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate 1.5s linear infinite;
}
@keyframes animate {
  100%{
    filter: hue-rotate(360deg);
  }
}
.wrapper span{
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: inherit;
}
.wrapper span:first-child{
  filter: blur(7px);
}
.wrapper span:last-child{
  filter: blur(20px);
}
/* 导航按钮的样式 */
a{
    position: relative;
    display: inline-block;
    padding: 25px 10px;
    margin: -25px 2px 0 2px;
    color: #03e9f4;
    font-size: 24px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.33));
    transform: rotate3d(-2, 19, 0, 30deg);

    &:nth-child(1){
        filter: hue-rotate(290deg);
    }
    &:nth-child(2){
        filter: hue-rotate(50deg);
    }
    &:nth-child(3){
        filter: hue-rotate(110deg);
    }

    span{
        position: absolute;
        display: block;

        &:nth-child(1){
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #03e9f4);
            animation: animate1 1s linear infinite;
            @keyframes animate1{
                0%{
                    left: -100%;
                }
                50%, 100%{
                    left: 100%;
                }
            }
        }
        &:nth-child(2){
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #03e9f4);
            animation: animate2 1s linear infinite 0.25s;
            @keyframes animate2{
                0%{
                    top: -100%;
                }
                50%, 100%{
                    top: 100%;
                }
            }
        }
        &:nth-child(3){
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, #03e9f4);
            animation: animate3 1s linear infinite 0.5s;
            @keyframes animate3{
                0%{
                    right: -100%;
                }
                50%, 100%{
                    right: 100%;
                }
            }
        }
        &:nth-child(4){
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #03e9f4);
            animation: animate4 1s linear infinite 0.75s;
            @keyframes animate4{
                0%{
                    bottom: -100%;
                }
                50%, 100%{
                    bottom: 100%;
                }
            }
        }
    }

    &:hover{
        background: #03e9f4;
        color: #050801;
        box-shadow: 0 0 5px #03e9f4,
                    0 0 50px #03e9f4,
                    0 0 100px #03e9f4;
        transform: rotate3d(0, 0, 0, 45deg);
    }
}
</style>
