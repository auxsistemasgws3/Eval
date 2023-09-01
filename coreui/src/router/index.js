import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
/* const Dashboard = () => import('@/views/Dashboard') */
const Charts = () => import('@/views/charts/Charts')
const Widgets = () => import('@/views/widgets/Widgets')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
// const Login = () => import('@/views/user/Login')
const Login = () => import('@/views/user/Login')

//Settings
const Store = () => import('@/views/settings/Store')
const Users = () => import('@/views/settings/Users')
const ConfingEvaluaciones = () => import('@/views/settings/ConfigEvaluaciones')

//Evaluaciones
const Evaluaciones = () => import('@/views/evaluacion/Evaluaciones')

//Evaluaciones
const Resultados = () => import('@/views/resultadoEvaluaciones/Resultados')
const ResultadosMejores = () => import('@/views/resultadoEvaluaciones/ResultadosMejores')

//Sos
const Sos = () => import('@/views/sos/sos')
const ResultadosSos = () => import('@/views/sos/ResultadosSos')

//Kpi
const Kpi = () => import('@/views/kpi/kpi')
const solicitudKpi = () => import('@/views/kpi/solicitudKpi')

const Menus = () => import('@/views/menu/MenuIndex')
const CreateMenu = () => import('@/views/menu/CreateMenu')
const EditMenu = () => import('@/views/menu/EditMenu')
const DeleteMenu = () => import('@/views/menu/DeleteMenu')

const MenuElements = () => import('@/views/menuElements/ElementsIndex')
const CreateMenuElement = () => import('@/views/menuElements/CreateMenuElement')
const EditMenuElement = () => import('@/views/menuElements/EditMenuElement')
const ShowMenuElement = () => import('@/views/menuElements/ShowMenuElement')
const DeleteMenuElement = () => import('@/views/menuElements/DeleteMenuElement')

const Reservas = () => import('@/views/reservas/Reservar')

/* const Media = () => import('@/views/media/Media') */

Vue.use(Router)

let router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})


router.beforeEach((to, from, next) => {
  let roles = localStorage.getItem("roles");
  if (roles != null) {
    roles = roles.split(',')
  }
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (roles != null && roles.indexOf('Administrador') >= 0) {
      next()
    } else {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
  } else if (to.matched.some(record => record.meta.requiresUser)) {
    if (roles != null) {
      next()
    } else {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/evaluacion',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets,
          meta:{
            requiresUser: true
          }
        },
        {
          path: 'menu',
          meta: { label: 'Menu' },
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Menus,
              meta: {
                requiresAdmin: true
              }
            },
            {
              path: 'create',
              meta: { label: 'Create Menu' },
              name: 'CreateMenu',
              component: CreateMenu,
              meta: {
                requiresAdmin: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Menu' },
              name: 'EditMenu',
              component: EditMenu,
              meta: {
                requiresAdmin: true
              }
            },
            {
              path: ':id/delete',
              meta: { label: 'Delete Menu' },
              name: 'DeleteMenu',
              component: DeleteMenu,
              meta: {
                requiresAdmin: true
              }
            },
          ]
        },
        {
          path: 'menuelement',
          meta: { label: 'MenuElement' },
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: ':menu/menuelement',
              component: MenuElements,
              meta: {
                requiresAdmin: true
              }
            },
            {
              path: ':menu/menuelement/create',
              meta: { label: 'Create Menu Element' },
              name: 'Create Menu Element',
              component: CreateMenuElement,
              meta: {
                requiresAdmin: true
              }
            },
            {
              path: ':menu/menuelement/:id',
              meta: { label: 'Menu Element Details' },
              name: 'Menu Element',
              component: ShowMenuElement,
              meta: {
                requiresAdmin: true
              }
            },
            {
              path: ':menu/menuelement/:id/edit',
              meta: { label: 'Edit Menu Element' },
              name: 'Edit Menu Element',
              component: EditMenuElement,
              meta: {
                requiresAdmin: true
              }
            },
            {
              path: ':menu/menuelement/:id/delete',
              meta: { label: 'Delete Menu Element' },
              name: 'Delete Menu Element',
              component: DeleteMenuElement,
              meta: {
                requiresAdmin: true
              }
            },
          ]
        },
        //settings
        {
          path: 'settings',
          meta: { label: 'Configuración' },
          name: 'Settings',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'store',
              meta: { label: 'Sucursales' },
              name: 'Store',
              component: Store,
              meta: {
                requiresUser: true
              }
            },
            {
              path: 'users',
              meta: { label: 'Usuarios' },
              name: 'Users',
              component: Users,
              meta: {
                requiresUser: true
              }
            },
            {
              path: 'evaluacionesconfig',
              meta: { label: 'Configuracion Evaluaciones' },
              name: 'Config. Evaluaciones',
              component: ConfingEvaluaciones,
              meta: {
                requiresUser: true
              }
            },
            /* {
              path: 'resultados',
              meta: { label: 'Resultados de Evaluaciones' },
              name: 'Resultados',
              component: Resultados,
              meta: {
                requiresUser: true
              }
            }, */
          ]
        },
        //Evaluaciones
        {
          path: '/evaluacion',
          name: 'Evaluaciones',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              name: 'Evaluaciones',
              component: Evaluaciones,
              meta: {
                requiresUser: true
              }
            },
          ]
        },
          //Reservaciones
          {
            path: '/reservacion',
            name: 'Reservaciones',
            component: {
              render(c) { return c('router-view') }
            },
            children: [
              {
                path: '',
                name: 'Reservas',
                component: Reservas,
                meta: {
                  requiresUser: true
                }
              },
            ]
          },
        //Resultados Evaluaciones
        {
          path: '/resultadoEvaluaciones',
          name: 'Evaluaciones',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'evaluaciones',
              meta: { label: 'Resultados de Evaluaciones' },
              name: 'Resultados',
              component: Resultados,
              meta: {
                requiresUser: true
              }
            },
            {
              path: 'mejoresResultados',
              meta: { label: 'Mejores Resultados' },
              name: 'Mejores Resultados',
              component: ResultadosMejores,
              meta: {
                requiresUser: true
              }
            },
          ]
        },
        //SOS
        {
          path: '/sos',
          name: 'SOS',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'sos',
              meta: { label: 'SOS' },
              name: 'SOS',
              component: Sos,
              meta: {
                requiresUser: true
              }
            },
            {
              path: 'resultadosSos',
              meta: { label: 'Resultados SOS' },
              name: 'Resultados SOS',
              component: ResultadosSos,
              meta: {
                requiresUser: true
              }
            },
          ]
        },
        //KPI
        {
          path: '/kpi',
          name: 'KPI',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'kpi',
              meta: { label: 'KPI' },
              name: 'KPI',
              component: Kpi,
              meta: {
                requiresUser: true
              }
            },
            {
              path: 'solicitudKpi',
              meta: { label: 'Solicitud KPI' },
              name: 'Solicitud KPI',
              component: solicitudKpi,
              meta: {
                requiresUser: true
              }
            },
          ]
        },
      ]
    },

    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
      ]
    },
    {
      path: '/',
      redirect: '/login',
      name: 'Auth',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
      ]
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ]
}
