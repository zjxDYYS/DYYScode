<template>
  <div>
    <ImgShowBox :designImgData="designImgData"></ImgShowBox>
  </div>
</template>

<script>
import ImgShowBox from '@/tool/ImgShowBox'
let baseUrl = './static/drawing/sketch/'
let preview = baseUrl + 'preview/'
let works = baseUrl + 'works/'
let designImgData = [
  {
    name: '杰克船长',
    preview: preview + '1.jpg',
    img: works + '1.jpg',
    isShowImgInfo: false,
    introduce: '这是我15年8月的素描作品，画了很久，用了很多心思'
  },
  {
    name: '临摹',
    preview: preview + '2.jpg',
    img: works + '2.jpg',
    isShowImgInfo: false,
    introduce: '这是我15年3月学素描时候的临摹'
  },
  {
    name: '临摹',
    preview: preview + '3.jpg',
    img: works + '3.jpg',
    isShowImgInfo: false,
    introduce: '这是我15年3月学素描时候的临摹'
  },
  {
    name: '临摹',
    preview: preview + '4.jpg',
    img: works + '4.jpg',
    isShowImgInfo: false,
    introduce: '这是我15年学素描时候的第一张人文头像临摹'
  },
  {
    name: '火影',
    preview: preview + '5.jpg',
    img: works + '5.jpg',
    isShowImgInfo: false,
    introduce: '15年学了素描之后，又结合日漫火影做了一些尝试，让素描也有动漫的风格'
  },
  {
    name: '蘑菇树',
    preview: preview + '6.jpg',
    img: works + '6.jpg',
    isShowImgInfo: false,
    introduce: '17年9月来到深圳工作，空闲画的，针管笔画，尝试一下线条，越是简单的东西越难以把握'
  },
  {
    name: '思维',
    preview: preview + '7.jpg',
    img: works + '7.jpg',
    isShowImgInfo: false,
    introduce: '17年9月来到深圳工作，空闲画的，针管笔画，有的时候我喜欢奇思妙想，茫无天际的想法在一张纸上总是难以表达'
  }
]
export default {
  name: 'Sketch',
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
