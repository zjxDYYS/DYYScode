<template>
  <div>
    <ImgShowBox :designImgData="designImgData"></ImgShowBox>
  </div>
</template>

<script>
import ImgShowBox from '@/tool/ImgShowBox'
let baseUrl = './static/drawing/gouache/'
let preview = baseUrl + 'preview/'
let works = baseUrl + 'works/'
let designImgData = [
  {
    name: '黑珍珠号',
    preview: preview + '1.jpg',
    img: works + '1.jpg',
    isShowImgInfo: false,
    introduce: '这是我用水粉开始尝试细致的画法，也在尝试一些3D效果的表达，水粉发白很难处理，希望多年之后不会褪色吧'
  },
  {
    name: '我的青春不青涩',
    preview: preview + '2.jpg',
    img: works + '2.jpg',
    isShowImgInfo: false,
    introduce: '这是我给大学画上的句号，我的大学无怨无悔'
  },
  {
    name: '暗夜牡丹',
    preview: preview + '3.jpg',
    img: works + '3.jpg',
    isShowImgInfo: false,
    introduce: '夜里也有最美的风景'
  }
]
export default {
  name: 'Gouache',
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
