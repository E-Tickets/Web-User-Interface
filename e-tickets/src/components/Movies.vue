<template>
  <li id="movie">
    <img v-bind:src="image" v-bind:alt="title">
    <div id="detail">
      <div class="title">{{ title }}</div>
      <div class="info">评分 : {{ score }}</div>
      <div class="info">导演 : {{ director }}</div>
      <ul v-for="(actor,index) in actors" v-bind:key="index"></ul>
    </div>
    <span class="purchase">购票</span>
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
  width:20%;
  height: 70%;
  background-color: wheat;
  margin-right: 3%;
}

#detail {
  width: 50%;
}
.title {
  font-size: 1.5rem;
  color: black;
}

.info {
  color:gray;
}

.purchase {
  margin-top: 3.3%;
  float: right;
  width: 18%;
  height: 15%;
  border-radius: 25%;
  background-color: rgb(51, 153, 255);
  align-self: flex-start;
  text-align: center;
  color: white;
}
</style>
