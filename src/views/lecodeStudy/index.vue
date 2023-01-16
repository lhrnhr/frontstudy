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
      <ArrayProblems  v-if="value === 'ArrayProblems'"/>
      <ListProblems  v-if="value === 'ListProblems'"/>
  </div>
</template>

<script>
import ArrayProblems from '@/views/lecodeStudy/arrayProblems/index.vue'
import ListProblems from '@/views/lecodeStudy/listProblems/index.vue'

export default{
  name: 'lecodeStudy',
  components: {ArrayProblems, ListProblems},
  data () {
    return {
      options: [{value: 'ArrayProblems', label: '数组问题'},
        {value: 'ListProblems', label: '链表问题'} ],
      value: ''
    }
  }
}
</script>

<style>
</style>
