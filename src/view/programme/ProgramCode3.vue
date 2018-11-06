<template>
  <div id="container">
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ProgramCode3',
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
      DRACOLoader: null,
      GLTFLoader: null,
      DRACOLoaderPath: './static/plugins/gltf/',
      GLTFLoaderPath: './static/model/program3/LittlestTokyo.glb',
      mixer: null,//混合器
      clock: null,
    }
  },
  methods: {
    init: function () {
      this.alertTip()
      console.log('ProgramCode1初始化init')
      let me = this
      let container = document.getElementById('container')
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.01, 1000)
      this.camera.position.set(0,20,50)
      this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
      this.scene.add(this.ambientLight)
      this.pointLight = new THREE.PointLight( 0xffffff, 2)
      this.camera.add(this.pointLight)
      this.directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 )
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
      // this.OrbitControls.enableZoom = false
      //this.OrbitControls.maxAzimuthAngle = 1
      this.OrbitControls.maxPolarAngle = 1.5
      //this.OrbitControls.minAzimuthAngle = 1
      this.OrbitControls.minPolarAngle = 1
      this.OrbitControls.maxDistance = 100 // 限制最远移动距离

      this.clock = new THREE.Clock();//计时器
      this.DRACOLoader = THREE.DRACOLoader.setDecoderPath( this.DRACOLoaderPath );
      this.GLTFLoader = new THREE.GLTFLoader();
      this.GLTFLoader.setDRACOLoader( new THREE.DRACOLoader() );
      this.GLTFLoader.load( this.GLTFLoaderPath, function ( gltf ) {

        me.object = gltf.scene;
        me.object.position.set( 0, 2, 0 );
        me.object.scale.set( 0.1, 0.1, 0.1 );
        me.object.traverse( function ( child ) {

          // if ( me.object.isMesh ) me.object.material.envMap = envMap;

        } );

        me.scene.add( me.object );

        me.mixer = new THREE.AnimationMixer( me.object );
        me.mixer.clipAction( gltf.animations[ 0 ] ).play();

        me.animate();

      }, undefined, function ( e ) {

        console.error( e );

      } );

      this.renderer = new THREE.WebGLRenderer({antialias: true})
      this.renderer.setClearColor(0x78dcf1)
      this.renderer.shadowMap.enabled = true// 开启渲染器支持阴影效果
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap// 设置阴影类型
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      this.renderer.gammaOutput = true
      this.renderer.gammaFactor = 2.2
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      // if(this.object && this.object.rotation){
      //   this.object.rotation.y += 0.001
      // }
      let delta = this.clock.getDelta()
      this.mixer &&　this.mixer.update( delta )
      this.renderer.render(this.scene, this.camera)
    },
    windowResize: function () {
      this.camera.aspect = this.clientWidth / this.clientHeight // 重新设置相机宽高比例
      this.camera.updateProjectionMatrix()// 更新相机投影矩阵
      this.renderer.setSize(this.clientWidth, this.clientHeight)// 重新设置渲染器渲染范围
      this.OrbitControls.update()
    },
    alertTip () {
      this.$notify({
        title: '警告',
        message: '模型文件比较大，请在WIFI下打开',
        type: 'warning',
        duration: 0
      })
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
