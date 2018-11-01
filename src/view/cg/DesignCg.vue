<template>
    <div>
    <ImgShowBox :designImgData="designImgData"></ImgShowBox>
    </div>
</template>

<script>
import ImgShowBox from '@/tool/ImgShowBox'
let baseUrl = './static/cg/design/'
let preview = baseUrl + 'preview/'
let works = baseUrl + 'works/'
let designImgData = [
  {
    name: '断云依水',
    preview: preview + '1.jpg',
    img: works + '1.jpg',
    isShowImgInfo: false,
    introduce: '18年的年计划包含了给自己设计一个角色，这个角色我酝酿了好久，就目前而言，终于觉得这个比较满意'
  },
  {
    name: '断云依水-工作',
    preview: preview + '2.jpg',
    img: works + '2.jpg',
    isShowImgInfo: false,
    introduce: '这是为了给自己设计一个工作的角色，希望设计得普通、得体、干练'
  },
  {
    name: '断云依水',
    preview: preview + '3.jpg',
    img: works + '3.jpg',
    isShowImgInfo: false,
    introduce: '16年做主题的时候，突然想到给自己做个有猫咪的角色'
  },
  {
    name: '断云依水网页logo',
    preview: preview + '4.jpg',
    img: works + '4.jpg',
    isShowImgInfo: false,
    introduce: '这个网页LOGO目前为止还不满意，有空再设计，好的idea是需要时间酝酿的'
  },
  {
    name: '断云依水星辰字体',
    preview: preview + '5.jpg',
    img: works + '5.jpg',
    isShowImgInfo: false,
    introduce: '这是看到别人这么做的字体很漂亮，就学着做了一个DYYS字体'
  },
  {
    name: '角色设计临摹',
    preview: preview + '6.jpg',
    img: works + '6.jpg',
    isShowImgInfo: false,
    introduce: '角色设计临摹'
  },
  {
    name: '角色设计临摹',
    preview: preview + '7.jpg',
    img: works + '7.jpg',
    isShowImgInfo: false,
    introduce: '角色设计临摹'
  },
  {
    name: '懒虫起床',
    preview: preview + '8.jpg',
    img: works + '8.jpg',
    isShowImgInfo: false,
    introduce: '16年主题设计的时候创建的角色'
  },
  {
    name: '懒虫起床',
    preview: preview + '9.jpg',
    img: works + '9.jpg',
    isShowImgInfo: false,
    introduce: '16年主题设计的时候创建的角色'
  },
  {
    name: '懒虫起床',
    preview: preview + '10.jpg',
    img: works + '10.jpg',
    isShowImgInfo: false,
    introduce: '16年主题设计的时候创建的角色'
  },
  {
    name: '',
    preview: preview + '11.jpg',
    img: works + '11.jpg',
    isShowImgInfo: false,
    introduce: '16年主题设计的时候创建的角色'
  },
  {
    name: '我的九公主',
    preview: preview + '12.jpg',
    img: works + '12.jpg',
    isShowImgInfo: false,
    introduce: '17年五一生日礼物,当时给我的感觉就是要设计一个古灵精怪的自然呆天然萌的好学生'
  }
]
export default {
  name: 'DesignCg',
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
