<template>
  <div id="app">
    <Nave></Nave>
  </div>
</template>

<script>
let Nave = () => { // 引入导航组件
  return import('@/view/Nave')
}
export default {
  name: 'App',
  components: {
    Nave
  }
}
</script>
<style>

</style>
