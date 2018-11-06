import Vue from 'vue'
import Router from 'vue-router'
let Home = () => {
  return import('../components/Home')
}
let User = () => {
  return import('../components/User')
}
// 关于编程页面的组件 懒加载
let Programme = () => {
  return import('../components/Programme')
}
let ProgramGuide = () => {
  return import('../view/programme/ProgramGuide')
}
let Program1 = () => {
  return import('../view/programme/Program1')
}
let Program2 = () => {
  return import('../view/programme/Program2')
}
let Program3 = () => {
  return import('../view/programme/Program3')
}
// 关于编程页面的组件 懒加载
let Login = () => {
  return import('../components/Login')
}

// 关于我页面的组件 懒加载
let About = () => {
  return import('../components/About')
}
let Study = () => {
  return import('../view/about/Study')
}
let Resume = () => {
  return import('../view/about/Resume')
}
let Work = () => {
  return import('../view/about/Work')
}
let Hobby = () => {
  return import('../view/about/Hobby')
}

// 关于CG的一些组件 懒加载
let Cg = () => {
  return import('../components/Cg')
}
let Illustration = () => {
  return import('../view/cg/Illustration')
}
let CourseCg = () => {
  return import('../view/cg/CourseCg')
}
let DesignCg = () => {
  return import('../view/cg/DesignCg')
}
let Portrait = () => {
  return import('../view/cg/Portrait')
}

// 关于传统绘画的一些组件 懒加载
let Drawing = () => {
  return import('../components/Drawing')
}
let Sketch = () => {
  return import('../view/drawing/Sketch')
}
let OilPainting = () => {
  return import('../view/drawing/OilPainting')
}
let Gouache = () => {
  return import('../view/drawing/Gouache')
}
let MarkerPainting = () => {
  return import('../view/drawing/MarkerPainting')
}

// 关于文章的一些组件  懒加载 合并文件
const Document = () => import(/* webpackChunkName: "Document */ '../components/Document')
const Slider = () => import(/* webpackChunkName: "Document */ '../view/document/Slider')

// 后台管理页面的一些组件 懒加载
let Management = () => {
  return import('../components/Management')
}
let MyProgect = () => {
  return import('../view/management/MyProgect')
}
let BackDoc = () => {
  return import('../view/management/BackDoc')
}
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // linkActiveClass: 'Nave-is-active',
  scrollBehavior (to, from, savePosition) { // 点击前进后退或者切换导航的时候
    console.log('要进入的目标路由对象')
    console.log(to) // 要进入的目标路由对象
    console.log('离开的目标路由对象')
    console.log(from) // 离开的目标路由对象
    console.log('记录滚动条的坐标')
    console.log(savePosition) // 记录滚动条的坐标
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      meta: {
        index: 0
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      alias: '/index',
      meta: {
        index: 0
      }
    },
    {
      path: '/Cg',
      component: Cg,
      children: [
        {
          path: '',
          name: 'Cg',
          component: Illustration,
          meta: {
            index: 1
          }
        },
        {
          path: '/DesignCg',
          name: 'DesignCg',
          component: DesignCg,
          meta: {
          }
        },
        {
          path: '/CourseCg',
          name: 'CourseCg',
          component: CourseCg,
          meta: {
          }
        },
        {
          path: '/Portrait',
          name: 'Portrait',
          component: Portrait,
          meta: {
          }
        }
      ]
    },
    {
      path: '/Drawing',
      component: Drawing,
      children: [
        {
          path: '',
          name: 'Drawing',
          component: Sketch,
          meta: {
            index: 2
          }
        },
        {
          path: '/OilPainting',
          name: 'OilPainting',
          component: OilPainting,
          meta: {
          }
        },
        {
          path: '/Gouache',
          name: 'Gouache',
          component: Gouache,
          meta: {
          }
        },
        {
          path: '/MarkerPainting',
          name: 'MarkerPainting',
          component: MarkerPainting,
          meta: {
          }
        }
      ]
    },
    {
      path: '/User/:type?/:userId?',
      name: 'User',
      component: User,
      meta: {
        index: 3
      }
    },
    {
      path: '/Programme',
      component: Programme,
      children: [
        {
          path: '', // 程序导向
          name: 'Programme',
          component: ProgramGuide,
          meta: {
            index: 3
          },
          children: [
            {
              path: '/Program1', // 程序1
              name: 'Program1',
              component: Program1
            },
            {
              path: '/Program2', // 程序2
              name: 'Program2',
              component: Program2
            },
            {
              path: '/Program3', // 程序3
              name: 'Program3',
              component: Program3
            }
          ]
        }
      ]
    },
    {
      path: '/Document',
      name: 'Document',
      components: {
        default: Document,
        slider: Slider
      },
      meta: {
        index: 4
      }
    },
    {
      path: '/About',
      component: About,
      children: [
        {
          path: '', // 默认的子路由
          name: 'About',
          component: Resume,
          meta: {
            index: 5
          }
        },
        {
          path: '/Study', // 学习组件
          name: 'Study',
          component: Study,
          meta: {
          }
        },
        {
          path: '/Work',
          name: 'Work',
          component: Work
        },
        {
          path: '/Hobby',
          name: 'Hobby',
          component: Hobby
        }
      ]
    },
    {
      path: '/Management',
      component: Management,
      meta: {
        login: true
      },
      children: [
        {
          path: '', // 默认的子路由
          name: 'MyProgect',
          component: MyProgect,
          meta: {
            index: 6,
            login: true
          }
        },
        {
          path: '/BackDoc',
          name: 'BackDoc',
          component: BackDoc,
          meta: {
            login: true
          }
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '*', // 重定向
      redirect: (to) => { // 动态配置路由目标
        console.log('重定向为：' + to)
        return '/Home'
      }
    }
  ]
})
