<template>
  <div id="app">
    <component :is="showPart"></component>
  </div>
</template>

<script>
let Nave = () => { // 引入导航组件
  return import('@/view/Nave')
}
let SingleDisplay = () => { // 引入导航组件
  return import('@/components/SingleDisplay')
}

export default {
  name: 'App',
  data () {
    return {
      showPart: Nave
    }
  },
  components: {
    Nave,
    SingleDisplay
  },
  watch: {
    $route (to, form) {
      console.log('APP页面')
      let type = to.meta.type
      if (type === 'SingleDisplay') { // 如果是菜单等现实Nave
        this.showPart = SingleDisplay
      } else { // 往如果是单页面展示效果
        this.showPart = Nave
      }
    }
  }
}
</script>
<style>

</style>
