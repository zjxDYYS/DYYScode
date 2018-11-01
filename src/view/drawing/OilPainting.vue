<template>
  <div>
    <ImgShowBox :designImgData="designImgData"></ImgShowBox>
  </div>
</template>

<script>
import ImgShowBox from '@/tool/ImgShowBox'
let baseUrl = './static/drawing/oilPainting/'
let preview = baseUrl + 'preview/'
let works = baseUrl + 'works/'
let designImgData = [
  {
    name: '惑',
    preview: preview + '1.jpg',
    img: works + '1.jpg',
    isShowImgInfo: false,
    introduce: '这是16年8月，当时刚毕业工作两三个月，满腔热血，看到阳光透过窗户洒在书本上，顿时有了灵感'
  },
  {
    name: '危巢',
    preview: preview + '2.jpg',
    img: works + '2.jpg',
    isShowImgInfo: false,
    introduce: '这是16年10月国庆期间的作品，记得徐悲鸿曾经给新居命名《危巢》，每个人难道不应该居安思危吗'
  },
  {
    name: '葡萄',
    preview: preview + '3.jpg',
    img: works + '3.jpg',
    isShowImgInfo: false,
    introduce: '古典油画的美一直吸引着我，只可惜我不得其法万一'
  },
  {
    name: '猫咪',
    preview: preview + '4.jpg',
    img: works + '4.jpg',
    isShowImgInfo: false,
    introduce: '了解我的人都知道我非常喜欢猫咪'
  },
  {
    name: '白玫瑰',
    preview: preview + '5.jpg',
    img: works + '5.jpg',
    isShowImgInfo: false,
    introduce: '致广大而尽精微，极高明而道中庸，绘画也好，做人也罢，学问大着呢，继续前行'
  }
]
export default {
  name: 'OilPainting',
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
