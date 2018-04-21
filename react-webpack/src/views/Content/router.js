import asyncComponent from '../../commons/AsyncComponent'

const Home = asyncComponent(() => import('./Home'))
const About = asyncComponent(() => import('./About'))
const Topics = asyncComponent(() => import('./Topics'))

console.log(import('./About'), 'this is about')

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
