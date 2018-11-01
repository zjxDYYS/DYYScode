<template>
    <div>
      <el-row :gutter="12">
        <el-col :span="24" class="profile-photo-contain">
          <div class="profile-photo">
            <img :src="profile" class="profile-photo-img">
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="always" class="personInfo-title">
            姓名
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" class="personInfo-title">
            性别
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" class="personInfo-title">
            微信
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="always" class="height">
            赵加旋
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" class="height">
            男
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" class="height">
            zjxDYYS
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="always" class="personInfo-title">
            生日
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" class="personInfo-title">
            QQ
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" class="personInfo-title">
            学历
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="always" class="height">
            1993
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" class="height">
            1728234468
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" class="height">
            本科
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data () {
    return {
      profile: './static/about/profile.jpg'
    }
  }
}
</script>

<style>
  .personInfo-title{
    background-color: #d8dce5;
  }
  @media screen and (max-width: 700px) {
    .height{
      height: 220px;
      font-size: 14px;
      padding: 0 4px;
      word-wrap: break-word;
    }
    .personInfo-title{
      height: 60px;
    }
  }
</style>
<style scoped>
  .profile-photo-contain{
    height: 200px;
  }
  .profile-photo{
    padding: 0px;
    width: 100px;
    height: 122px;
    left: 50%;
    margin-left: -50px;
    position: absolute;
    top: 40px;
  }
  .profile-photo-img{
    width: 100%;
    display: block;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    border: 1px solid #ffffff;
  }
</style>
