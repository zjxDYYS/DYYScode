<template>
  <div>
    <ImgShowBox :designImgData="designImgData"></ImgShowBox>
  </div>
</template>

<script>
import ImgShowBox from '@/tool/ImgShowBox'
let baseUrl = './static/cg/portrait/'
let preview = baseUrl + 'preview/'
let works = baseUrl + 'works/'
let designImgData = [
  {
    name: '钢铁侠照片写生',
    preview: preview + '1.jpg',
    img: works + '1.jpg',
    isShowImgInfo: false,
    introduce: '钢铁侠照片写生'
  },
  {
    name: '赵丽颖照片写生',
    preview: preview + '2.jpg',
    img: works + '2.jpg',
    isShowImgInfo: false,
    introduce: '赵丽颖照片写生'
  },
  {
    name: '女头像创作',
    preview: preview + '3.jpg',
    img: works + '3.jpg',
    isShowImgInfo: false,
    introduce: '女头像创作'
  },
  {
    name: '头像练习',
    preview: preview + '4.jpg',
    img: works + '4.jpg',
    isShowImgInfo: false,
    introduce: '头像练习'
  },
  {
    name: '老人头像写生',
    preview: preview + '5.jpg',
    img: works + '5.jpg',
    isShowImgInfo: false,
    introduce: '老人头像写生'
  },
  {
    name: '女头像速写',
    preview: preview + '6.jpg',
    img: works + '6.jpg',
    isShowImgInfo: false,
    introduce: '女头像速写'
  },
  {
    name: '女头像创作',
    preview: preview + '7.jpg',
    img: works + '7.jpg',
    isShowImgInfo: false,
    introduce: '女头像创作'
  },
  {
    name: '女头像创作',
    preview: preview + '8.jpg',
    img: works + '8.jpg',
    isShowImgInfo: false,
    introduce: '女头像创作'
  },
  {
    name: '女头像速写',
    preview: preview + '9.jpg',
    img: works + '9.jpg',
    isShowImgInfo: false,
    introduce: '女头像速写'
  }
]
export default {
  name: 'Portrait',
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
