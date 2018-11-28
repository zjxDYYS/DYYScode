<template>
  <div class="program-back" v-if="isShowProgram" @mousemove.prevent="" @touchmove.prevent="1">
    <div class="program-showLog ">
      <ProgramCode7></ProgramCode7>
      <div class="program-title">
        <div class="program-close" @click="closThis()" @touchstart="closThis()">×</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgramCode7 from '@/view/programme/ProgramCode7'
export default {
  name: 'Program7',
  components: { ProgramCode7 },
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
    },
    closThis () { // 关闭此页面
      this.$router.push({name: 'Programme'})
    }
  }
}
</script>
<style>
</style>
<style scoped>

</style>
