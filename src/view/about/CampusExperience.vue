<template>
    <div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="获书画大赛一等奖" name="1" class="Campus-title">
          <ImgCard :designImgData="campus1"></ImgCard>
        </el-collapse-item>
        <el-collapse-item title="获书画比赛赛一等奖" name="2" class="Campus-title">
          <ImgCard :designImgData="campus2"></ImgCard>
        </el-collapse-item>
        <el-collapse-item title="获“优秀工作者”“优秀部委”称号" name="3" class="Campus-title">
          <ImgCard :designImgData="campus31"></ImgCard>
          <ImgCard :designImgData="campus32"></ImgCard>
        </el-collapse-item>
        <el-collapse-item title="获书协表现优异奖" name="4" class="Campus-title">
          <ImgCard :designImgData="campus4"></ImgCard>
        </el-collapse-item>
        <el-collapse-item title="获360校园俱乐部校园精英团队成员聘书" name="5" class="Campus-title">
          <ImgCard :designImgData="campus5"></ImgCard>
        </el-collapse-item>
        <el-collapse-item title="获信息工程与自动化学院学习进步奖" name="6" class="Campus-title">
          <ImgCard :designImgData="campus6"></ImgCard>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>
import ImgCard from '@/tool/ImgCard'
let baseUrl = './static/about/campus/'
let campus1 = {
  date: '2013/4/13',
  src: baseUrl + '1.jpg',
  info: '获书画大赛绘画组一等奖'
}
let campus2 = {
  date: '2013/5',
  src: baseUrl + '2.jpg',
  info: '获翰林文化之夏第二届“书法、绘画、剪纸”大赛，绘画组一等奖'
}
let campus31 = {
  date: '2013/5/4',
  src: baseUrl + '31.jpg',
  info: '获昆明理工大学书画协会“优秀工作者”荣誉称号'
}
let campus32 = {
  date: '2013/5/4',
  src: baseUrl + '32.jpg',
  info: '获昆明理工大学书画协会“优秀部委”荣誉称号'
}
let campus4 = {
  date: '2014/6/6',
  src: baseUrl + '4.jpg',
  info: '获管理与经济学院书法协会培训部部长表现优异的奖状'
}
let campus5 = {
  date: '2014/12/21-2015/6/30',
  src: baseUrl + '5.jpg',
  info: '获360校园俱乐部校园精英团队成员聘书'
}
let campus6 = {
  date: '2015/12/30',
  src: baseUrl + '6.jpg',
  info: '在2014-2015学年中获信息工程与自动化学院学习进步奖'
}
export default {
  name: 'CampusExperience',
  components: { ImgCard },
  data () {
    return {
      activeName: '1',
      campus1,
      campus2,
      campus31,
      campus32,
      campus4,
      campus5,
      campus6
    }
  }
}
</script>

<style>
  @media screen and (max-width: 700px) {
    .el-collapse-item__header {
      height: 80px;
      line-height: 30px;
    }
  }
</style>
<style scoped>

</style>
