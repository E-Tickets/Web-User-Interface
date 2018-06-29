<template>
  <li id="movie" v-on:click="clickevent()">
    <img v-bind:src="image" v-bind:alt="title">
    <div id="detailinfo">
      <div class="title">{{ title }}</div>
      <!-- <div class="info">豆瓣评分 &nbsp;: &nbsp; <span class="score">{{ score }}</span></div> -->
      <div class="info">导演 : {{ director }}</div>
      <div class="info">主演 : {{actors }}</div>
      <!-- <ul v-for="(act, index) in actor" v-bind:key="index"></ul> -->
    </div>
    <span class="purchase">购票</span>
  </li>
</template>
<script>
export default {
  props: ['movieId', 'image', 'score', 'title', 'director', 'actors', 'tags'],
  methods: {
    clickevent (e) {
      const ev = e || window.event
      const target = ev.target || ev.srcElement
      console.log(target.nodeName)
      if (target.nodeName === 'SPAN') {
        // get the signed username
        // if none then push signin page
        this.$http.get('api/user/self')
          .then((data) => {
            // successful
            console.log(data.body.data.username)
            this.$router.push({name: 'Purchase', params: {id: this.movieId}})
          }, () => {
            // fail
            this.$router.push({name: 'Sign'})
          })
        console.log('Purchase:' + this.movieId)
        // todo this.$router.push({name: 'moviedetail', params: {id: this.movieId}})
      } else {
        this.$router.push({name: 'Moviedetail', params: {id: this.movieId}})
        // this.$router.push({path: '/moviedetail/:id', component: {id: this.movieId}})
      }
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

#detailinfo {
  margin: 4% 0% 4% 0%;
  width: 68%;
}
.title {
  font-size: 2rem;
  color: black;
}

.info {
  margin-top: 7%;
  color:gray;
}
.score {
  font-size: 2rem;
  color: rgb(255, 200, 100);
}
.purchase {
  position: relative;
  top: 3rem;
  right: 3.5rem;
  text-align: center;
  width: 18%;
  height: 2rem;
  border-radius: 0.2rem ;
  background-color: rgb(00,100,155);
  align-self: flex-start;
  text-align: center;
  color: white;
}
</style>
