<template>
  <div id="Program1">
    <el-dialog
      title="代码"
      :visible.sync="isShowProgram"
      width="90vw"
      top = "5vh"
      ref="dialogItem"
      @close="isShowProgram = false"
      :before-close="handleClose">
      <ProgramCode2></ProgramCode2>
    </el-dialog>
  </div>
</template>

<script>
import ProgramCode2 from '@/view/programme/ProgramCode3'
export default {
  name: 'Program3',
  components: { ProgramCode2 },
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
    },
    close () { // 关闭移动适配
      var dialogItem = this.$refs.dialogItem
      console.log(dialogItem)
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
