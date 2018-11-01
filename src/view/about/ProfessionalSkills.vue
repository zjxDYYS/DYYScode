<template>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>webgl(three.js)</span>
          <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-success"></el-button>
        </div>
        <div class="text item">
          <div class="skill-itle">
            <el-button type="primary" size="mini" round>threejs</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="90" status="success"></el-progress>

          <div class="skill-itle">
            <el-button type="primary" size="mini" round>3Dmax</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="10" status="success"></el-progress>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>前端</span>
          <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-success"></el-button>
        </div>
        <div class="text item">
          <div class="skill-itle">
            <el-button type="primary" size="mini" round>JavaScript</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="90" status="success"></el-progress>

          <div class="skill-itle">
            <el-button type="primary" size="mini" round>html5</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="80" status="success"></el-progress>

          <div class="skill-itle">
            <el-button type="primary" size="mini" round>css3</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="70" status="success"></el-progress>

          <div class="skill-itle">
            <el-button type="primary" size="mini" round>jQuery</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="80" status="success"></el-progress>

          <div class="skill-itle">
          <el-button type="primary" size="mini" round>bootstrap</el-button>
        </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="70" status="success"></el-progress>

          <div class="skill-itle">
            <el-button type="primary" size="mini" round>vue+cli+webpack+element</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="70" status="success"></el-progress>

          <div class="skill-itle">
            <el-button type="primary" size="mini" round>PC</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="90" status="success"></el-progress>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>绘画</span>
          <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-success"></el-button>
        </div>
        <div class="text item">
          <div class="skill-itle">
            <el-button type="primary" size="mini" round>PS</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="90" status="success"></el-progress>

          <div class="skill-itle">
            <el-button type="primary" size="mini" round>CG(插画、Q版)</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="80" status="success"></el-progress>

          <div class="skill-itle">
            <el-button type="primary" size="mini" round>素描、油画、水粉</el-button>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="80" status="success"></el-progress>
        </div>
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'ProfessionalSkills'
}
</script>

<style>
  .box-card {
    width: 600px;
  }
  @media screen and (max-width: 700px) {
    .box-card {
      width: 200px;
    }
  }
</style>

<style scoped>
 .skill-itle{
   margin: 10px 0px;
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
