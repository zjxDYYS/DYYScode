<template>
  <div>
    <div class="Nave-2-nav">
      <div class="Nave-2-box">
        <ul>
          <router-link :to="{name: 'Drawing'}" exact tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>素描</span>
          </router-link>
          <router-link :to="{name: 'OilPainting'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>油画</span>
          </router-link>
          <router-link :to="{name: 'Gouache'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>水粉</span>
          </router-link>
          <router-link :to="{name: 'MarkerPainting'}" tag="li" class=" = Nave-nave-li Nave-2-nav-li Nave-text">
            <span>马克笔</span>
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
  name: 'Drawing'
}
</script>

<style scoped>

</style>
