<template>
  <div>
    <div id="purchase">
      <div id="header">
        <img src="../../static/img/back.png" alt="" v-on:click="goBack()">
        <span>购票</span>
          <img src="../../static/img/location.png" alt="">
        <!-- <div id="location"> -->
          <!-- <img src="../../static/img/location.png" alt=""> -->
          <!-- <span>广州</span> -->
          <!-- <img id="arrow" src="../../static/img/downArrow.png" alt=""> -->
        <!-- </div> -->
      </div>
      <div id="cdetail">
        <div id="date" >
          <span v-for="date in dates" v-bind:key="date.index" v-on:click="datefilter(date.month, date.day)">{{date.month}}月{{date.day}} {{date.describe}}</span>
        </div>
        <hr>
        <div id="filter">
          <span>区域</span>
          <hr>
          <span>品牌</span>
          <hr>
          <span>时段</span>
          <hr>
          <span>距离近</span>
          <!-- <span v-for="filter in filters" v-bind:key="filter.index">{{filter.name}}</span> -->
        </div>
        <hr>
        <div id="theatre" >
          <div v-for="theatre in filteredTheatres" v-bind:key="theatre.index" v-on:click="jumpToThertre(theatre.id)">
            <div>
              <p>{{theatre.name}}</p>
              <p>￥{{theatre.price}}起</p>
              <p>近期场次 :{{theatre.time}}</p>
            </div>
            <p>{{theatre.location}}km</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dates: [],
      targetDate: '',
      theatres: []
      // theatres: [
      //   {
      //     id: 9,
      //     name: 'item.cinema_name',
      //     price: 'lowPrice',
      //     time: '12:00',
      //     date: '6-30',
      //     location: 1.3
      //   },
      //   {
      //     id: 9,
      //     name: 'item.cinema_name',
      //     price: 'lowPrice',
      //     time: '12:00',
      //     date: '6-30',
      //     location: 1.3
      //   },
      //   {
      //     id: 9,
      //     name: 'item.cinema_name',
      //     price: 'lowPrice',
      //     time: '12:00',
      //     date: '6-30',
      //     location: 1.3
      //   }
      // ]
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    jumpToThertre (thertreId) {
      this.$router.push({name: 'TheatreDetail', params: {mid: this.$route.params.id, tid: thertreId}})
    },
    datefilter (month, day) {
      this.targetDate = month + '-' + day
    }
  },
  created () {
    // get data
    // use the id in route parameter
    this.$http.get(`api/schedules/movieid/${this.$route.params.id}`)
      .then((data) => {
        console.log(data.body.data)
        const cinemas = data.body.data
        cinemas.forEach((item) => {
          let lowPrice = 9999
          let dates = []
          let date = ''
          let time = ''
          item.schedules.forEach((schedule) => {
            lowPrice = lowPrice < schedule.price ? lowPrice : schedule.price
            if (date !== '' && date.indexOf(schedule.time.slice(5, 10)) === -1) {
              dates.push({date: date, time: time})
              console.log(date)
              time = ''
            }
            date = schedule.time.slice(5, 10)
            time = time + schedule.time.slice(10, 16)
          })
          dates.push({date: date, time: time})
          dates.forEach(element => {
            this.theatres.push({
              id: item.cinema_id,
              name: item.cinema_name,
              price: lowPrice,
              time: element.time,
              date: element.date,
              location: 1.3
            })
          })
          console.log(this.theatres)
        })
        // how to change the id to name
      }, () => {
        //
      })
    // SET DATE
    const myDate = new Date()
    const nowMonth = myDate.getMonth() + 1
    this.targetDate = nowMonth < 10 ? `0${nowMonth}` : nowMonth
    // console.log(this.targetDate)
    this.targetDate = this.targetDate + '-' + (myDate.getDate() < 10 ? `0${myDate.getDate()}` : myDate.getDate())
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
    this.dates.forEach((item) => {
      item.month = item.month < 10 ? '0' + item.month : item.month
      item.day = item.day < 10 ? '0' + item.day : item.day
    })
  },
  computed: {
    filteredTheatres: function () {
      return this.theatres.filter((theatre) => {
        console.log(this.targetDate)
        return theatre.date.match(this.targetDate)
      })
    }
  }
}
</script>
<style scope>
#purchase {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  color:black;
  background-color:white;
}
#purchase img{
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

#cdetail{
  width:100%;
  height:94%;
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

#filter {
  font-size:1.75rem;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

#filter span{
  margin:0 2rem 0 2rem;
}

#theatre>div{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0 2rem 0 2rem;
  border-bottom:0.2rem solid gray;
}

</style>
