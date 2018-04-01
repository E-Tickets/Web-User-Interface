<template>
  <div id="app">
    <router-view id="contents"></router-view>
    <ul id="tags">
      <li>
        <!-- 使用router-link指向定义的path -->
        <router-link :to="{name: 'Home'}">
          热映
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Home'}">
          待定
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Home'}">
          待定
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Mine'}">
          我的
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  width: 100%;
  height: 100%;
  color: #2c3e50;
  display: flex;
  flex-direction: column-reverse;
  /* justify-content: */
}

#contents {
  height: 90%;
}

#tags {
  margin: 0;
  padding: 0;
  height: 10%;
  display: flex;
  justify-content: center;
}

li {
  width:25%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
