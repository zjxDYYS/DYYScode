<template>
    <div id="container">
    </div>
</template>

<script>
/* eslint-disable */
  // import * as THREE from 'THREE'
// let OrbitControls = require('three-orbit-controls')(THREE)
export default {
  name: 'ProgramCode1',
  data () {
    return {
      clientWidth: '300', // 窗口宽度
      clientHeight: '600', // 窗口高度
      camera: null,
      scene: null,
      light: null,
      renderer: null,
      OrbitControls: null,
      mesh: null
    }
  },
  methods: {
    init: function () {
      console.log('ProgramCode1初始化init')
      let container = document.getElementById('container')
      this.camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1
      this.OrbitControls = new THREE.OrbitControls(this.camera)
      this.OrbitControls.enablePan = false // 禁止平移
      // this.OrbitControls.enableZoom = false
      // this.OrbitControls.maxAzimuthAngle = 0.4
      // this.OrbitControls.maxPolarAngle = 1.5
      // this.OrbitControls.minAzimuthAngle = -0.2
      // this.OrbitControls.minPolarAngle = 1.1
      this.scene = new THREE.Scene()
      let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      let material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(geometry, material)
      this.scene.add(this.mesh)
      this.renderer = new THREE.WebGLRenderer({antialias: true})
      this.renderer.setClearColor(0xb7c3cc)
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
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
