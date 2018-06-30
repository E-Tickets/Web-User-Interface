<template>
  <div>
    <div id="seatresearve">
      <div id="header">
        <img src="../../static/img/back.png" alt="" v-on:click="goBack()">
        <span>{{cinemaName}}</span>
        <img src="" alt="">
      </div>
      <div id="movieinfo">
        <span>{{movieName}}</span>
        <span>{{date}}</span>
        <span>{{time}}</span>
        <span>国语2D</span>
      </div>
      <div id="tips">
        提示信息：为了保证观影体验，请在电影开始前十五分钟取票进场
      </div>
      <div id="seat">
        <ul>
          <li v-for="seat in seats"></li>
        </ul>
        <span>已选作为</span>
        <div></div>
        <button></button>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      dates: [],
      schedules: [],
      seats: []
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  created () {
    for (let i = 0; i < 64; i++) {
      this.seats.push({occupy: true})
    }
    // get data
    // use the id in route parameter
    // this.$http.get(`api/schedules/movieid/${this.$route.params.mid}/cinemaid/${this.$route.params.tid}`)
  }
}
</script>
<style scope>
#seatresearve {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  color:black;
  background-color:white;
}
#seatresearve img{
  width:2rem;
  height:2rem;
}

#header {
  background-color: rgb(0, 102, 153);
  width:100%;
  height:6%;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  font-size:2rem;
  color: white;
}

#header img {
  margin:0.2rem;
}
#header>span{
  /* width:10%; */
  /* margin-left:40%; */
}

</style>
