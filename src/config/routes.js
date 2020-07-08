// Containers
import { Battle, Home, Popular, Result } from '../containers'

const routes = [{
  component: Home,
  name: 'Home',
  path: '/'
}, {
  component: Battle,
  name: 'Battle',
  path: '/battle'
}, {
  component: Popular,
  name: 'Popular',
  path: '/popular'
}, {
  component: Result,
  path: '/battle/result'
}]

export default routes
