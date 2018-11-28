<template>
  <div id="container">
    <LoadProgress ref="loadingProgress"></LoadProgress>
  </div>
</template>

<script>
/* eslint-disable */
import LoadProgress from '@/view/programme/LoadProgress'
let lights = {
  灯光6: {
    name: '灯光6',
    type: 'DirectionalLight',
    param: {
      hex: 0xffffff,
      intensity: 1.5
    },
    shadow: {
      bias: 0,
      darkness: 0.5,
      cameraFar: 1000,
      cameraTop: 60,
      cameraLeft: -150,
      cameraNear: 0,
      castShadow: 0,
      cameraRight: 150,
      cameraBottom: -100,
      cameraVisible: 1,
      shadowMapWidth: 8192,
      shadowMapHeight: 8192
    },
    isHelper: false,
    position: {
      x: -341,
      y: 20,
      z: 0
    }
  },
  灯光5: {
    name: '灯光5',
    type: 'DirectionalLight',
    param: {
      hex: 0xffffff,
      intensity: 1
    },
    shadow: {
      bias: 0,
      darkness: 0.5,
      cameraFar: 1000,
      cameraTop: 60,
      cameraLeft: -150,
      cameraNear: 0,
      castShadow: 0,
      cameraRight: 150,
      cameraBottom: -100,
      cameraVisible: 1,
      shadowMapWidth: 8192,
      shadowMapHeight: 8192
    },
    isHelper: false,
    position: {
      x: 2,
      y: 1,
      z: -219
    }
  },
  灯光4: {
    name: '灯光4',
    type: 'DirectionalLight',
    param: {
      hex: 0xffffff,
      intensity: 1.5
    },
    shadow: {
      bias: 0,
      darkness: 0.5,
      cameraFar: 1000,
      cameraTop: 60,
      cameraLeft: -150,
      cameraNear: 0,
      castShadow: 0,
      cameraRight: 150,
      cameraBottom: -100,
      cameraVisible: 1,
      shadowMapWidth: 8192,
      shadowMapHeight: 8192
    },
    isHelper: false,
    position: {
      x: 261,
      y: 8,
      z: -7
    }
  },
  灯光3: {
    name: '灯光3',
    type: 'DirectionalLight',
    param: {
      hex: 0xffffff,
      intensity: 1.8
    },
    shadow: {
      bias: 0,
      darkness: 0.5,
      cameraFar: 1000,
      cameraTop: 60,
      cameraLeft: -150,
      cameraNear: 0,
      castShadow: 0,
      cameraRight: 150,
      cameraBottom: -100,
      cameraVisible: 1,
      shadowMapWidth: 8192,
      shadowMapHeight: 8192
    },
    isHelper: false,
    position: {
      x: 0,
      y: 1,
      z: 284
    }
  },
  灯光2: {
    name: '灯光2',
    type: 'DirectionalLight',
    param: {
      hex: 0xffffff,
      intensity: 2
    },
    shadow: {
      bias: 0,
      darkness: 0.5,
      cameraFar: 1000,
      cameraTop: 60,
      cameraLeft: -150,
      cameraNear: 0,
      castShadow: 0,
      cameraRight: 150,
      cameraBottom: -100,
      cameraVisible: 1,
      shadowMapWidth: 8192,
      shadowMapHeight: 8192
    },
    isHelper: false,
    position: {
      x: 0,
      y: -84,
      z: 1
    }
  },
  灯光1: {
    name: '灯光1',
    type: 'DirectionalLight',
    param: {
      hex: 0xffffff,
      intensity: 2
    },
    shadow: {
      bias: 0,
      darkness: 0.5,
      cameraFar: 1000,
      cameraTop: 60,
      cameraLeft: -150,
      cameraNear: 0,
      castShadow: 0,
      cameraRight: 150,
      cameraBottom: -100,
      cameraVisible: 1,
      shadowMapWidth: 8192,
      shadowMapHeight: 8192
    },
    isHelper: false,
    position: {
      x: -7,
      y: 528,
      z: -2
    }
  },
  isDefault: true,
  type: 'fullShow'
}
let envImg = {
  imgPath: '../../static/model/envMap/',                //(String) 贴图Base路径
  imgName: ['1_l', '1_r', '1_u', '1_d', '1_f', '1_b'],  //(String/Array) 贴图名字
  format: 'jpg'                                         //(String) 贴图类型 如png、jpg等
}
export default {
  name: 'ProgramCode7',
  components: {LoadProgress},
  data () {
    return {
      clientWidth: '300', // 窗口宽度
      clientHeight: '300', // 窗口高度
      camera: null,
      scene: null,
      lights: lights,
      renderer: null,
      OrbitControls: null,
      ambientLight: null,
      pointLight: null,
      spotLight: null,
      OBJLoader: null,
      MTLLoader: null,
      object: null,
      DRACOLoader: null,
      GLTFLoader: null,
      // DRACOLoaderPath: './static/plugins/gltf/',
      // GLTFLoaderPath: './static/model/program4/Bee.glb',
      // loadObj: './static/model/program6/Camellia City.obj',
      // loadMtl: './static/model/program6/Camellia City.mtl',
      loadObj: './static/model/program6/model.obj',
      envImg: envImg
    }
  },
  methods: {
    init () {
      console.log('ProgramCode1初始化init')
      let me = this
      let refs = this.$refs
      this.container = document.getElementById('container')
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(60, this.clientWidth / this.clientHeight, 0.01, 1000000)
      this.camera.position.set(23252,7894,-42336)
      this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
      this.scene.add(this.ambientLight)
      this.pointLight = new THREE.PointLight( 0xffffff, 0.8)
      this.camera.add(this.pointLight)

      this.$lights.init(this.scene, this.lights)
      this.OrbitControls = new THREE.OrbitControls(this.camera,this.container)
      this.OrbitControls.enablePan = true // 禁止平移
      // this.OrbitControls.enableZoom = false
      // this.OrbitControls.maxAzimuthAngle = 1
      // this.OrbitControls.maxPolarAngle = 1.5
      // this.OrbitControls.minAzimuthAngle = 1
      // this.OrbitControls.minPolarAngle = 1
      // this.OrbitControls.maxDistance = 100 // 限制最远移动距离

      // // this.DRACOLoader = THREE.DRACOLoader.setDecoderPath( this.DRACOLoaderPath );
      // this.GLTFLoader = new THREE.GLTFLoader();
      // // this.GLTFLoader.setDRACOLoader( new THREE.DRACOLoader() );
      // this.$refs.loadingProgress._data.showLoadingSign = true;//加载标志
      // this.GLTFLoader.load( this.GLTFLoaderPath, function ( gltf ) {
      //   me.object = gltf.scene;
      //   me.object.position.set( 0, 0, 0 );
      //   me.object.scale.set( 40, 40, 40 );
      //   me.$envMap.applyEnvMap(me.object, me.envImg);
      //   me.$refs.loadingProgress._data.showLoadingSign = false;//加载标志
      //   me.scene.add( me.object );
      //   me.animate();
      // },function (xhr) {
      //   me.$refs.loadingProgress.onProgress(xhr)
      // }, function ( e ) {
      //   console.error( e );
      // });
      // this.MTLLoader = new THREE.MTLLoader()
      // this.OBJLoader = new THREE.OBJLoader()
      // this.$refs.loadingProgress._data.showLoadingSign = true;//加载标志
      // this.MTLLoader.load(this.loadMtl, (materials) => {
      //   materials.preload()
      //   this.OBJLoader.setMaterials(materials)
      //   this.OBJLoader.load(this.loadObj, (object) => {
      //     // object.scale.set(0.01, 0.01, 0.01)
      //     me.object = object
      //     me.object.children.forEach(function (value) {
      //       value.receiveShadow = true
      //       value.castShadow = true
      //     });
      //     me.object.receiveShadow = true
      //     me.object.castShadow = true
      //     this.scene.add(me.object)
      //     me.$refs.loadingProgress._data.showLoadingSign = false;//加载标志
      //   })
      // },function (xhr) {
      //   me.$refs.loadingProgress.onProgress(xhr)
      // }, function ( e ) {
      //   console.error( e );
      // });
      this.OBJLoader = new THREE.OBJLoader()
      this.$refs.loadingProgress._data.showLoadingSign = true;//加载标志

      this.OBJLoader.load(this.loadObj, (object) => {
        // object.scale.set(0.01, 0.01, 0.01)
        me.object = object
        me.object.children.forEach(function (value) {
          value.receiveShadow = true
          value.castShadow = true
        });
        me.object.receiveShadow = true
        me.object.castShadow = true
        this.scene.add(me.object)
        me.$refs.loadingProgress._data.showLoadingSign = false;//加载标志
      },function (xhr) {
        me.$refs.loadingProgress.onProgress(xhr)
      }, function ( e ) {
        console.error( e );
      })
      this.renderer = new THREE.WebGLRenderer({
        antialias:true,//抗锯齿,是否执行抗锯齿。默认是false,设置为true效果更好但会影响性能
        // precision: 'highp',
        // alpha:false,//画布是否包含alpha（透明）缓冲区。默认是false
        // premultipliedAlpha:true,//预多重性-无论渲染器是否会支持颜色具有预乘的alpha值。默认是true
        // stencil:true,//模板-绘图缓冲区是否有至少8位的模板缓冲区。默认是true
        // preserveDrawingBuffer:false,//保存缓冲区——是否要保留缓冲区，直到手动清除或覆盖为止。默认是false
        // powerPreference:"high-performance",//性能优先权——向用户代理提供一个提示，指示GPU的配置适合于WebGL上下文。可以是“高性能”:"high-performance"、“低功耗”:"low-power"或“默认”:"default"
        // depth:true,//深度——绘图缓冲区是否有至少16位的深度缓冲。默认是true
        logarithmicDepthBuffer:true,//对数深度Z-缓冲
      })
      this.renderer.setClearColor(0xb7c3cc)
      // this.renderer.shadowMap.enabled = true// 开启渲染器支持阴影效果
      // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap// 设置阴影类型
      this.renderer.setSize(this.clientWidth, this.clientHeight)
      // this.renderer.gammaFactor = 2.2 // 默认是2。
      // this.renderer.gammaInput = true // 如果设置，那么它就会期望所有的纹理和颜色都是预乘伽玛。默认是false
      // this.renderer.gammaOutput = true // 如果设置好，那么它就会期望所有的纹理和颜色都需要在预乘的伽马中被输出。默认是false
      // this.renderer.localClippingEnabled = false // 定义渲染器是否尊重对象级的剪切面。默认是false
      this.renderer.physicallyCorrectLights = true // 是否使用物理正确的照明方式。默认是false
      // this.renderer.toneMapping = 1 // 色调设置 （ THREE.NoToneMapping 0 ） （ THREE.LinearToneMapping 1 ）（ THREE.ReinhardToneMapping 2 ）（ THREE.Uncharted2ToneMapping 3 ）（ THREE.CineonToneMapping 4 ）
      // this.renderer.toneMappingExposure = 1 // 色调映射的曝光水平。默认值为1。
      // this.renderer.toneMappingWhitePoint = 1 // 色调映射白点。默认值为1。
      this.container.appendChild(this.renderer.domElement)

    },
    animate () {
      requestAnimationFrame(this.animate)
      // if(this.object && this.object.rotation){
      //   this.object.rotation.y += 0.01
      // }
      this.OrbitControls.update()
      this.renderer.render(this.scene, this.camera)
    },
    windowResize () {
      this.camera.aspect = this.clientWidth / this.clientHeight // 重新设置相机宽高比例
      this.camera.updateProjectionMatrix()// 更新相机投影矩阵
      this.renderer.setSize(this.clientWidth, this.clientHeight)// 重新设置渲染器渲染范围
      // this.OrbitControls.update()
    }
  },
  mounted () {
    console.log('ProgramCode1初始化mounted')
    const that = this
    this.clientWidth = `${document.documentElement.clientWidth}`
    this.clientHeight = `${document.documentElement.clientHeight}`
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
