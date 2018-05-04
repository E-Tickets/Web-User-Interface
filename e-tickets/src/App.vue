<template>
  <div id="app">
    <router-view
      id="contents"
      v-on:onMovieSelected="jumpToMovie($event)"
    ></router-view>
    <ul id="tags">
      <li v-for="(item, index) in tags" v-bind:key="index">
        <img v-bind:src="item.icon" alt="">
        <span class="active">
          {{item.tag}}
        </span>
      </li>
      <li >
        <!-- 使用router-link指向定义的path -->
        <img src="./assets/movie.png" alt="">
        <router-link :to="{name: 'Home'}">
          电影
        </router-link>
      </li>
      <li @click="goDiscoverPage()">
        <img src="./assets/news2.png" alt="">
        <span class="active">
          发现
        </span>
      </li>
      <li>
        <img src="./assets/user2.png" alt="">
        <router-link :to="{name: 'Home'}">
          我的
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tags: [{tag:'电影',icon:'./assets/movie.png'},{tag:'发现',icon:'./assets/news2.png'},{tag:'我的',icon:'./assets/user2.png'}],
      currentIndex: 0
    }
  },
  methods: {
    jumpToMovie (item) {
      console.log('jump happend.')
      alert('123', item)
    },
    goDiscoverPage () {
      this.$router.push('name')
    }
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
#contents {
  height: 90.7%;
  /* scroll-behavior: auto; */
}
#tags {
  border-top: gray 0.4rem solid;
  height: 9.3%;
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  z-index: 10;
}
#tags li {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#tags img {
  height: 1.75rem;
  width: 1.75rem;
}

@media screen and (max-width: 450px){
  html {
    font-size: 8px;
  }
}
@media screen and (min-width: 539px){
  html {
    font-size: 12px;
  }
}
@media screen and (min-width: 719px){
  html {
    font-size: 16px;
  }
}
</style>
