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
          <span>输入nums:{{nums}}</span><br>
          <span>输出:{{newNums}}</span>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ImgDraw from '@/components/imgDraw/imgDraw.vue'
export default {
  name: 'NineSevenSeven',
  components: {ImgDraw},
  data () {
    return {
      drawOnOff: false,
      nums: [-4, -1, 0, 3, 10],
      newNums: []
    }
  },
  methods: {
    test () {
      var nums = [-4, -1, 0, 3, 10]
      // eslint-disable-next-line one-var
      let slow = 0, fast = nums.length - 1, final = nums.length - 1, newNums = []
      for (;slow <= fast;) {
        if (nums[slow] * nums[slow] <= nums[fast] * nums[fast]) {
          newNums[final--] = nums[fast] * nums[fast]
          fast--
        } else if (nums[slow] * nums[slow] > nums[fast] * nums[fast]) {
          newNums[final--] = nums[slow] * nums[slow]
          slow++
        }
      }
      this.newNums = newNums
      console.log(newNums)
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
