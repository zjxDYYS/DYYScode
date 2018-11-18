/**
 * vue的插件，用来设置threejs的材质 material
 * 使用此插件之前请确保引用three
 * @zjx 11月13日 qq 1728234468
 */
/* eslint-disable */
let material = {
  defMat: { // 默认材质数据
    type: 'MeshStandardMaterial',
    name: '标准材质(MeshStandardMaterial)',
    color: '#ffffff', // diffuse
    map: undefined,
    alphaMap: undefined,
    repeat: {x: 1, y: 1},
    offset: {x: 0, y: 0},
    roughness: 0.5,
    roughnessMap: undefined,
    metalness: 0.5,
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
    normalMap: undefined,
    normalScale: 1,
    displacementMap: undefined,
    displacementScale: 1,
    displacementBias: 0,
    envMap: undefined,
    envMapIntensity: 1.0
  },
  textureLoader: new THREE.TextureLoader(),
  changeMaterial (material,name,value,repeat) { // 更改材质参数
    let me = this
    let select = function(material,name,value,repeat){
      // switch (name) {
      //   case 'map': // map
      //   default:
      //     me.changeMaterialMap(material, value,repeat)
      //     break
      // }
      me.changeMaterialMap(material,name,value,repeat)
    }
    if (material && material.length) { // 多材质数组
      for (var k in material) {
        select(material[k],name,value,repeat)
      }
    } else { // 单材质
      select(material,name,value,repeat)
    }
  },
  changeMaterialMap:function(material, name, imageDir,repeat){//加载材质
    let me = this
    let callBack = function(texture){
      if(material[name] && material[name].encoding) texture.encoding = material[name].encoding
      if(material[name] && material[name].flipY) texture.flipY = material[name].flipY
      if(material[name] && material[name].format) texture.format = material[name].format
      if(material[name] && material[name].generateMipmaps) texture.generateMipmaps = material[name].generateMipmaps
      if(material[name] && material[name].magFilter) texture.magFilter = material[name].magFilter
      if(material[name] && material[name].minFilter) texture.minFilter = material[name].minFilter
      if(material[name] && material[name].premultiplyAlpha) texture.premultiplyAlpha = material[name].premultiplyAlpha
      if(material[name] && material[name].unpackAlignment) texture.unpackAlignment = material[name].unpackAlignment
      if(material[name] && material[name].wrapS) texture.wrapS = material[name].wrapS
      if(material[name] && material[name].wrapT) texture.wrapT = material[name].wrapT
      if(material[name] && name === 'normalMap'){
        if(material.normalScale && material.normalScale.x && material.normalScale.y){

        }else {
          material.normalScale = new THREE.Vector2( 1,1 )
        }
      }
      if(repeat){
        texture.repeat = new THREE.Vector2( repeat.x,repeat.y )
      }
      if(material[name]) material[name].dispose()
      material[name] = texture
      material.needsUpdate = true
    };
    this.loadTexture(imageDir,callBack) /*THREE.ImageUtils.loadTexture(imageDir);*/
  },
  changeMaterialOpacity (material, value) {// 更改材质透明度
    let me = this
    let change = function(material,value){
      material.opacity = value
      material.transparent = true
    }
    if (material && material.length) { // 多材质数组
      for (var k in material) {
        change(material[k],value)
      }
    } else { // 单材质
      change(material,value)
    }
  },
  loadTexture (imgDir,callBack){
    this.textureLoader.load( imgDir, function (texture) {
      if(callBack){
        callBack(texture)
      }
    });
  }, //加载贴图，加载完成后刷新场景
  applyMeshMtl (mesh, material) { // 给Mesh模型附上材质,此处只给mesh附材质
    if (mesh.type === 'Mesh') {
      if (mesh.material && mesh.material.length) { // 多材质数组
        for (var k in mesh.material) {
          mesh.material[k] = this.getMtl(material)
        }
        console.log('一个mesh 目前只支持一个material ')
      } else { // 单材质
        mesh.material = this.getMtl(material)
      }
    } else {
      console.log('material插件出错 applyMeshMtl 给Mesh模型附上材质,此处只给mesh附材质!')
    }
  },
  getMtl (parm) { // 获取材质
    let material
    switch (parm.type) {
      case 'MeshLambertMaterial':
        material = new THREE.MeshLambertMaterial({
          color: parm.color
          // combine: THREE.MixOperation,
        })
        break
      case 'MeshStandardMaterial':
        var value = {}
        if (parm.color !== undefined) {
          value.color = parm.color
        }
        if (parm.roughness !== undefined) {
          value.roughness = parm.roughness
        }
        if (parm.metalness !== undefined) {
          value.metalness = parm.metalness
        }
        if (parm.lightMapIntensity !== undefined) {
          value.lightMapIntensity = parm.lightMapIntensity
        }
        if (parm.aoMapIntensity !== undefined) {
          value.aoMapIntensity = parm.aoMapIntensity
        }
        if (parm.emissive !== undefined) {
          value.emissive = parm.emissive
        }
        if (parm.emissiveIntensity !== undefined) {
          value.emissiveIntensity = parm.emissiveIntensity
        }
        if (parm.bumpScale !== undefined) {
          value.bumpScale = parm.bumpScale
        }
        if (parm.normalScale !== undefined) {
          value.normalScale = parm.normalScale
        }
        if (parm.displacementScale !== undefined) {
          value.displacementScale = parm.displacementScale
        }
        if (parm.displacementBias !== undefined) {
          value.displacementBias = parm.displacementBias
        }
        if (parm.envMapIntensity !== undefined) {
          value.envMapIntensity = parm.envMapIntensity
        }

        material = new THREE.MeshStandardMaterial(value)
        if (parm.isDefault) {
          this.material.defMaterial = this.material[parm.name]
          this.defMaterialData = value
          // 默认的材质先设置为墙材质（金属性为0，粗糙度为1）
          this.material.defMaterial.roughness = 1
          this.material.defMaterial.metalness = 0
          this.defMaterialData.roughness = 1
          this.defMaterialData.metalness = 0
        }
        break
      case 'MeshPhongMaterial':
        material = new THREE.MeshPhongMaterial({
          shininess: parm.shininess,
          color: parm.color,
          emissive: parm.emissive,
          specular: parm.specular,
          bumpScale: parm.bumpScale
        })
        break
    }
    return material
  }
}

export default {
  install: function (vm) {
    vm.prototype.$material = material
  }
}
