<template>
  <div class="back" v-if="isShowProgram" @mousemove="false" @touchmove="false">
    <div class="showLog">
      <ProgramCode1></ProgramCode1>
      <div class="title">
        <div class="close" @click="closThis()" @touchstart="closThis()">×</div>
        产品选择
      </div>
    </div>
  </div>
</template>

<script>
import ProgramCode1 from '@/view/programme/ProgramCode1'
export default {
  name: 'Program1',
  props: ['visible'],
  components: { ProgramCode1 },
  data () {
    return {
      isShowProgram: this.visible
    }
  },
  methods: {
    closThis () { // 关闭此页面
      // this.isShowProgram = false
      // this.$router.go(-1) // 返回上一层
      this.$router.push({name: 'Programme'})
    }
  }
}
</script>
<style>

</style>
<style scoped>
  .close{
    right: 20px;
    position: absolute;
    font-size: 40px;
    color: #f8f8f8;
  }
  .title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
  }
  .back{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    width: auto;
    height: auto;
    z-index: 10;
    background: #00000085;
  }
  .showLog {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -45vw;
    margin-top: -45vh;
    width: 90vw;
    z-index: 2;
    color: black;
    height: 90vh;
    background: #ffffff;
    border-radius: 5px;
    z-index: 2001;
  }
</style>
