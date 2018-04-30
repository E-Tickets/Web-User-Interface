<template>
  <li id="movie">
    <img v-bind:src="image" v-bind:alt="title">
    <div id="detail">
      <div class="title">{{ title }}</div>
      <div class="info">豆瓣评分 &nbsp;: &nbsp; <span class="score">{{ score }}</span></div>
      <div class="info">导演 : {{ director }}</div>
      <div class="info">演员 : </div>
      <ul v-for="(actor, index) in actors" v-bind:key="index"></ul>
      <!-- <ul v-for="(tag,index) in tags" v-bind:key="index"></ul> -->
    </div>
    <span class="purchase" v-on:click="clickevent()">购票</span>
  </li>
</template>
<script>
export default {
  props: ['image', 'score', 'title', 'director', 'actors', 'tags'],
  methods: {
    clickevent () {
      alert()
    }
  }
}
</script>
<style>
#movie {
  width: 99%;
  margin:0;
  display: flex;
  flex-direction: row;
  border: 0.2rem solid rgba(00,33,66,0.6);
}
#movie img {
  height: 80%;
  width: 24%;
  background-color: wheat;
  margin: 4% 4% 4% 4%;
}

#detail {
  margin: 4% 0% 4% 0%;
  width: 68%;
}
.title {
  font-size: 2rem;
  color: black;
}

.info {
  margin-top: 4%;
  color:gray;
}
.score {
  font-size: 2rem;
  color: rgb(255, 200, 100);
}
.purchase {
  margin-top: 3.3%;
  float: right;
  width: 18%;
  height: 18%;
  border-radius: 50%;
  background-color: rgb(51, 153, 255);
  align-self: flex-start;
  text-align: center;
  color: white;
}
</style>
