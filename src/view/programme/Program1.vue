<template>
  <div class="program-back" v-if="isShowProgram" @mousemove.prevent="" @touchmove.prevent="1">
    <div class="program-showLog ">
      <ProgramCode1></ProgramCode1>
      <div class="program-title">
        <div class="program-close" @click="closThis()" @touchstart="closThis()">×</div>
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
      this.$router.push({name: 'Programme'})
    }
  }
}
</script>
<style>

</style>
<style scoped>
</style>
