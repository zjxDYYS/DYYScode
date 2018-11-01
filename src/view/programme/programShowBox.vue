<!--弹出程序的页面-->
<!--
iterm = {
name,
isShowImgInfo,
introduce
isShowImgInfo,
introduce
preview
programName// 项目组件名字
}-->
<template>
  <div>
    <div v-for="(item, key, index)  in imgData" :key="index" class="img-box" @click="clickImgBox(item)" @mouseenter="enterImgBox(item)" @mouseleave="outerImgBox(item)" @touchstart="enterImgBox(item)" @touchend="outerImgBox(item)">
      <div class="img-name">
        {{ item.name }}
      </div>
      <img class="img-preview" :class="{ 'img-preview-hover': item.isShowImgInfo }" :src="item.preview">
      <div v-show="item.isShowImgInfo" class="img-preview-info ">{{ item.introduce }}</div>
    </div>
    <div v-show="isShowImg" class="img-show-back" ref = "programContainter">
      <div>
        <span class="img-close" @click="closeImgShow">×</span>
        <div class="containPragram" ref = "programContainterDiv">
          <component :is="icurrentView"></component>
          <button @click="handleChangeView('A')">A</button>
          <button @click="handleChangeView('B')">B</button>
          <button @click="handleChangeView('C')">C</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgShowBox',
  props: ['designImgData'],
  components: {
    comA: {
      template: `<div>组件A</div> `
    },
    comB: {
      template: `<div>组件B</div>`
    },
    ProgramExample1: {
      template: `<div>组件C</div>`
    }
  },
  data () {
    return {
      isShowImg: false,
      showImgSrc: '',
      imgData: {}, // 存储预览图片
      boxHeight: '', // 屏幕可视化区域高度
      currentView: 'comA'// 动态组件
    }
  },
  created () {
    this.imgData = this.designImgData
    this.handleChangeView('C') // 动态组件
  },
  mounted () {
    this.boxHeight = `${document.documentElement.clientHeight}`// 获取浏览器可视区域高度document.body.clientWidth;
    // console.log(self.clientHeight)
    window.onresize = function temp () {
      this.boxHeight = `${document.documentElement.clientHeight}`
    }
  },
  watch: {
    boxHeight: function () { // 如果 `clientHeight` 发生改变，这个函数就会运行
      this.changeFixed(this.boxHeight)
    }
  },
  methods: {
    changeFixed (clientHeight) { // 动态修改样式
      console.log(clientHeight)
      this.$refs.programContainter.style.height = clientHeight + 'px'
      this.$refs.programContainterDiv.style.height = 0.9 * clientHeight + 'px'
    },
    handleChangeView (component) { // 动态组件
      this.currentView = 'com' + component
    },
    enterImgBox (item) {
      item.isShowImgInfo = true
      console.log(item)
    },
    clickImgBox (item) {
      this.isShowImg = true
      this.showImgSrc = item.img
      console.log(item)
    },
    outerImgBox (item) {
      item.isShowImgInfo = false
      console.log(item)
    },
    closeImgShow () {
      this.isShowImg = false
    }
  }
}
</script>

<style scoped>
  .containPragram{
    background: white;
    width: 90%;
    top: 5%;
    left: 5%;
    position: absolute;
    border-radius: 10px;
  }
  /*图片展示样式*/
  .img-box{
    float: left;
    font-size: 14px;
    margin: 10px 0px 0px 65px;
    display: block;
    height: 280px;
    width: 240px;
    text-align: center;
  }
  .img-name{
    height: 40px;
    line-height: 40px;
  }
  .img-preview{
    float: left;
    font-size: 14px;
    display: block;
    height: 240px;
    width: 240px;
    text-align: center
  }
  .img-preview-info{
    height: auto;
    width: inherit;
    position: absolute;
    z-index: 10;
    margin-top: 110px;
    cursor: pointer;
  }
  .img-box:hover,
  .img-box:focus {
    color: #422c0c;
    text-shadow: 0px 1px 0px #e1caae;
    font-weight: bold;
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .img-preview:hover{
    -webkit-filter: grayscale(10%); /* Chrome, Safari, Opera */
    filter: grayscale(10%);
    opacity: 0.3;
  }
  .img-preview-hover{
    -webkit-filter: grayscale(10%); /* Chrome, Safari, Opera */
    filter: grayscale(10%);
    opacity: 0.3;
  }
  .img-show-back{
    top: 0;
    background: #424347bd;
    opacity: 1;
    width: 100%;
    overflow: auto;
    position: absolute;
    z-index: 100;
  }
  .img-close {
    position: absolute;
    top: 0;
    right: 15px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .img-close:hover,
  .img-close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  /*图片展示样式*/
</style>
