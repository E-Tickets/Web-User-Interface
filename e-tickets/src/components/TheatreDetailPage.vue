<template>
  <div>
    <div id="theatredetail">
      <div id="header">
        <img src="../../static/img/arrow.png" alt="" v-on:click="goBack()">
        <span>影院</span>
        <img src="" alt="">
      </div>
      <div id="name">
        <span>{{name}}</span>
        <img src="../../static/img/location.png" alt="">
      </div>
      <div id="sale">
        优惠信息
      </div>
      <div>
        <div id="date" >
          <span v-for="date in dates" v-bind:key="date.index">{{date.month}}月{{date.day}} {{date.describe}}</span>
        </div>
      </div>
      <div id="schedules">
          <div v-for="schedule in schedules" v-bind:key="schedule.index">
            <span>{{schedule.time}}</span>
            <span>国语3D</span>
            <span>￥{{schedule.price}}</span>
            <button>确定</button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      dates: [],
      schedules: []
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
        const theatre = data.body.data
        this.name = theatre[0].cinema_name
        theatre.forEach((schedule) => {
          this.schedules.push({
            time: schedule.time.slice(10, 16),
            price: schedule.price
          })
        })
        // how to change the id to name
      })
    const myDate = new Date()
    this.dates.push({
      month: myDate.getMonth() + 1,
      day: myDate.getDate(),
      describe: '今天'
    })
    myDate.setDate(myDate.getDate() + 1)
    this.dates.push({
      month: myDate.getMonth() + 1,
      day: myDate.getDate(),
      describe: '明天'
    })
    myDate.setDate(myDate.getDate() + 1)
    this.dates.push({
      month: myDate.getMonth() + 1,
      day: myDate.getDate(),
      describe: '后天'
    })
    console.log(this.dates)
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

#name {
  display:flex;
  flex-direction: row;
  font-size: 2rem;
  font-weight: 600;
  width:100%;
  height:8%;
}

#name span{
  box-sizing: border-box;
  margin: 1rem;
  width: 80%;
  border-right: 0.2rem solid gray;
}

#sale {
  box-sizing: border-box;
  width:90%;
  height:5%;
  margin: 1rem 5% 1rem 5%;
  font-size:1.75rem;
  border: 0.1rem solid rgb(255, 102, 0);
  color: rgb(255, 102, 0);
  background-color: rgba(255, 204, 102, 0.65);
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#date {
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  width:100%;
  height:6%;
}

#schedules div{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width:94%;
  height:5%;
  margin: 1rem 3% 1rem 3%;
}

</style>
