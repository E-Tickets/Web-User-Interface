<template>
  <div>
    <div id="search">
      <div id="location">
        <img src="../../static/img/location.png" alt="">
        <span>广州</span>
        <img id="arrow" src="../../static/img/downArrow.png" alt="">
      </div>
      <div id="searchinput">
        <img src="../../static/img/search.png" alt="">
        <input type="text" name="" id="">
        <img src="../../static/img/sacnSquare.png" alt="">
      </div>
    </div>
    <div id="swipe">
      <transition-group tag="ul" name="list">
        <li
        v-for="(item, index) in slideList"
        v-bind:key="index"
        v-show="index===currentIndex"
        @mouseenter="stop"
        @mouseleave="go"
        >
        <!--
          use v-show to control whith one to display, and set timeout to change currentIndex.
          add event mousenter and mouseleave to stop and continue the swipe
        -->
          <a v:bind:href="item.clickUrl">
            <img class="swipeinamge" v-bind:src="item.image" v-bind:alt="item.detail">
          </a>
        </li>
      </transition-group>
      <div id="carousel-items">
        <span
        v-for="(item,index) in slideList.length"
        v-bind:key="index"
        :class="{'active':index===currentIndex}"
        @mouseover="change(index)"></span>
      </div>
    </div>
    <ul id="subtags">
      <li><a href="">正在热映</a></li>
      <li><a href="">即将上映</a></li>
      <li><a href="">我的关注</a></li>
    </ul>
    <ul id="movielist">
      <li
       is="movie"
       v-for="(item, index) in movielist"
       v-bind:key="index"
       v-bind:movieId="item.movieId"
       v-bind:image="item.poster"
       v-bind:title="item.title"
       v-bind:director="item.director"
       v-bind:actors="item.actors"
       v-bind:tags="item.tags"
       v-on:click="onMovieSelected(item.movieId)"
      ></li>
    </ul>
  </div>
</template>
<script>
import Movie from '@/components/Movies'
export default {
  data () {
    return {
      slideList: [{
        clickUrl: '#',
        detail: '001',
        image: '/static/img/swipe00001.jpg'
      },
      {
        clickUrl: '#',
        detail: '002',
        image: '/static/img/swipe00002.jpg'
      },
      {
        clickUrl: '#',
        detail: '003',
        image: '/static/img/swipe00003.jpg'
      }],
      currentIndex: 0,
      timer: '',
      movielist: ''
      // under is for local test
      // movielist: [
      //   {
      //     movieId: '000012',
      //     image: '/static/img/movie00001.jpg',
      //     score: '9.2',
      //     title: '头号玩家',
      //     director: '斯皮尔伯格',
      //     actors: '泰伊·谢里丹 奥莉维亚·库克'
      //     // tags: ['动作', '科幻', '冒险']
      //   },
      //   {
      //     movieId: '123321',
      //     image: '/static/img/movie00001.jpg',
      //     score: '8.9',
      //     title: '环太平洋:雷霆再起',
      //     director: '斯蒂文·S·迪奈特',
      //     actors: '泰伊·谢里丹'
      //     // tags: ['动作', '科幻', '冒险']
      //   },
      //   {
      //     movieId: '123311',
      //     image: '/static/img/movie00001.jpg',
      //     score: '8.9',
      //     title: '环太平洋:雷霆再起',
      //     director: '斯蒂文·S·迪奈特',
      //     actors: '泰伊·谢里丹'
      //     // tags: ['动作', '科幻', '冒险']
      //   }
      // ]
    }
  },
  components: {
    Movie
  },
  methods: {
    go () {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    },
    stop () {
      clearInterval(this.timer)
      this.timer = null
    },
    change (index) {
      this.currentIndex = index
    },
    autoPlay () {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    },
    onMovieSelected (id) {
      alert(id)
      console.log('this movie: ' + id)
    }
  },
  created () {
    // set play time interval
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
    // get the hot movie data
    this.$http.get('api/movies/status/1')
      .then((data) => {
        const movies = data.body.data.movies
        movies.forEach((item) => {
          // use reduce: array to string
          item.actors = item.actors.reduce((acc, item) => acc + ' ' + item)
          item.movieId = item.movie_id
        })
        console.log(movies)
        this.movielist = movies
      })
    // this.$http.jsonp('api/movies/status/1')
    //   .then(function (response) {
    //     console.log(response.data)
    //   })
  }
}

</script>
<style>
  #search {
    width: 100%;
    height: 8%;
    font-size: 1.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
    background-color: rgb(0, 100, 153);
  }
  #location {
    width: 20%;
    height: 43%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  #location #arrow {
    height: 1rem;
    width: 1rem;
  }
  #location img{
    height: 1.75rem;
    width: 1.75rem;
  }
  #searchinput{
    height: 49%;
    width: 67%;
    border: black solid 1px;
    border-radius: 1.25rem;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #searchinput img{
    width: 1.75rem;
    height: 67%;
  }
  #searchinput input{
    width: 80%;
    border:none;
    padding: 0;
  }
  #searchinput input:focus{
    outline-offset: 0;
    outline: none;
  }
  #swipe {
    height: 19%;
    color: red;
  }
  #swipe ul {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  #swipe li {
    width: 100%;
    height: 100%;
  }
  #carousel-items {
    position: relative;
    bottom: 2rem;
    width: 100%;
    height: 2rem;
    z-index: 10;
    text-align: center;
  }
  #carousel-items span {
    display: inline-block;
    height: 1.75rem;
    width: 1.75rem;
    background-color: #b2b2b2;
    cursor: pointer;
    margin:0 0.5rem;
    border-radius: 0.8725rem;
  }
  #carousel-items .active {
    background-color: #6d6d6d;
  }

  .list-enter-to {
    transition: all 1s ease;
    transform: translateX(0);
  }
  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }
  .list-enter {
    transform: translateX(100%)
  }
  .list-leave {
    transform: translateX(0)
  }
  .swipeinamge {
    width:100%;
  }

  #subtags {
    border: 0.2rem solid rgba(00,33,66,0.6);
    width:99%;
    height: 6%;
    display: flex;
    flex-direction:row;
    font-size: 1.75rem;
  }
  #subtags li{
    margin:auto;
  }
  #subtags a {
    color: rgb(00,33,66);
  }

  #movielist {
    height: 66.6%;
    overflow: auto;
    scroll-behavior: auto;
  }
  #movielist li {
    height: 36%;
  }
</style>
