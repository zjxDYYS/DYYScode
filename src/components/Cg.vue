<template>
  <div>
    <div class="Nave-2-nav">
      <div class="Nave-2-box">
        <ul>
          <router-link :to="{name: 'Cg'}" exact tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>插画</span>
          </router-link>
          <router-link :to="{name: 'DesignCg'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>设计</span>
          </router-link>
          <router-link :to="{name: 'CourseCg'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>教程</span>
          </router-link>
          <router-link :to="{name: 'Portrait'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>人像</span>
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
  name: 'Cg'
}
</script>

<style scoped>
</style>
