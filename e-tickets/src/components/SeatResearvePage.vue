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
        <span>3号厅银幕</span>
        <div>
          <ul id="roworder"> <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li></ul>
        <ul id="seatarea" v-on:click="seatSelect()">
          <li v-for="seat in seats" v-bind:key="seat.index" v-bind:class="{occupy: seat.occupy}"></li>
        </ul>
        </div>
        <span>已选作为</span>
        <div></div>
        <button></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cinemaName: '进一种眷顾国际影城',
      movieName: '后来的你们',
      date: '6-23',
      time: '11:00',
      seats: [
      ]
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    seatSelect () {

    }
  },
  created () {
    for (let i = 0; i < 64; i++) {
      this.seats.push({
        ow: i / 8 + 1,
        column: i % 8 + 1,
        occupy: true
      })
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

#seat {
  width:100%;
  height: 50%;
  background-color: gray;
}

#seat span:first-child{
  width:20%;
  color:white;
  margin:0 40%;
}

#seat div {
  display:flex;
  flex-direction: row;
}

#roworder {
  box-sizing: border-box;
  width:2rem;
  border-radius:1rem;
  background-color: white;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
}

#roworder li {
  height: 2rem;
  margin:auto;
}
#seatarea {
  margin:0 auto;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items:center;
  width: 28rem;
  height:28rem;
}

#seatarea li{
  box-sizing:border-box;
  border: solid 0.25rem rgba(0,0,0,0);
  width:3.5rem;
  height:3.5rem;
}

.occupy {
  background: url('../../static/img/researve_seats/face_not_avaliable.png');
  background-size: 3rem;
  background-repeat:no-repeat;
}

.avaliable {
  background: url('../../static/img/researve_seats/face_avaliable.png');
  background-size: 3rem;
  background-repeat:no-repeat;
}

</style>
