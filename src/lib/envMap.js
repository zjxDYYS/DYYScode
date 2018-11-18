/**
 * vue的插件，用来设置threejs的灯光 envMap
 * 使用此插件之前请确保引用three
 * @zjx 11月13日 qq 1728234468
 */
/* eslint-disable */
let envMap = {
  creatEnvMap (envMapImg) {
    if (envMapImg) {
      let path
      let format
      let urls = []

      if (envMapImg.imgPath) {
        path = envMapImg.imgPath
      }

      if (envMapImg.format) {
        format = envMapImg.format
      }

      if (envMapImg.imgName[0] && envMapImg.imgName.length >= 6) {
        for (let i in envMapImg.imgName) {
          // 左右上下前后
          urls.push(path + envMapImg.imgName[i] + '.' + format)
        }
      } else if (envMapImg.imgName && !envMapImg.imgName[0]) {
        for (let i = 0; i < 6; i++) {
          // 一张图 左右上下前后
          urls.push(path + envMapImg.imgName + '.' + format)
        }
      }
      // eslint-disable-next-line
      return THREE.ImageUtils.loadTextureCube(urls, THREE.CubeReflectionMapping) // 创建.loadTextureCube()对象
    }
  },
  applyEnvMap: function (obj, envMapImg) {
    /**
     * envMapImg = {
     *     imgPath: url,    //(String) 贴图Base路径
     *     imgName: name(s),  //(String/Array) 贴图名字
     *     format: type     //(String) 贴图类型 如png、jpg等
     * }
     * */
    let me = this
    let findMesh = function (obj) {
      if (obj) {
        if (obj.type === "Object3D" || obj.type === "Scene"){
          if(obj.children && obj.children.length > 0){
            for(let i in obj.children){
              findMesh(obj.children[i])
            }
          }
        }else if(obj.type === "Mesh"){
          obj.material.envMap = me.creatEnvMap(envMapImg)
          obj.material.needsUpdate = true
          if(obj.children && obj.children.length > 0){
            for(let i in obj.children){
              findMesh(obj.children[i])
            }
          }
        }
      }
    }
    findMesh(obj);

  }
}

export default {
  install: function (vm) {
    vm.prototype.$envMap = envMap
  }
}
