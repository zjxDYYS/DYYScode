<template>
    <div>
      <el-table
        :data="jobIntention"
        style="width: 100%">
        <el-table-column
          prop="year"
          label="年份|技能"
          class="jobTitle">
        </el-table-column>
        <el-table-column
          prop="job1"
          label="WEBGL工程师">
        </el-table-column>
        <el-table-column
          prop="job2"
          label="前端工程师">
        </el-table-column>
        <el-table-column
          prop="job3"
          label="原画师">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'JobIntention',
  data () {
    return {
      jobIntention: [{
        year: '2017年专业技能',
        job1: 'web3D（基于webGl的three.js）',
        job2: 'html5+css3+javascript(jQuery) + UI(PS)',
        job3: '数码PS绘画（角色设计：写实、Q版）传统手绘（素描、水粉、油画）'
      },
      {
        year: '2018年专业技能',
        job1: 'web3D（基于webGl的three.js）',
        job2: 'vue.js cli element vuex html5 css3',
        job3: '数码PS绘画（角色设计：写实、Q版）传统手绘（素描、水粉、油画）'
      }]
    }
  }
}
</script>

<style scoped>
  .jobTitle {
    background: #e6550d;
  }
  @media screen and (max-width: 700px) {
    .el-table {
      font-size: 12px;
    }

    .el-table td, .el-table th {
      padding: 0;
    }

    .el-tabs__item {
      padding: 0 5px;
    }
  }
</style>
