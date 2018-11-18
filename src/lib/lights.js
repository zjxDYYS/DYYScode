/**
 * vue的插件，用来设置threejs的灯光lights
 * 使用此插件之前请确保引用three
 * @zjx 11月13日 qq 1728234468
 */
/* eslint-disable */
let lights = {
  init (scene, lights) {
    for(var k in lights){
      let param = lights[k]
      let light = this.addLight(param)
      if(light){
        scene.add(light)
      }
    }
  },
  addLight (p) { // 添加灯光
    switch (p.type) {
      case 'AmbientLight':// 环境光
        let hex1 = p.param.hex
        let AmbientLight = new THREE.AmbientLight(hex1, Number(p.param.intensity))
        AmbientLight.userData = p// 数据带到灯光上
        return AmbientLight
      case 'HemisphereLight':// 半球光
        let hex2 = p.param.hex
        let groundColor = p.param.groundColor
        let HemisphereLight = new THREE.HemisphereLight(hex2, groundColor, Number(p.param.intensity))
        HemisphereLight.userData = p// 数据带到灯光上
        return HemisphereLight
      case 'DirectionalLight':// 平行光
        let DirectionalLight = this.initDirectionalLight(p)
        return DirectionalLight
      case 'SpotLight':// 聚光灯
        let SpotLight = this.initSpotLight(p)
        return SpotLight
      case 'PointLight':// 点光源
        let hex4 = p.param.hex
        let PointLight = new THREE.PointLight(hex4, Number(p.param.intensity), Number(p.param.distance), Number(p.param.decay))
        PointLight.position.set(Number(p.position.x), Number(p.position.y), Number(p.position.z))
        PointLight.userData = p// 数据带到灯光上
        if (p.isHelper) {
          let helper = new THREE.PointLightHelper(PointLight, 5)
          PointLight.add(helper)
        }
        return PointLight
      case 'RectAreaLight':// 矩形面光
        let hex5 = p.param.hex
        let RectAreaLight = new THREE.RectAreaLight(hex5, Number(p.param.intensity), Number(p.param.width), Number(p.param.height))
        RectAreaLight.position.set(Number(p.position.x), Number(p.position.y), Number(p.position.z))
        RectAreaLight.rotation.set(Number(p.param.rotateX), Number(p.param.rotateY), Number(p.param.rotateZ))
        RectAreaLight.userData = p // 数据带到灯光上
        if (p.isHelper) {
          let areaHelper = new THREE.RectAreaLightHelper(RectAreaLight)
          RectAreaLight.add(areaHelper)
        }
        return RectAreaLight
    }
  },
  initDirectionalLight: function (param) { // 初始化直射光
    let hex3 = param.param.hex
    let light = new THREE.DirectionalLight(hex3, Number(param.param.intensity))
    if (param.shadow) {
      if (param.shadow.castShadow) {
        light.castShadow = true
      } else {
        light.castShadow = false
      }
      light.shadow.bias = Number(param.shadow.bias)
      light.shadow.camera.near = Number(param.shadow.cameraNear)
      light.shadow.camera.far = Number(param.shadow.cameraFar)
      light.shadow.camera.left = Number(param.shadow.cameraLeft)
      light.shadow.camera.right = Number(param.shadow.cameraRight)
      light.shadow.camera.top = Number(param.shadow.cameraTop)
      light.shadow.camera.bottom = Number(param.shadow.cameraBottom)
      light.shadow.mapSize.height = 4 * Number(param.shadow.shadowMapHeight)
      light.shadow.mapSize.width = 4 * Number(param.shadow.shadowMapWidth)
    }
    light.position.set(Number(param.position.x), Number(param.position.y), Number(param.position.z))
    light.userData = param// 数据带到灯光上
    if (param.isHelper) {
      // if(1){
      let helper = new THREE.DirectionalLightHelper(light, 5)
      light.add(helper)
    }
    return light
  },
  initSpotLight: function (param) { // 聚光灯
    let hex = param.param.hex
    let light = new THREE.SpotLight(hex, Number(param.param.intensity))
    light.angle = Number(param.param.angle)
    light.penumbra = Number(param.param.penumbra)
    light.decay = Number(param.param.decay)
    light.distance = Number(param.param.distance)
    light.power = Number(param.param.power)
    if (param.shadow) {
      light.castShadow = param.shadow.castShadow
      light.shadow.mapSize.height = param.shadow.shadowMapHeight
      light.shadow.mapSize.width = param.shadow.shadowMapWidth
      light.shadow.camera.near = param.shadow.cameraNear
      light.shadow.camera.far = param.shadow.cameraFar
      light.shadow.camera.fov = param.shadow.shadowCameraFov
    }
    light.position.set(Number(param.position.x), Number(param.position.y), Number(param.position.z))
    this[param.name] = light
    light.userData = param// 数据带到灯光上
    if (param.isHealper) {
      let helper = new THREE.SpotLightHelper(light, 5)
      light.add(helper)
    }
    return light
  }
}

export default {
  install: function (vm) {
    vm.prototype.$lights = lights
  }
}
