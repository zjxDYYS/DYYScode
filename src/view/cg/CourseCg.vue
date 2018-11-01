<template>
  <div>
    <ImgShowBox :designImgData="designImgData"></ImgShowBox>
  </div>
</template>

<script>
import ImgShowBox from '@/tool/ImgShowBox'
let baseUrl = './static/cg/course/'
let preview = baseUrl + 'preview/'
let works = baseUrl + 'works/'
let designImgData = [
  {
    name: '钢铁侠照片写生',
    preview: preview + '1.jpg',
    img: works + '1.jpg',
    isShowImgInfo: false,
    introduce: '钢铁侠照片写生步骤'
  },
  {
    name: '断云依水角色设计',
    preview: preview + '2.jpg',
    img: works + '2.jpg',
    isShowImgInfo: false,
    introduce: '断云依水角色设计步骤'
  },
  {
    name: '可爱女生',
    preview: preview + '3.jpg',
    img: works + '3.jpg',
    isShowImgInfo: false,
    introduce: '可爱女生绘画步骤'
  },
  {
    name: '摩托速写',
    preview: preview + '4.jpg',
    img: works + '4.jpg',
    isShowImgInfo: false,
    introduce: '摩托速写步骤'
  },
  {
    name: '老人头像照片写生',
    preview: preview + '5.jpg',
    img: works + '5.jpg',
    isShowImgInfo: false,
    introduce: '老人头像照片写生步骤'
  },
  {
    name: '鼻子特训',
    preview: preview + '6.jpg',
    img: works + '6.jpg',
    isShowImgInfo: false,
    introduce: '鼻子特训步骤'
  },
  {
    name: '女生眼睛特训',
    preview: preview + '7.jpg',
    img: works + '7.jpg',
    isShowImgInfo: false,
    introduce: '女生眼睛特训步骤'
  },
  {
    name: '男生眼睛特训',
    preview: preview + '8.jpg',
    img: works + '8.jpg',
    isShowImgInfo: false,
    introduce: '男生眼睛特训步骤'
  }
]
export default {
  name: 'CourseCg',
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
