<template>
    <div>
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
let campus3 = {
  date: '这是我在vue中使用threejs的第二个例子，在这个例子中，我尝试导入外部模型，vue.js和three.js结合开发很方便，很快捷',
  src: './static/program/program2/1.jpg',
  info: '无材质户型'
}
let campus2 = {
  date: '这是我在vue中使用threejs的第二个例子，在这个例子中，我尝试导入外部模型，vue.js和three.js结合开发很方便，很快捷',
  src: './static/program/program2/1.jpg',
  info: '无材质户型'
}
let campus1 = {
  date: '这是我在vue中使用threejs的第一个例子，在这个例子中，我尝试把three.js在vue.js中使用',
  src: './static/program/program1/1.jpg',
  info: 'three.js立方体'
}
export default {
  name: 'ProgramGuide',
  components: { ImgCard },
  data () {
    return {
      campus1,
      campus2,
      campus3
    }
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
