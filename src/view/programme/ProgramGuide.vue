<template>
  <div>
    <router-link :to="{name: 'Program4'}" tag="div" class="guide-body">
      <ImgCard :designImgData="campus4"></ImgCard>
    </router-link>
    <router-link :to="{name: 'Program3'}" tag="div" class="guide-body">
      <ImgCard :designImgData="campus3"></ImgCard>
    </router-link>
    <router-link :to="{name: 'Program2'}" tag="div" class="guide-body">
      <ImgCard :designImgData="campus2"></ImgCard>
    </router-link>
    <router-link :to="{name: 'Program1'}" tag="div" class="guide-body">
      <ImgCard :designImgData="campus1"></ImgCard>
    </router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ImgCard from '@/tool/ImgCard'
let campus4 = {
  date: '我把windows的3Dviewer的小蜜蜂模型导出来了，在这里观看效果一样',
  src: './static/program/program4/1.jpg',
  info: 'windows模型Bee',
  nameId: 'ProgramCode4'
}
let campus3 = {
  date: '这是我在vue中使用threejs的第二个例子，在这个例子中，我尝试导入外部模型，vue.js和three.js结合开发很方便，很快捷',
  src: './static/program/program3/1.jpg',
  info: 'three官网例子和vue结合',
  nameId: 'ProgramCode3'
}
let campus2 = {
  date: '一直在做家具和家居，非常感谢张哥，让我对模型更加了解，在这个例子中，我尝试导入外部模型，vue.js和three.js结合开发很方便，很快捷',
  src: './static/program/program2/1.jpg',
  info: '无材质户型',
  nameId: 'ProgramCode2'
}
let campus1 = {
  date: '这是我在vue中使用threejs的第一个例子，在这个例子中，我尝试把three.js在vue.js中使用',
  src: './static/program/program1/1.jpg',
  info: 'three.js立方体',
  nameId: 'ProgramCode1'
}
export default {
  name: 'ProgramGuide',
  components: { ImgCard },
  data () {
    return {
      campus1,
      campus2,
      campus3,
      campus4
    }
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
  }
}
</script>

<style scoped>
  .guide-body{
    width: 300px;
    height: 400px;
    margin: 30px;
    display: block;
    float: left;
  }
</style>
