<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="50%">aside</el-aside>
        <el-main>
          <el-button @click="drawOn">画画</el-button>
          <ImgDraw v-if="drawOnOff"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ImgDraw from '@/components/imgDraw/imgDraw.vue'
export default {
  name: 'SevenZeroFour',
  components: {ImgDraw},
  data () {
    return {
      drawOnOff: false
    }
  },
  methods: {
    drawOn () {
      this.drawOnOff = !this.drawOnOff
    }
  }
}
</script>

<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 500px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
