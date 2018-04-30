<template>
  <div id="app">
    <router-view
      id="contents"
      v-on:onMovieSelected="jumpToMovie($event)"
    ></router-view>
    <ul id="tags">
      <li>
        <!-- 使用router-link指向定义的path -->
        <router-link :to="{name: 'Home'}">
          电影
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Home'}">
          发现
        </router-link>
      </li>
      <li>
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
  methods: {
    jumpToMovie (item) {
      console.log('jump happend.')
      alert('123', item)
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
#contents {
  height: 90.7%;
}
#tags {
  height: 9.3%;
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
}
#tags li {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
