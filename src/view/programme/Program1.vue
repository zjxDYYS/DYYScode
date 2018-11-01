<template>
  <div id="Program1">
    <el-dialog
      title="代码"
      :visible.sync="isShowProgram"
      width="90vw"
      top = "5vh"
      :before-close="handleClose">
        <ProgramCode1></ProgramCode1>
    </el-dialog>
  </div>
</template>

<script>
import ProgramCode1 from '@/view/programme/ProgramCode1'
export default {
  name: 'Program1',
  components: { ProgramCode1 },
  data () {
    return {
      isShowProgram: true
    }
  },
  methods: {
    showProgram () {
      this.isShowProgram = true
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
<style>
  #Program1 .el-dialog{
    height: 90vh;
  }
  .el-message-box{
    width: 240px;
  }
  #Program1 button[type="button"]{
    z-index: 1000;
  }
</style>
<style scoped>

</style>
