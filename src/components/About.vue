<template>
  <div>
    <div class="Nave-2-nav">
      <div class="Nave-2-box">
        <ul>
          <router-link :to="{name: 'About'}" exact tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>简历</span>
          </router-link>
          <router-link :to="{name: 'Study'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>学习</span>
          </router-link>
          <router-link :to="{name: 'Work'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>工作</span>
          </router-link>
          <router-link :to="{name: 'Hobby'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>爱好</span>
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
  name: 'About'
}
</script>

<style scoped>
</style>
