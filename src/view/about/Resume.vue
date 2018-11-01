<template>
    <div>
      <div class="Resume-bg">
        <el-tabs :tab-position="tabPosition">
          <el-tab-pane label="个人信息">
            <PersonalInfo></PersonalInfo>
          </el-tab-pane>
          <el-tab-pane label="求职意向">
            <JobIntention></JobIntention>
          </el-tab-pane>
          <el-tab-pane label="专业技能">
            <ProfessionalSkills></ProfessionalSkills>
          </el-tab-pane>
          <el-tab-pane label="校园经历">
            <CampusExperience></CampusExperience>
          </el-tab-pane>
          <el-tab-pane label="实习经历">
            <Internship></Internship>
          </el-tab-pane>
          <el-tab-pane label="工作经历">
            <WorkExperience></WorkExperience>
          </el-tab-pane>
          <el-tab-pane label="往年简历">
            <div>
              <a href="https://zjxdyys.github.io/DYYS2017/" target="_Blank">我的17年简历： https://zjxdyys.github.io/DYYS2017/</a>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
import JobIntention from '@/view/about/JobIntention'
import CampusExperience from '@/view/about/CampusExperience'
import Internship from '@/view/about/Internship'
import WorkExperience from '@/view/about/WorkExperience'
import PersonalInfo from '@/view/about/PersonalInfo'
import ProfessionalSkills from '@/view/about/ProfessionalSkills'
export default {
  name: 'Resume',
  components: {
    CampusExperience,
    JobIntention,
    Internship,
    WorkExperience,
    PersonalInfo,
    ProfessionalSkills
  },
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style scoped>
.Resume-bg{
  width: 900px;
  height: auto;
  position: absolute;
  left: 50%;
  margin-left: -450px;
}
@media screen and (max-width: 700px) {
  .Resume-bg{
    width: 300px;
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    font-size: 12px;
  }
}
</style>
