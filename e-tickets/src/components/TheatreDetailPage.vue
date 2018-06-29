<template>
  <div>
    <div id="theatredetail">
      <div id="header">
        <img src="../../static/img/arrow.png" alt="" v-on:click="goBack()">
        <span>影院</span>
          <img src="" alt="">
        </div>
          <span>{{name}}</span>
          <hr>
          <img src="../../static/img/location.png" alt="">
        <div>

        <div id="date" >
          <span v-for="date in dates" v-bind:key="date.index">{{date.month}}月{{date.day}} {{date.describe}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dates: [
        {
          month: '6',
          day: '25',
          describe: '今天'
        },
        {
          month: '6',
          day: '26',
          describe: '明天'
        },
        {
          month: '6',
          day: '27',
          describe: '后天'
        }
      ]
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
    // get data
    // use the id in route parameter
    this.$http.get(`api/schedules/movieid/${this.$route.params.mid}/cinemaid/${this.$route.params.tid}`)
      .then((data) => {
        console.log(data.body.data)
        // how to change the id to name
      })
  }
}
</script>
<style scope>
#theatredetail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  color:black;
  background-color:white;
}
#theatredetail img{
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
