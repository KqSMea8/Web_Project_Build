// import asyncComponent from '../../commons/AsyncComponent'

// const Home = asyncComponent(() => import('./Home'))
// const About = asyncComponent(() => import('./About'))
// const Topics = asyncComponent(() => import('./Topics'))

import loadable from 'loadable-components'
import Loading from '../../components/Loading'

export const Home = loadable(() => import('./Home'), {
  LoadingComponent: Loading
})
export const About = loadable(() => import('./About'), {
  LoadingComponent: Loading
})
export const Topics = loadable(() => import('./Topics'), {
  LoadingComponent: Loading
})

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/topics',
    component: Topics
  }
]

export default routes
