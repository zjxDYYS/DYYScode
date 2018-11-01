<!--使用element的图片卡片插件-->
<!--param = {
src
info
date
}-->
<template>
    <div>
      <el-card :body-style="{ padding: '0px' }">
        <img :src="imgData.src" class="image">
        <div style="padding: 14px;">
          <span>{{imgData.info}}</span>
          <div class="bottom clearfix">
            <time class="time">{{imgData.date}}</time>
            <el-button type="text" class="button" icon="el-icon-info"></el-button>
          </div>
        </div>
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'ImgCard',
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
  }
}
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
