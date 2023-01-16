<template>
  <div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="704. 二分查找" name="first"><SevenZeroFour/></el-tab-pane>
    <el-tab-pane label="27. 移除元素" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="977.有序数组的平方" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="209.长度最小的子数组" name="fourth">定时任务补偿</el-tab-pane>
    <el-tab-pane label="59.螺旋矩阵II" name="five">配置管理</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import SevenZeroFour from './components/704. 二分查找.vue'
export default {
  name: 'ArrayProblems',
  components: {SevenZeroFour},
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    andleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
