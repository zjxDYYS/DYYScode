<template>
  <div class="loading-div" v-if="showLoadingSign">
    <div class="loading-percnet-text">{{percent + '%'}}</div>

    <!--<van-loading color="#5E83AE" size="75px" class="loading-sign"/>-->
    <el-progress type="circle" :percentage="50" status=""></el-progress>
    <div class="loading-text">努力加载中{{loadingText}}<!--.{{percent}}%--></div>

  </div>
</template>

<script>
export default {
  name: 'LoadProgress',
  data () {
    return {
      showLoadingSign: false,
      loadingText: '...',
      percent: 0
    }
  },
  methods: {
    onProgress (xhr) { // 模型加载百分比 加载盒子
      if (xhr.lengthComputable) {
        this.percent = (xhr.loaded / xhr.total) * 100
      } else {
        this.percent = parseInt(xhr.target.getResponseHeader('Content-Length'), 10)
      }
      if (this.loadingText.length >= 3) {
        this.loadingText = ''
      } else {
        this.loadingText += '.'
      }
    }
  }
}
</script>

<style scoped>
  .loading-div{
    position: absolute;
    width: 150px;
    height: 80px;
    top: 45%;
    left: 50%;
    margin: calc(-80px / 2) 0 0 calc(-100px / 2);
    color: #409eff;
    text-align: center;
    font-size: 25px;
    /*background-color: grey;*/
  }
  .loading-percnet-text{
    display: none;
  }
  .loading-sign{
    position: absolute;
    margin: 0 calc(-75px / 2) 0 0;
    right: 50%;
  }
  .loading-text{
    margin-top: 80px;
  }
</style>
