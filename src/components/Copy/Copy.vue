<template>
<div class="copy-style">
    <span>{{text}}</span>
   <!-- <i class="el-icon-document-copy" ref="copy" @click="copy"></i> -->
   <i class="el-icon-document-copy" v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>

</div>
</template>
<script>
export default {
  name: 'Copy',
  props: {
    text: {
      type: Number | String,
      required: true
    }
  },
  methods: {
    copy () {
      // 获取上一个兄弟节点
      let text = this.$refs.copy.previousSibling
      // 创建select对象与range对象
      const selection = window.getSelection()
      // 从当前selection对象中移除所有的range对象
      if (selection.rangeCount > 0) selection.removeAllRanges()
      const range = document.createRange()
      // 使 Range 包含某个节点的内容 使用这个 或者下面的selectNode都可以
      range.selectNodeContents(text) // 需要选中的dom节点
      // 这个会有换行
      // range.selectNode(text)
      //  选中
      selection.addRange(range)
      // 执行浏览器复制命令
      document.execCommand('copy')
      //  取消选中
      // selection.removeAllRanges()
    },
    onCopy (e) { // 复制成功
      this.$message({
        message: '复制成功！',
        type: 'success'
      })
    },
    onError (e) { // 复制失败
      console.log(e, '为什么复制失败了')
      this.$message({
        message: '复制失败！',
        type: 'error'
      })
    }
  }
}
</script>
<style scoped>
.copy-style{
  padding: 5px 0;
  background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
}
</style>
