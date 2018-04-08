<template>
  <div id="hot">
    <div id="swipe">
      todo: swipe
    </div>
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
          image: 'url2',
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
  }
}
</script>
<style>
  #swipe {
    height: 25%;
    color: red;
    background-color: #00f0f0;
  }
  #movielist {
    height: 75%;
  }
  #movielist li {
    height: 30%;
  }
</style>
