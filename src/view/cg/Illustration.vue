<template>
  <div>
    <ImgShowBox :designImgData="designImgData"></ImgShowBox>
  </div>
</template>

<script>
import ImgShowBox from '@/tool/ImgShowBox'
let baseUrl = './static/cg/illustration/'
let preview = baseUrl + 'preview/'
let works = baseUrl + 'works/'
let designImgData = [
  {
    name: '命运的抉择',
    preview: preview + '1.jpg',
    img: works + '1.jpg',
    isShowImgInfo: false,
    introduce: '18年五一生日礼物，命运是掌握在自己手里，还是自己掌握在命运手里？'
  },
  {
    name: '三笠',
    preview: preview + '2.jpg',
    img: works + '2.jpg',
    isShowImgInfo: false,
    introduce: '有段时间很喜欢《进击的巨人》的女主，无论面对什么，都有勇气傲视苍穹'
  },
  {
    name: '草帽鱼',
    preview: preview + '3.jpg',
    img: works + '3.jpg',
    isShowImgInfo: false,
    introduce: '17年做手机主题时候想到的插图，特别喜欢这个，好有意思'
  },
  {
    name: '',
    preview: preview + '4.jpg',
    img: works + '4.jpg',
    isShowImgInfo: false,
    introduce: '喜欢简单，明快的配色和线条'
  },
  {
    name: '可爱女生',
    preview: preview + '5.jpg',
    img: works + '5.jpg',
    isShowImgInfo: false,
    introduce: '一天看到一张图很有感觉，就半临摹了，万圣节就可以用了'
  },
  {
    name: '海风',
    preview: preview + '6.jpg',
    img: works + '6.jpg',
    isShowImgInfo: false,
    introduce: '很想表达那种雾气阳光交织的感觉，好想自由自在，吹着海风'
  },
  {
    name: '一叶化蝶',
    preview: preview + '7.jpg',
    img: works + '7.jpg',
    isShowImgInfo: false,
    introduce: '是蝶？还是叶？大千世界，水月镜花，一花一世界，一叶一菩提，是叶，也是蝶'
  },
  {
    name: '夜醉',
    preview: preview + '8.jpg',
    img: works + '8.jpg',
    isShowImgInfo: false,
    introduce: '百转千方疑似梦，一杯冰酒醉人生，这是18年我的第一幅画'
  },
  {
    name: '仰望',
    preview: preview + '9.jpg',
    img: works + '9.jpg',
    isShowImgInfo: false,
    introduce: '毕业之后一直在城市工作，又是程序员，有的时候真的好怀念小时候的农村生活，自由，清爽'
  },
  {
    name: '猫，临摹',
    preview: preview + '10.jpg',
    img: works + '10.jpg',
    isShowImgInfo: false,
    introduce: '我特别喜欢猫，有天看到这张图，好喜欢，就临摹了下来'
  },
  {
    name: '',
    preview: preview + '11.jpg',
    img: works + '11.jpg',
    isShowImgInfo: false,
    introduce: '17年做主题的时候做的一张壁纸'
  },
  {
    name: '狐妖小红娘',
    preview: preview + '12.jpg',
    img: works + '12.jpg',
    isShowImgInfo: false,
    introduce: '萌萌哒，好喜欢'
  }
]
export default {
  name: 'Illustration',
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
