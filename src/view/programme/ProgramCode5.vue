<template>
  <div id="container">
    <LoadProgress ref="loadingProgress"></LoadProgress>
  </div>
</template>

<script>
// /* eslint-disable */
import LoadProgress from '@/view/programme/LoadProgress'
let lights = {
  // 灯光6: {
  //   name: '灯光6',
  //   type: 'DirectionalLight',
  //   param: {
  //     hex: 0xffffff,
  //     intensity: 1.5
  //   },
  //   shadow: {
  //     bias: 0,
  //     darkness: 0.5,
  //     cameraFar: 1000,
  //     cameraTop: 60,
  //     cameraLeft: -150,
  //     cameraNear: 0,
  //     castShadow: 0,
  //     cameraRight: 150,
  //     cameraBottom: -100,
  //     cameraVisible: 1,
  //     shadowMapWidth: 8192,
  //     shadowMapHeight: 8192
  //   },
  //   isHelper: false,
  //   position: {
  //     x: -341,
  //     y: 20,
  //     z: 0
  //   }
  // },
  // 灯光5: {
  //   name: '灯光5',
  //   type: 'DirectionalLight',
  //   param: {
  //     hex: 0xffffff,
  //     intensity: 1
  //   },
  //   shadow: {
  //     bias: 0,
  //     darkness: 0.5,
  //     cameraFar: 1000,
  //     cameraTop: 60,
  //     cameraLeft: -150,
  //     cameraNear: 0,
  //     castShadow: 0,
  //     cameraRight: 150,
  //     cameraBottom: -100,
  //     cameraVisible: 1,
  //     shadowMapWidth: 8192,
  //     shadowMapHeight: 8192
  //   },
  //   isHelper: false,
  //   position: {
  //     x: 2,
  //     y: 1,
  //     z: -219
  //   }
  // },
  // 灯光4: {
  //   name: '灯光4',
  //   type: 'DirectionalLight',
  //   param: {
  //     hex: 0xffffff,
  //     intensity: 1.5
  //   },
  //   shadow: {
  //     bias: 0,
  //     darkness: 0.5,
  //     cameraFar: 1000,
  //     cameraTop: 60,
  //     cameraLeft: -150,
  //     cameraNear: 0,
  //     castShadow: 0,
  //     cameraRight: 150,
  //     cameraBottom: -100,
  //     cameraVisible: 1,
  //     shadowMapWidth: 8192,
  //     shadowMapHeight: 8192
  //   },
  //   isHelper: false,
  //   position: {
  //     x: 261,
  //     y: 8,
  //     z: -7
  //   }
  // },
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
  imgPath: '../../static/model/envMap/', // (String) 贴图Base路径
  imgName: ['1_l', '1_r', '1_u', '1_d', '1_f', '1_b'], // (String/Array) 贴图名字
  format: 'jpg' // (String) 贴图类型 如png、jpg等
}
let textures = {
  1: {
    map: './static/model/program5/1map.jpg',
    roughnessMap: './static/model/program5/1roughness.jpg',
    normalMap: './static/model/program5/1normal.jpg'
  }
}
export default {
  name: 'ProgramCode5',
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
      wordSize: 1, // 字体比例缩放
      DRACOLoaderPath: './static/plugins/gltf/',
      GLTFLoaderPath: './static/model/program4/Bee.glb',
      textures: textures, // 材质
      envImg: envImg,
      defMaterial: null, // 默认基础材质
      wordGroup: null, // 字体
      zhao: null, // 字体
      jia: null, // 字体
      xuan: null, // 字体
      jian: null, // 字体
      li: null// 字体
    }
  },
  methods: {
    init () {
      console.log('ProgramCode1初始化init')
      let me = this
      let refs = this.$refs
      this.container = document.getElementById('container')
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(60, this.clientWidth / this.clientHeight, 0.01, 1000)
      this.camera.position.set(0, 2, 30)
      this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      this.scene.add(this.ambientLight)
      // this.pointLight = new THREE.PointLight(0xffffff, 0.4)
      // this.camera.add(this.pointLight)

      this.$lights.init(this.scene, this.lights)
      this.OrbitControls = new THREE.OrbitControls(this.camera, this.container)
      this.OrbitControls.enablePan = false // 禁止平移
      // this.OrbitControls.enableZoom = false
      // this.OrbitControls.maxAzimuthAngle = 1
      // this.OrbitControls.maxPolarAngle = 1.5
      // this.OrbitControls.minAzimuthAngle = 1
      // this.OrbitControls.minPolarAngle = 1
      // this.OrbitControls.maxDistance = 100 // 限制最远移动距离

      this.initgrid()
      this.initDefMat()
      this.word()
      this.renderer = new THREE.WebGLRenderer({antialias: true})
      this.renderer.setClearColor(0xb0c5d9)
      this.renderer.shadowMap.enabled = true// 开启渲染器支持阴影效果
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap// 设置阴影类型
      this.renderer.setSize(this.clientWidth, this.clientHeight)
      this.renderer.gammaFactor = 2 // 默认是2。
      this.renderer.gammaInput = true // 如果设置，那么它就会期望所有的纹理和颜色都是预乘伽玛。默认是false
      this.renderer.gammaOutput = true // 如果设置好，那么它就会期望所有的纹理和颜色都需要在预乘的伽马中被输出。默认是false
      this.renderer.localClippingEnabled = false // 定义渲染器是否尊重对象级的剪切面。默认是false
      // this.renderer.physicallyCorrectLights = true // 是否使用物理正确的照明方式。默认是false
      // this.renderer.toneMapping = THREE.LinearToneMapping // 色调设置 （ THREE.NoToneMapping 0 ） （ THREE.LinearToneMapping 1 ）（ THREE.ReinhardToneMapping 2 ）（ THREE.Uncharted2ToneMapping 3 ）（ THREE.CineonToneMapping 4 ）
      this.renderer.toneMappingExposure = 1 // 色调映射的曝光水平。默认值为1。
      this.renderer.toneMappingWhitePoint = 1 // 色调映射白点。默认值为1。
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
      this.camera.updateProjectionMatrix()// 更新相机投影矩阵
      this.camera.aspect = this.clientWidth / this.clientHeight // 重新设置相机宽高比例
      this.renderer.setSize(this.clientWidth, this.clientHeight)// 重新设置渲染器渲染范围
      // this.OrbitControls.update()
    },
    initgrid () {
      let gridHelper = new THREE.GridHelper(80, 30, 0x3f464d, 0x7e7f80)
      this.scene.add(gridHelper)
    },
    initDefMat () { // 初始化默认材质
      let defMat = { // 默认材质数据
        type: 'MeshStandardMaterial',
        name: '标准材质(MeshStandardMaterial)',
        color: '#ffffff', // diffuse
        map: '../../static/model/program5/1-map.jpg',
        alphaMap: undefined,
        repeat: {x: 1, y: 1},
        offset: {x: 0, y: 0},
        roughness: 1,
        roughnessMap: '../../static/model/program5/1-roughness.jpg',
        metalness: 0.2,
        metalnessMap: undefined,
        lightMap: undefined,
        lightMapIntensity: 1.0,
        aoMap: undefined,
        aoMapIntensity: 1.0,
        emissive: '#000000',
        emissiveIntensity: 1.0,
        emissiveMap: undefined,
        bumpMap: undefined,
        bumpScale: 1,
        normalMap: '../../static/model/program5/1-normal.jpg',
        normalScale: 1,
        displacementMap: undefined,
        displacementScale: 1,
        displacementBias: 0,
        envMap: undefined,
        envMapIntensity: 1.0
      }
      this.defMaterial = this.$material.getMtl(defMat)
    },
    changeColor (model, number) { // 更改花色
      console.log('更改花色：花色' + number)
      let me = this
      model.children.forEach((iterm, insex, arry) => {
        let mesh = iterm
        if (mesh.type = 'Mesh') {
          me.$material.changeMaterial(mesh.material, 'map', me.textures[number].map, {x: 0.5, y: 0.5})
          me.$material.changeMaterial(mesh.material, 'roughnessMap', me.textures[number].roughnessMap, {x: 0.5, y: 0.5})
          me.$material.changeMaterial(mesh.material, 'normalMap', me.textures[number].normalMap, {x: 0.5, y: 0.5})
        }
      })
    },
    word () {
      this.wordGroup = new THREE.Group()
      this.zhao = this.Zhao()
      this.jia = this.Jia()
      this.xuan = this.Xuan()
      this.jian = this.Jian()
      this.li = this.Li()
      this.changeColor(this.zhao, 1)
      this.changeColor(this.jia, 1)
      this.changeColor(this.xuan, 1)
      this.changeColor(this.jian, 1)
      this.changeColor(this.li, 1)

      this.wordGroup.add(this.zhao)
      this.wordGroup.add(this.jia)
      this.wordGroup.add(this.xuan)
      this.wordGroup.add(this.jian)
      this.wordGroup.add(this.li)
      this.scene.add(this.wordGroup)
    },
    Zhao () { // 第一笔中心算位置
      let group = new THREE.Group()
      let materail = this.defMaterial.clone()

      let mesh1 = new THREE.Mesh(new THREE.BoxGeometry(3 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh1.position.set(0 * this.wordSize, -0.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh1)

      let mesh2 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 8 * this.wordSize, 1 * this.wordSize), materail)
      mesh2.position.set(0 * this.wordSize, -2.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh2)

      let mesh3 = new THREE.Mesh(new THREE.BoxGeometry(4 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh3.position.set(0 * this.wordSize, -2.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh3)

      let mesh4 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh4.position.set(1 * this.wordSize, -4.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh4)

      let mesh5 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 3 * this.wordSize, 1 * this.wordSize), materail)
      mesh5.position.set(-2 * this.wordSize, -6 * this.wordSize, 0 * this.wordSize)
      mesh5.rotation.set(0, 0, -0.1 * Math.PI)
      group.add(mesh5)

      let mesh6 = new THREE.Mesh(new THREE.BoxGeometry(8 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh6.position.set(2 * this.wordSize, -6.5 * this.wordSize, 0 * this.wordSize)
      mesh6.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh6)

      let mesh7 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 6 * this.wordSize, 1 * this.wordSize), materail)
      mesh7.position.set(3.5 * this.wordSize, -2.5 * this.wordSize, 0 * this.wordSize)
      mesh7.rotation.set(0, 0, 0.1 * Math.PI)
      group.add(mesh7)

      let mesh8 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 6 * this.wordSize, 1 * this.wordSize), materail)
      mesh8.position.set(3.5 * this.wordSize, -2.5 * this.wordSize, 0 * this.wordSize)
      mesh8.rotation.set(0, 0, -0.1 * Math.PI)
      group.add(mesh8)

      group.position.set(-13 * this.wordSize, 10 * this.wordSize, 0 * this.wordSize)
      return group
    },
    Jia () {
      let group = new THREE.Group()
      let materail = this.defMaterial.clone()

      let mesh1 = new THREE.Mesh(new THREE.BoxGeometry(4 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh1.position.set(0 * this.wordSize, 0.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh1)

      let mesh2 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 6 * this.wordSize, 1 * this.wordSize), materail)
      mesh2.position.set(1.5 * this.wordSize, -2 * this.wordSize, 0 * this.wordSize)
      group.add(mesh2)

      let mesh3 = new THREE.Mesh(new THREE.BoxGeometry(2 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh3.position.set(1 * this.wordSize, -5 * this.wordSize, 0 * this.wordSize)
      mesh3.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh3)

      let mesh4 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 8 * this.wordSize, 1 * this.wordSize), materail)
      mesh4.position.set(-1 * this.wordSize, -2 * this.wordSize, 0 * this.wordSize)
      mesh4.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh4)

      let mesh5 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 5 * this.wordSize, 1 * this.wordSize), materail)
      mesh5.position.set(3.5 * this.wordSize, -1.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh5)

      let mesh6 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 5 * this.wordSize, 1 * this.wordSize), materail)
      mesh6.position.set(5.5 * this.wordSize, -1.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh6)

      let mesh7 = new THREE.Mesh(new THREE.BoxGeometry(3 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh7.position.set(4.5 * this.wordSize, 0.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh7)

      let mesh8 = new THREE.Mesh(new THREE.BoxGeometry(3 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh8.position.set(4.5 * this.wordSize, -4.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh8)

      group.position.set(-3 * this.wordSize, 9 * this.wordSize, 0 * this.wordSize)
      return group
    },
    Xuan () {
      let group = new THREE.Group()
      let materail = this.defMaterial.clone()

      let mesh1 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh1.position.set(0 * this.wordSize, 0.05 * this.wordSize, 0 * this.wordSize)
      group.add(mesh1)

      let mesh2 = new THREE.Mesh(new THREE.BoxGeometry(4 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh2.position.set(0.5 * this.wordSize, -1.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh2)

      let mesh3 = new THREE.Mesh(new THREE.BoxGeometry(4 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh3.position.set(0.5 * this.wordSize, -3.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh3)

      let mesh4 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 5 * this.wordSize, 1 * this.wordSize), materail)
      mesh4.position.set(2 * this.wordSize, -5.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh4)

      let mesh5 = new THREE.Mesh(new THREE.BoxGeometry(2 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh5.position.set(1.5 * this.wordSize, -8 * this.wordSize, 0 * this.wordSize)
      mesh5.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh5)

      let mesh6 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 7 * this.wordSize, 1 * this.wordSize), materail)
      mesh6.position.set(-0.25 * this.wordSize, -5.5 * this.wordSize, 0 * this.wordSize)
      mesh6.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh6)

      let mesh7 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 2.5 * this.wordSize, 1 * this.wordSize), materail)
      mesh7.position.set(3.4 * this.wordSize, -0.45 * this.wordSize, 0 * this.wordSize)
      mesh7.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh7)

      let mesh8 = new THREE.Mesh(new THREE.BoxGeometry(4 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh8.position.set(5.5 * this.wordSize, -0.45 * this.wordSize, 0 * this.wordSize)
      group.add(mesh8)

      let mesh9 = new THREE.Mesh(new THREE.BoxGeometry(3 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh9.position.set(5.25 * this.wordSize, -2.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh9)

      let mesh10 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 2 * this.wordSize, 1 * this.wordSize), materail)
      mesh10.position.set(7 * this.wordSize, -3 * this.wordSize, 0 * this.wordSize)
      mesh10.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh10)

      let mesh11 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 5 * this.wordSize, 1 * this.wordSize), materail)
      mesh11.position.set(5.25 * this.wordSize, -5.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh11)

      let mesh12 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh12.position.set(6 * this.wordSize, -5.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh12)

      let mesh13 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 3 * this.wordSize, 1 * this.wordSize), materail)
      mesh13.position.set(3.5 * this.wordSize, -7.5 * this.wordSize, 0 * this.wordSize)
      mesh13.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh13)

      let mesh14 = new THREE.Mesh(new THREE.BoxGeometry(5 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh14.position.set(6 * this.wordSize, -8 * this.wordSize, 0 * this.wordSize)
      mesh14.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh14)

      group.position.set(8 * this.wordSize, 11.25 * this.wordSize, 0 * this.wordSize)
      return group
    },
    Jian () {
      let group = new THREE.Group()
      let materail = this.defMaterial.clone()
      let mesh1 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 2 * this.wordSize, 1 * this.wordSize), materail)
      mesh1.position.set(0 * this.wordSize, 0 * this.wordSize, 0 * this.wordSize)
      mesh1.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh1)

      let mesh2 = new THREE.Mesh(new THREE.BoxGeometry(2 * this.wordSize, 0.9 * this.wordSize, 1 * this.wordSize), materail)
      mesh2.position.set(1.5 * this.wordSize, 0 * this.wordSize, 0 * this.wordSize)
      group.add(mesh2)

      let mesh3 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh3.position.set(1.05 * this.wordSize, -1 * this.wordSize, 0 * this.wordSize)
      mesh3.rotation.set(0, 0, 0.25 * Math.PI)
      group.add(mesh3)

      let mesh4 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 2 * this.wordSize, 1 * this.wordSize), materail)
      mesh4.position.set(4 * this.wordSize, 0 * this.wordSize, 0 * this.wordSize)
      mesh4.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh4)

      let mesh5 = new THREE.Mesh(new THREE.BoxGeometry(2 * this.wordSize, 0.9 * this.wordSize, 1 * this.wordSize), materail)
      mesh5.position.set(5.5 * this.wordSize, 0 * this.wordSize, 0 * this.wordSize)
      group.add(mesh5)

      let mesh6 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh6.position.set(5.05 * this.wordSize, -1 * this.wordSize, 0 * this.wordSize)
      mesh6.rotation.set(0, 0, 0.25 * Math.PI)
      group.add(mesh6)

      let mesh7 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh7.position.set(1.05 * this.wordSize, -2.5 * this.wordSize, 0 * this.wordSize)
      mesh7.rotation.set(0, 0, 0.25 * Math.PI)
      group.add(mesh7)

      let mesh8 = new THREE.Mesh(new THREE.BoxGeometry(0.9 * this.wordSize, 6 * this.wordSize, 1 * this.wordSize), materail)
      mesh8.position.set(0 * this.wordSize, -6 * this.wordSize, 0 * this.wordSize)
      group.add(mesh8)

      let mesh9 = new THREE.Mesh(new THREE.BoxGeometry(4.25 * this.wordSize, 0.8 * this.wordSize, 1 * this.wordSize), materail)
      mesh9.position.set(4.25 * this.wordSize, -2.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh9)

      let mesh10 = new THREE.Mesh(new THREE.BoxGeometry(0.9 * this.wordSize, 6.5 * this.wordSize, 1 * this.wordSize), materail)
      mesh10.position.set(5.95 * this.wordSize, -6 * this.wordSize, 0 * this.wordSize)
      group.add(mesh10)

      let mesh11 = new THREE.Mesh(new THREE.BoxGeometry(2 * this.wordSize, 0.8 * this.wordSize, 1 * this.wordSize), materail)
      mesh11.position.set(5.45 * this.wordSize, -8.95 * this.wordSize, 0 * this.wordSize)
      mesh11.rotation.set(0, 0, -0.1 * Math.PI)
      group.add(mesh11)

      let mesh12 = new THREE.Mesh(new THREE.BoxGeometry(2.5 * this.wordSize, 0.8 * this.wordSize, 1 * this.wordSize), materail)
      mesh12.position.set(3 * this.wordSize, -4 * this.wordSize, 0 * this.wordSize)
      group.add(mesh12)

      let mesh13 = new THREE.Mesh(new THREE.BoxGeometry(2.5 * this.wordSize, 0.8 * this.wordSize, 1 * this.wordSize), materail)
      mesh13.position.set(3 * this.wordSize, -6 * this.wordSize, 0 * this.wordSize)
      group.add(mesh13)

      let mesh14 = new THREE.Mesh(new THREE.BoxGeometry(2.5 * this.wordSize, 0.8 * this.wordSize, 1 * this.wordSize), materail)
      mesh14.position.set(3 * this.wordSize, -8 * this.wordSize, 0 * this.wordSize)
      group.add(mesh14)

      let mesh15 = new THREE.Mesh(new THREE.BoxGeometry(0.9 * this.wordSize, 5 * this.wordSize, 1 * this.wordSize), materail)
      mesh15.position.set(2 * this.wordSize, -6 * this.wordSize, 0 * this.wordSize)
      group.add(mesh15)

      let mesh16 = new THREE.Mesh(new THREE.BoxGeometry(0.9 * this.wordSize, 5 * this.wordSize, 1 * this.wordSize), materail)
      mesh16.position.set(4 * this.wordSize, -6 * this.wordSize, 0 * this.wordSize)
      group.add(mesh16)

      group.position.set(-10 * this.wordSize, -2 * this.wordSize, 0 * this.wordSize)
      return group
    },
    Li () {
      let group = new THREE.Group()
      let materail = this.defMaterial.clone()

      let mesh1 = new THREE.Mesh(new THREE.BoxGeometry(4 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh1.position.set(0 * this.wordSize, 0.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh1)

      let mesh2 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 6 * this.wordSize, 1 * this.wordSize), materail)
      mesh2.position.set(1.5 * this.wordSize, -2 * this.wordSize, 0 * this.wordSize)
      group.add(mesh2)

      let mesh3 = new THREE.Mesh(new THREE.BoxGeometry(2 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh3.position.set(1 * this.wordSize, -5 * this.wordSize, 0 * this.wordSize)
      mesh3.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh3)

      let mesh4 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 8 * this.wordSize, 1 * this.wordSize), materail)
      mesh4.position.set(-1 * this.wordSize, -1.25 * this.wordSize, 0 * this.wordSize)
      mesh4.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh4)

      let mesh5 = new THREE.Mesh(new THREE.BoxGeometry(6 * this.wordSize, 1 * this.wordSize, 1 * this.wordSize), materail)
      mesh5.position.set(-0.25 * this.wordSize, 2.5 * this.wordSize, 0 * this.wordSize)
      group.add(mesh5)

      let mesh6 = new THREE.Mesh(new THREE.BoxGeometry(1 * this.wordSize, 9 * this.wordSize, 1 * this.wordSize), materail)
      mesh6.position.set(-3 * this.wordSize, -1.5 * this.wordSize, 0 * this.wordSize)
      mesh6.rotation.set(0, 0, -0.025 * Math.PI)
      group.add(mesh6)

      group.position.set(7.5 * this.wordSize, -4.5 * this.wordSize, 0 * this.wordSize)
      return group
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
