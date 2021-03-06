import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DiscoverPage from '@/components/DiscoverPage'
import MinePage from '@/components/MinePage'
import SignInPage from '@/components/SignInPage'
import SignUpPage from '@/components/SignUpPage'
import MovieDetailPage from '@/components/MovieDetailPage'
import PurchasePage from '@/components/PurchasePage'
import TheatreDetailPage from '@/components/TheatreDetailPage'
import SeatResearvePage from '@/components/SeatResearvePage'

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
      component: SignInPage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpPage
    },
    {
      // id means the movie id, for that we can use this page for every movie
      path: '/moviedetail/:id',
      name: 'Moviedetail',
      component: MovieDetailPage
    },
    {
      path: '/moviepurchase/:id',
      name: 'Purchase',
      component: PurchasePage
    },
    {
      path: '/movie/:mid/theatre/:tid',
      name: 'TheatreDetail',
      component: TheatreDetailPage
    },
    {
      path: '/movie/:mid/theatre/:tid/:sid',
      name: 'SeatResearve',
      component: SeatResearvePage
    }
  ]
})
