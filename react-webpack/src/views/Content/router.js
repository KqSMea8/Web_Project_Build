// import asyncComponent from '../../commons/AsyncComponent'

// const Home = asyncComponent(() => import('./Home'))
// const About = asyncComponent(() => import('./About'))
// const Topics = asyncComponent(() => import('./Topics'))

import loadable from 'loadable-components'

export const Home = loadable(() => import('./Home'))
export const About = loadable(() => import('./About'))
export const Topics = loadable(() => import('./Topics'))

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
