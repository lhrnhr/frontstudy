<template>
  <div>
    border
    <div class="box1"></div>
    padding
    <div class="box2"></div>
    块元素
    <table></table>
    行内元素
    <span>ok</span><br>
    行内块元素
    <div><button>ok</button><button>ok2</button></div>
    <a href="https://github.com/ZhuCunLong/Web-Learning-Notes/blob/master/HTML/%E6%B8%85%E6%B5%AE%E5%8A%A8.md">ok</a>
  </div>
</template>

<script>
export default {
  name: 'BoxAndElement'
}
</script>

<style>
.box1{
  width: 100px;
  height: 200px;
  background: red;
  border-width: 10px 20px 30px 40px;
  border-color: orange red green pink;
  border-style: solid;
}
.box2{
  width: 100px;
  height: 10px;
  padding: 20px;
  background: green;
  /* box-sizing: border-box; */
}
</style>
