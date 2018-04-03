<template>
  <li id="movie">
    <img v-bind:src="image" v-bind:alt="title">
    <div>
      <div class="title">{{ title }}</div>
      <div class="info">评分 : {{ score }}</div>
      <div class="info">导演 : {{ director }}</div>
      <ul v-for="(actor,index) in actors" v-bind:key="index"></ul>
    </div>
  </li>
</template>
<script>
export default {
  props: ['image', 'score', 'title', 'director', 'actors']
}
</script>
<style>
#movie {
  width:100%;
  padding: 3.3%;
  margin:0;
  color: yellow;
  display: flex;
  flex-direction: row;
  border-block-end: 1px solid black;
}
#movie img {
  width:22.2%;
  height: 70%;
  background-color: wheat;
  margin-right: 3%;
}

.title {
  font-size: 1.2rem;
  color: black;
}

.info {
  color:gray;
}
</style>
