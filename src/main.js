// vue3引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数（构造函数需要通过new调用，工厂函数不需要new可以直接调用）
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// 创建应用实例对象——app（类似于之前Vue2中的vm,但是app比vm更轻）
// const app = createApp(App)
// app.mount('#app') // mount挂载

// 卸载
// setTimeout(() => {
//   app.unmount('#app')
// }, 2000)

// vue2写法
// const vm = new Vue({
//   render: h => h(App)
// })
// vm.$mount('#app')
