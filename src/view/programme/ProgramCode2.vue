<template>
  <div id="container">
  </div>
</template>

<script>
// import * as THREE from 'THREE'
// import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
// let OBJLoader = require('three-obj-loader')(THREE)
// let OBJLoader = require('@/plugins/OBJLoader')(THREE)
// let MTLLoader = require('@/plugins/MTLLoader')(THREE)
// import * as OBJLoader from '@/plugins/OBJLoader'
// import * as MTLLoader from '@/plugins/MTLLoader'
/* eslint-disable */
// let OrbitControls = require('three-orbit-controls')(THREE)

export default {
  name: 'ProgramCode2',
  data () {
    return {
      clientWidth: '300', // 窗口宽度
      clientHeight: '600', // 窗口高度
      camera: null,
      scene: null,
      light: null,
      renderer: null,
      OrbitControls: null,
      ambientLight: null,
      pointLight: null,
      directionalLight: null,
      spotLight: null,
      OBJLoader: null,
      MTLLoader: null,
      object: null,
      loadObj: './static/model/program2/xinhuxing.obj',
      loadMtl: './static/model/program2/xinhuxing.mtl',
    }
  },
  methods: {
    init: function () {
      console.log('ProgramCode1初始化init')
      let me = this
      let container = document.getElementById('container')
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.01, 1000)
      this.camera.position.set(0,20,50)
      this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
      this.scene.add(this.ambientLight)
      this.pointLight = new THREE.PointLight(0xffffff, 0.2)
      this.camera.add(this.pointLight)
      this.directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 )
      this.directionalLight.position.set(0,50,65)
      this.directionalLight.castShadow = true
      // 平行光配置
      this.directionalLight.castShadow = true
      this.directionalLight.shadow.camera.near = 1
      this.directionalLight.shadow.camera.far = 100
      this.directionalLight.shadow.camera.left = -50
      this.directionalLight.shadow.camera.right = 50
      this.directionalLight.shadow.camera.top = 50
      this.directionalLight.shadow.camera.bottom = -50

      // 设置阴影的分辨率
      this.directionalLight.shadow.mapSize.width = 1024
      this.directionalLight.shadow.mapSize.height = 1024
      this.scene.add(this.directionalLight)
      this.OrbitControls = new THREE.OrbitControls(this.camera)
      this.OrbitControls.enablePan = false // 禁止平移
      this.OrbitControls.enableZoom = false
      this.OrbitControls.maxAzimuthAngle = 0.4
      this.OrbitControls.maxPolarAngle = 1.5
      this.OrbitControls.minAzimuthAngle = -0.1
      this.OrbitControls.minPolarAngle = 1

      this.MTLLoader = new THREE.MTLLoader()
      this.OBJLoader = new THREE.OBJLoader()

      this.MTLLoader.load(this.loadMtl, (materials) => {
        materials.preload()
        this.OBJLoader.setMaterials(materials)
        this.OBJLoader.load(this.loadObj, (object) => {
          object.scale.set(0.01, 0.01, 0.01)
          me.object = object
          me.object.children.forEach(function (value) {
            value.receiveShadow = true
            value.castShadow = true
          });
          me.object.receiveShadow = true
          me.object.castShadow = true
          this.scene.add(me.object)
        })
      })
      this.renderer = new THREE.WebGLRenderer({antialias: true})
      this.renderer.setClearColor(0x78dcf1)
      this.renderer.shadowMap.enabled = true// 开启渲染器支持阴影效果
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap// 设置阴影类型
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      // if(this.object && this.object.rotation){
      //   this.object.rotation.y += 0.001
      // }
      this.renderer.render(this.scene, this.camera)
    },
    windowResize: function () {
      this.camera.aspect = this.clientWidth / this.clientHeight // 重新设置相机宽高比例
      this.camera.updateProjectionMatrix()// 更新相机投影矩阵
      this.renderer.setSize(this.clientWidth, this.clientHeight)// 重新设置渲染器渲染范围
      this.OrbitControls.update()
    }
  },
  mounted () {
    console.log('ProgramCode1初始化mounted')
    const that = this
    window.onresize = () => {
      return (() => {
        that.clientWidth = `${document.documentElement.clientWidth}`
        that.clientHeight = `${document.documentElement.clientHeight}`
      })()
    }
    this.init()
    this.animate()
  },
  watch: {
    clientWidth (val) {
      if (!this.timerWidth) {
        this.clientWidth = val
        this.timerWidth = true
        let that = this
        setTimeout(function () {
          that.windowResize()
          that.timerWidth = false
        }, 400)
      }
    },
    clientHeight (val) {
      if (!this.timerHeight) {
        this.clientHeight = val
        this.timerHeight = true
        let that = this
        setTimeout(function () {
          that.windowResize()
          that.timerHeight = false
        }, 400)
      }
    }
  }
}
</script>
<style scoped>
  #container{
    width: 90vw;
    position: absolute;
    left: 0;
    top: 0;
    height: 90vh;
  }
  #container canvas{
    width: 90vw;
    position: absolute;
    left: 0;
    top: 0;
    height: 90vh;
  }
</style>
