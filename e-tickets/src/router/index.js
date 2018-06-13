import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DiscoverPage from '@/components/DiscoverPage'
import MinePage from '@/components/MinePage'
import SignInOnPage from '@/components/SignInOnPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/discover',
      name: 'Discover',
      component: DiscoverPage
    },
    {
      path: '/mine',
      name: 'Mine',
      component: MinePage
    },
    {
      path: '/sign',
      name: 'Sign',
      component: SignInOnPage
    }
  ]
})
