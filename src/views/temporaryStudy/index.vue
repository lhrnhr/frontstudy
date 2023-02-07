<template>
  <div>
    <div>
      <el-select v-model="value" placeholder="请选择" :clearable="true">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
      <LabelProblems  v-if="value === 'LabelProblems'"/>
  </div>
</template>

<script>
import LabelProblems from '@/views/temporaryStudy/labelProblems/index.vue'

export default{
  name: 'temporaryStudy',
  components: {LabelProblems},
  data () {
    return {
      options: [{value: 'LabelProblems', label: '标签相关问题'}],
      value: ''
    }
  }
}
</script>

<style>
</style>
