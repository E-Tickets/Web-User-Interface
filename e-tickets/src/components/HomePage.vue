<template>
  <div id="hot">
    <div id="search"></div>
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
    </div>
    <ul id="subtags">
      <li>正在热映</li>
      <li>即将上映</li>
      <li>我的关注</li>
    </ul>
    <ul id="movielist">
      <li
       is="movie"
       v-for="(item, index) in movielist"
       v-bind:key="index"
       v-bind:image="item.image"
       v-bind:score="item.score"
       v-bind:title="item.title"
       v-bind:director="item.director"
       v-bind:actors="item.actors"
       v-bind:tags="item.tags"
       v-on:click="$emit('onMovieSelected', item)"
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
        image: '/static/img/swipe00002.jpeg'
      },
      {
        clickUrl: '#',
        detail: '003',
        image: '/static/img/swipe00003.png'
      }],
      currentIndex: 0,
      timer: '',
      movielist: [
        {
          mid: '000012',
          image: '/static/img/movie00001.jpg',
          score: '9.2',
          title: '头号玩家',
          director: '斯皮尔伯格',
          actors: ['泰伊·谢里丹', 'others'],
          tags: ['动作', '科幻', '冒险']
        },
        {
          image: '/static/img/movie00001.jpg',
          score: '8.9',
          title: '环太平洋:雷霆再起',
          director: '斯蒂文·S·迪奈特',
          actors: ['泰伊·谢里丹'],
          tags: ['动作', '科幻', '冒险']
        }
      ]
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
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
  }
}
</script>
<style>
  #search {
    height: 8%;
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
  }
  #swipe li {
    width: 100%;
    height: 100%;
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
  }
  #subtags li{
    margin:auto;
  }
  #movielist {
    height: 67%;
  }
  #movielist li {
    height: 36%;
  }
</style>
