<!--图片展示盒子
iterm = {
name,
isShowImgInfo,
introduce
preview
img
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
      <div v-show="isShowImg" class="img-show-back">
        <span class="img-close" @click="closeImgShow">×</span>
        <img class="" :src="showImgSrc" width="80%" height="auto">
      </div>
    </div>
</template>

<script>
export default {
  name: 'ImgShowBox',
  props: ['designImgData'],
  data () {
    return {
      isShowImg: false,
      showImgSrc: '',
      imgData: {}
    }
  },
  created () {
    this.imgData = this.designImgData
  },
  methods: {
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
  /*图片展示样式*/
  .img-box{
    float: left;
    font-size: 14px;
    margin: 10px 0px 0px 100px;
    display: block;
    height: 240px;
    width: 200px;
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
    height: 200px;
    width: 200px;
    text-align: center;
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
    padding-top: 50px;
    background: #585858;
    opacity: 1;
    width: 100%;
    line-height: 150%;
    height: 500%;
    overflow: auto;
    position: absolute;
    z-index: 100;
  }
  .img-close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
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
