<template>
    <div class="backProgram">
      <img src="../assets/img/nave/profile.jpg" @click="click" @touchstart="click" width="40" height="40" class="Nave-header-img" >
      <div class="text" @click="click" @touchstart="click">更多案例</div>
    </div>
</template>

<script>
export default {
  name: 'GoToProgram',
  methods: {
    click () {
      this.$router.push('/Programme')// 跳转代码
    }
  }
}
</script>

<style scoped>
  .backProgram{
    z-index: 1;
    background: #1c1c1c00;
    width: 120px;
    height: 44px;
    position: absolute;
    color: black;
    right: 0;
    top: 0;
    text-align: left;
    margin: 10px;
    cursor: pointer;
  }
  .text{
    margin-top: 10px;
    width: 70px;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
