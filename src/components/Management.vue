<template>
  <div>
    <div class="Nave-2-nav">
      <div class="Nave-2-box">
        <ul>
          <router-link :to="{name: 'MyProgect'}" event="click" exact tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>项目</span>
          </router-link>
          <router-link :to="{name: 'BackDoc'}" event="click" exact tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>文档</span>
          </router-link>
        </ul>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Management',
  created () {

  }
}
</script>

<style scoped>
</style>
