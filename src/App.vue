<template>
  <h1>app</h1>
  <p>name：{{name}}</p>
  <button @click="sayHello">say</button>
  <br>
  <button @click="changeName">change</button>
</template>

<script>
// import {h} from 'vue'
import {ref} from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    // 数据
    let name =ref('clara')

    // 方法
    function sayHello() {
      console.log(`Hi，${name}`)
    }
    // 修改名字
    function changeName() {
      console.log(name)
      name.value = 'aa'
    }

    // 返回对象（常用）
    return {
      name,
      sayHello,
      changeName
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
