<!--此处使用query查询访问项目编号programid例如：-->
<!--http://localhost:8080/#/SingleDisplay?programId=ProgramCode1-->
<template>
    <div @mousemove.prevent="" @touchmove.prevent="">
      <component :is="showPart"></component>
      <GoToProgram></GoToProgram>
    </div>
</template>

<script>
let GoToProgram = () => { // 引入导航组件
  return import('@/tool/GoToProgram')
}

let ProgramCode7 = () => { // 引入导航组件
  return import('@/view/programme/ProgramCode7')
}
let ProgramCode6 = () => { // 引入导航组件
  return import('@/view/programme/ProgramCode6')
}
let ProgramCode5 = () => { // 引入导航组件
  return import('@/view/programme/ProgramCode5')
}
let ProgramCode4 = () => { // 引入导航组件
  return import('@/view/programme/ProgramCode4')
}
let ProgramCode3 = () => { // 引入导航组件
  return import('@/view/programme/ProgramCode3')
}
let ProgramCode2 = () => { // 引入导航组件
  return import('@/view/programme/ProgramCode2')
}
let ProgramCode1 = () => { // 引入导航组件
  return import('@/view/programme/ProgramCode1')
}

export default {
  name: 'SingleDisplay',
  data () {
    return {
      showPart: null
    }
  },
  components: {
    GoToProgram,
    ProgramCode1,
    ProgramCode2,
    ProgramCode3,
    ProgramCode4,
    ProgramCode5,
    ProgramCode6,
    ProgramCode7
  },
  methods: {
    alertTip () {
      this.$notify({
        title: '友情提示',
        message: '编程最适合在PC端展示，移动端效果不佳！',
        type: 'warning',
        position: 'top-left'
      })
    }
  },
  mounted () {
    this.alertTip()
    this.showPart = (this.$route.query && this.$route.query.programId) ? this.$route.query.programId : ProgramCode1
  }
}
</script>

<style scoped>

</style>
