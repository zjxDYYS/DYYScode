<template>
  <div>
    <div class="Nave-bg">
      <div class= "Nave-nav">
        <div class="Nave-box">
          <ul>
            <router-link :to= 'Home' exact event="click" tag="li" active-class="Nave-nave-active" class=" = Nave-nave-li Nave-nave-li-size">
            <img src="../assets/img/nave/logo.png" class="Nave-nav-img Nave-home-img">
            <span class="Nave-text">主页</span>
            </router-link>
            <router-link :to= "Cg" tag="li" active-class="Nave-nave-active" class=" = Nave-nave-li Nave-nave-li-size">
              <img src="../assets/img/nave/cg.png"  class="Nave-nav-img Nave-other-img">
            <span class="Nave-text">
            CG
            </span>
            </router-link>
            <router-link :to= "Drawing" tag="li" active-class="Nave-nave-active" class=" = Nave-nave-li Nave-nave-li-size">
            <img src="../assets/img/nave/drawing.png"  class="Nave-nav-img Nave-other-img">
            <span class="Nave-text">
            绘画
            </span>
            </router-link>
            <!--<router-link :to= "User" tag="li" active-class="Nave-nave-active" class=" = Nave-nave-li Nave-nave-li-size">
            <span class="Nave-text">
              用户
            </span>
            </router-link>-->
            <router-link :to= "Programme" tag="li" active-class="Nave-nave-active" class=" = Nave-nave-li Nave-nave-li-size">
            <img src="../assets/img/nave/programme.png"  class="Nave-nav-img Nave-other-img">
            <span class="Nave-text">
            编程
            </span>
            </router-link>
            <router-link :to= "Document" tag="li" active-class="Nave-nave-active" class=" = Nave-nave-li Nave-nave-li-size">
            <img src="../assets/img/nave/document.png"  class="Nave-nav-img Nave-other-img">
            <span class="Nave-text">
            文案
            </span>
            </router-link>
            <router-link :to= "About" tag="li" active-class="Nave-nave-active" class=" = Nave-nave-li Nave-nave-li-size">
            <img src="../assets/img/nave/icon-about.png"  class="Nave-nav-img Nave-other-img">
            <span class="Nave-text">
            关于
            </span>
            </router-link>
            <router-link :to= "Management" tag="li" active-class="Nave-nave-active" class=" = Nave-nave-li Nave-nave-li-size">
            <img src="../assets/img/nave/management.png"  class="Nave-nav-img Nave-other-img">
            <span class="Nave-text">
            后台
            </span>
            </router-link>
            </ul>
        </div>
        <img src="../assets/img/nave/bg_nav.png" class="Nave-bg-img">
      </div>
      <div class="Nave-header">
        <img v-if="isLogin" src="../assets/img/nave/profile.jpg" @click="clickProfile"  width="40" height="40" class="Nave-header-img" >
        <router-link v-if="!isLogin" :to= "Login" tag="li" active-class="" class="Nave-header-li">
        <span>
          登录
        </span>
        </router-link>
        <li v-else-if="isLogin && isShowLogOut" @click="logOut" class="Nave-header-li Nave-log-out">
        <span>
          退出
        </span>
        </li>

      </div>

      <transition :name="actionName">
        <router-view class="Nave-show"></router-view>
      </transition>
      <!--<router-view name="slider" class="Nave-show"></router-view>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nave',
  data () {
    return {
      isLogin: false,
      isShowLogOut: false, // 是否显示退出按钮
      actionName: 'leftIntoCenter', // 组件进入移出时候使用的动画名称
      Home: '/',
      Cg: '/Cg',
      Drawing: '/Drawing',
      Document: '/Document',
      About: '/About',
      User: '/User',
      Programme: '/Programme',
      Management: '/Management',
      Login: '/Login'
    }
  },
  created () {
    this.changeLogState() // 更改登录状态
  },
  watch: {
    $route (to, form) {
      console.log('当前目标导航下标：')
      console.log(to.meta.index)
      console.log('已经离开目标导航下标：')
      console.log(form.meta.index)
      let toIndex = to.meta.index
      let formIndex = form.meta.index
      if (toIndex < formIndex) { // 往左边移动使用右边移入中心动画
        this.actionName = 'rightIntoCenter'
      } else { // 往右边移动使用左边移入中心动画
        this.actionName = 'leftIntoCenter'
      }
      this.changeLogState() // 更改登录状态
    }
  },
  methods: {
    changeLogState () { // 更改登录状态
      let info = this.$local.fetch('DYYS')
      if (info && info.login) {
        this.isLogin = info.login
      }
    },
    clickProfile () {
      this.isShowLogOut = !this.isShowLogOut
    },
    logOut () {
      console.log(this.$local)
      this.$local.save('DYYS', null)
      this.isLogin = false
      this.isShowLogOut = false
      this.$router.push('/')// 跳转首页
    }
  }
}
</script>

<style scoped>
</style>
