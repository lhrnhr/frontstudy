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
      <objectBegin  v-if="value === 'objectBegin'"/>
      <frequencyVocabulary  v-if="value === 'frequencyVocabulary'"/>
  </div>
</template>

<script>
import objectBegin from '@/views/jsStudy/objectBegin/index.vue'
import frequencyVocabulary from '@/views/jsStudy/frequencyVocabulary/index.vue'

export default{
  name: 'Notes',
  components: {objectBegin, frequencyVocabulary},
  data () {
    return {
      options: [{
        value: 'frequencyVocabulary',
        label: '高频词汇'
      }, {
        value: 'objectBegin',
        label: 'object初学'
      }],
      value: ''
    }
  }
}
</script>

<style>
</style>
