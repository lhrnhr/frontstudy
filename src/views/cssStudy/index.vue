<template>
  <div>
    <div>
      <el-select v-model="value" placeholder="请选择" clearable="true">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
      <BoxAndElement  v-if="value === 'BoxAndElement'"/>
  </div>
</template>

<script>
import BoxAndElement from '@/views/cssStudy/boxAndElement/index.vue'
export default{
  name: 'Notes',
  components: {BoxAndElement},
  data () {
    return {
      options: [{
        value: 'BoxAndElement',
        label: '盒模型和元素'
      }],
      value: ''
    }
  }
}
</script>

<style>
</style>
