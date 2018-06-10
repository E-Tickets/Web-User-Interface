<template>
  <div id="dis">
    <div id="search">
      <img src="../../static/img/chat3.png" alt="">
      <span>发现</span>
      <img src="../../static/img/search.png" alt="">
    </div>
    <ul id="stags">
      <li v-for="(item, index) in subtags" v-bind:key="index" @click="changeContents(index)">
        <img v-bind:src="item.icon" alt="">
        <span>
          {{item.tag}}
        </span>
      </li>
    </ul>
    <ul id="newslist">
      <li
       is="new"
      ></li>
       <!-- v-for="(item, index) in movielist"
       v-bind:key="index"
       v-bind:image="item.image"
       v-bind:score="item.score"
       v-bind:title="item.title"
       v-bind:director="item.director"
       v-bind:actors="item.actors"
       v-bind:tags="item.tags"
       v-on:click="$emit('onMovieSelected', item)"
      ></li> -->
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      subtags: [{tag: '话题', icon: '../static/img/chat.png'}, {tag: '台词', icon: '../static/img/words.png'}, {tag: '资讯', icon: '../static/img/message.png'}],
      currentIndex: 0
    }
  },
  methods: {
    changeContents (index) {

    }
  }
}
</script>
<style>
#dis{
  width: 100%;
  height: 100%;
  font-size: 1.75rem;
}
#search {
  width: 100%;
  height: 8%;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: rgb(0, 100, 153);
}
img{
  height: 1.75rem;
  width: 1.75rem;
}
#stags{
  width:82%;
  height:11%;
  display: flex;
  justify-content: center;
  margin-left:9%;
  margin-right:9%;
}
#stags li {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#stags img {
  width:2rem;
  height:2rem;
}
#stags span{
  margin: 2px 0 2px 0;
}
</style>
