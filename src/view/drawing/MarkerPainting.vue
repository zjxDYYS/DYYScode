<template>
  <div>
    <ImgShowBox :designImgData="designImgData"></ImgShowBox>
  </div>
</template>

<script>
import ImgShowBox from '@/tool/ImgShowBox'
let baseUrl = './static/drawing/markerPainting/'
let preview = baseUrl + 'preview/'
let works = baseUrl + 'works/'
let designImgData = [
  {
    name: '提莫',
    preview: preview + '1.jpg',
    img: works + '1.jpg',
    isShowImgInfo: false,
    introduce: '特别喜欢提莫，老是放蘑菇，马克笔那就先画它吧，希望我的大学朋友好好珍惜这幅画吧'
  },
  {
    name: '凯南',
    preview: preview + '2.jpg',
    img: works + '2.jpg',
    isShowImgInfo: false,
    introduce: '大学买了一套马克笔，然后就迫不及待的画了'
  },
  {
    name: '酒桶',
    preview: preview + '3.jpg',
    img: works + '3.jpg',
    isShowImgInfo: false,
    introduce: '感觉马克笔掌握起来还是比较容易变化也不多，适合刚刚开始学画的朋友'
  }
]
export default {
  name: 'MarkerPainting',
  components: { ImgShowBox },
  data () {
    return {
      designImgData
    }
  }
}
</script>

<style scoped>

</style>
