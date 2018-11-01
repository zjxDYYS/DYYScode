<template>
    <div>
      <router-link :to="{name: 'ProgramGuide'}" tag="div">
      </router-link>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'Programme',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
