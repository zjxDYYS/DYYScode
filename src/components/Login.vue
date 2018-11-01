<template>
  <div class="Login-back">
    <div class="Login-box padding10px">
      <div class="padding10px">
        <label>登录</label>
      </div>
      <form @submit.prevent="sendLogin" autocomplete="off" >
        <div class="padding10px">
          <input placeholder="请输入用户名" type="text" name="user" ref="userInputName"/>
        </div>
        <div class="padding10px">
          <input placeholder="请输入明码" type="password" name="userPassword" ref="userInputPassword"/>
        </div>
        <div class="Login-btn">
          <input type="button" @click="cancelLogin" value="取消"/>
          <input type="submit" value="一键登入"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  methods: {
    sendLogin () { // 登录
      let userName = this.$refs.userInputName.value
      let userInputPassword = this.$refs.userInputPassword.value
      // console.log(this.$refs)
      // console.log(userName)
      // console.log(userInputPassword)
      if (userName === '断云依水' && userInputPassword === '112244') {
        this.$local.save('DYYS', {
          login: true,
          username: userName,
          userPassword: userInputPassword
        })
        let redirect = this.$route.query.redirect
        if (!redirect) {
          redirect = 'Management'
        }
        console.log(redirect)
        this.$router.push({// 跳转首页
          path: redirect
        })
      } else {
        alert('用户名密码错误，请重新登录，或者联系断云依水')
      }
    },
    cancelLogin () {
      this.$router.push({// 跳转首页
        name: 'Home'
      })
    }
  }

}
</script>

<style scoped>
.Login-back{
  top: 0;
  background: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  line-height: 100%;
  position: absolute;
  z-index: 100;
}
.Login-box {
  margin: auto;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  width: 300px;
  height: 140px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
