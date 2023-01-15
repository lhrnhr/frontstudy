<template>
  <div>
    <h1>Object初学</h1>
    <h2>对象大致的类型</h2>
      <li>内建对象,ES标准中定义的，比如MAth、Object</li>
      <li>宿主对象,JS运行环境提供的，主要是指浏览器中的，比如console、document</li>
      <li>自定义对象,开发人员自己创建</li>
      <el-button @click="test1">测试1</el-button>
      <li>读取对象中没有的属性，不会报错，而是返回undefined。使用[]读取对象的属性值，更加灵活，可以传入变量，读取对应的属性值</li>
      <li>检查对象中是否含有某属性，使用in，比如'name' in obj</li>
  </div>
</template>

<script>
export default {
  name: 'objectBegin',
  data () {
    return {

    }
  },
  methods: {
    test1 () {
      // 删除对象的属性使用delete
      var obj = {name: 'lhr', age: 25, 123: 'hhh'}
      console.log('', obj.name)
      console.log('name' in obj)
      alert(obj['123'])
    }
  }
}
</script>

<style>

</style>
