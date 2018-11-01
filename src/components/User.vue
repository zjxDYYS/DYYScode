<template>
    <div>
      我是用户界面的例子
      <div class="User-list">
        <router-link :to="{path:'/User/' + user.type + '/' + user.id, query: {info: 'work'}}" :key="user.id" v-for="user in userList">
          {{ user.name }}
        </router-link>
      </div>
      <div class="User-info" v-if="userInfo.name">
        <p>姓名：{{userInfo.name}}</p>
        <p>爱好：{{userInfo.hobby}}</p>
        <p>电话：{{userInfo.phone}}</p>
      </div>
      <hr>
      <div class="User-work" v-if="userInfo.name">
        <!--<router-link exact to="?info=work">用户的作品</router-link>
        <router-link exact to="?info=share">用户的分享</router-link>
        <router-link exact to="?info=follow">用户的关注</router-link>-->
        <router-link exact :to="{path:'',query:{info:'work'}}">用户的作品</router-link>
        <router-link exact :to="{path:'',query:{info:'share'}}">用户的分享</router-link>
        <router-link exact :to="{path:'',query:{info:'follow'}}">用户的关注</router-link>
        <div>
          {{$route.query}}
        </div>
      </div>
    </div>
</template>

<script>
let data = [
  {
    id: 0,
    type: 'vip',
    name: '张三',
    hobby: '跳舞',
    phone: '1234456'
  },
  {
    id: 1,
    type: 'vip',
    name: '李四',
    hobby: '哈哈',
    phone: '1234456'
  },
  {
    id: 2,
    type: 'common',
    name: '王二',
    hobby: '嘻嘻',
    phone: '1234456'
  },
  {
    id: 3,
    type: 'common',
    name: '麻子',
    hobby: '啦啦',
    phone: '1234456'
  }
]
export default {
  name: 'User',
  data () {
    return {
      userList: data,
      userInfo: {}
    }
  },
  watch: {
    $route () {
      this.getUrlId()
    }
  },
  created () {
    this.getUrlId()
  },
  methods: {
    getUrlId () {
      let id = this.$route.params.userId
      if (id) {
        this.userInfo = this.userList.filter((item) => {
          return item.id === Number(id)
        })[0]
        console.log('用户信息id=' + this.userInfo.id)
        console.log('用户信息')
        console.log(this.userInfo)
      } else {
        this.userInfo = {}
      }
    }
  }
}
</script>
<style scoped>

</style>
