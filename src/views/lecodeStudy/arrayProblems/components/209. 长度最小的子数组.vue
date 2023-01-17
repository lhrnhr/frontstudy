<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="50%">aside</el-aside>
        <el-main>
          <!-- <el-button @click="drawOn">画画</el-button>
          <ImgDraw v-if="drawOnOff"/> -->
          <el-button @click="test">测试</el-button><br>
          <span>输入nums:{{nums}},target:{{target}}</span><br>
          <span>输出{{targetNum}}</span>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ImgDraw from '@/components/imgDraw/imgDraw.vue'
export default {
  name: 'TwoZeroNine',
  components: {ImgDraw},
  data () {
    return {
      drawOnOff: false,
      nums: [1, 4, 4],
      target: 4,
      targetNum: 0
      // newNums: []
    }
  },
  methods: {
    test () {
      var nums = [1, 4, 4]
      var left = 0
      var right = 0
      var sum = 0
      var result = nums.length + 1
      while (right < nums.length) {
        sum += nums[right++]
        while (sum >= this.target) {
          result = result < right - left ? result : right - left
          sum -= nums[left++]
        }
      }
      this.targetNum = result > nums.length ? 0 : result
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
