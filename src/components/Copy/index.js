import CopyComponent from './Copy.vue'

// 添加install方法
const Copy = {
  install: function (Vue) {
    Vue.component('Copy', CopyComponent)
  }
}

// 导出
export default Copy
