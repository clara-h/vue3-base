<template>
  <h1>app</h1>
  <p>name：{{name}}</p>
  <button @click="sayHello">say</button>
</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    // 数据
    let name = 'clara'

    // 方法
    function sayHello() {
      console.log(`Hi，${name}`)
    }

    // 返回对象（常用）
    return {
      name,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return () => {return h('h1', 'clara')}
    // return () => h('h1', 'clara')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
