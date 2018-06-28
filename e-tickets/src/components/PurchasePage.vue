<template>
  <div>
    <div id="purchase">
      <div id="header">
        <img src="../../static/img/arrow.png" alt="" v-on:click="goBack()">
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
          <span v-for="date in dates" v-bind:key="date.index">{{date.month}}月{{date.day}} {{date.describe}}</span>
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
          <div v-for="theatre in theatres" v-bind:key="theatre.index">
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
      cs: [],
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
      ],
      // filters: [
      //   {
      //     name: '区域'
      //   },
      //   {
      //     name: '区域'
      //   },
      //   {
      //     name: '区域'
      //   },
      //   {
      //     name: '区域'
      //   }
      // ],
      theatres: [
        {
          name: '金逸珠江国际影城（大学城）',
          price: '41',
          time: '22:00 23:00 02:00',
          location: '1.1'
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
    // todo: get data
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

</style>
