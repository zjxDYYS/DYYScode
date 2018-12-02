<template>
  <Nave></Nave>
</template>

<script>
let Nave = () => { // 引入导航组件
  return import('@/view/Nave')
}
export default {
  name: 'Index',
  components: {
    Nave
  }
}
</script>

<style scoped>

</style>
