<template>
  <div>
    <div id="detail">
      <div id="header">
        <img src="../../static/img/arrow.png" alt="" v-on:click="goBack()">
        <span>影片详情</span>
        <img src="../../static/img/message.png" alt="">
      </div>
      <div id="core">
        <div>
          <p>{{movie.title}}</p>
          <p>评分 9.0</p>
          <p>{{movie.tags}}</p>
          <p>{{movie.country}} | {{movie.length}}</p>
          <p>{{movie.time}} 在中国大陆上映</p>
        </div>
        <!-- 正式生产请使用这一个img标签 -->
        <!-- <img src="" alt=""> -->
        <!-- 测试时使用静态文件先 -->
        <img src="../../static/img/movie00001.jpg" alt="">
      </div>
      <div id="moviedetail">
        <div id="comment">
          <div>
          <p>{{comment.number_1}}</p>
          <p>人正在期待中</p>
          <button>
            <img src="../../static/img/setting2.png" alt="">
            期待
          </button>
        </div>
        <div>
          <p>{{comment.number_2}}</p>
          <p>人已吐槽</p>
          <button>
            <img src="../../static/img/chat3.png" alt="">
            吐槽
          </button>
        </div>
        </div>
        <article>
          {{movie.content}}
        </article>
        <hr>
        <div>
          <p>演职人员</p>
          <p>
            导演：{{movie.director}}
          </p>
          <p>
            主演: {{movie.actors}}
          </p>
        </div>
      </div>
      <button id="purchase">特惠抢票</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      movie: {
        title: '后来的你们',
        tags: '爱情 / 剧情',
        country: '中国大陆',
        length: '120',
        time: '2018-04-28',
        content: '这是一个爱情故事，关于一对异乡漂泊的年轻人。十年前，见清和小晓偶然地相识在归乡过年的火车上。两人怀揣着共同的梦想，一起在北京打拼，并开始了一段相聚相离的情感之路。十年后，见清和小晓在飞机上再次偶然重逢……',
        director: '刘若英',
        actors: '周冬雨'
      },
      comment: {
        number_1: 123321,
        number_2: 12332
      }
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
  }
}
</script>
<style scope>
#detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  color:black;
}

#detail img{
  width:2rem;
  height:2rem;
}

#header {
  background-color: rgb(0, 102, 153);
  width:100%;
  height:4rem;
  display:flex;
  flex-direction: row;
  align-items:center;
  font-size:2rem;
  color: white;
}

#header img {
  margin:0.2rem;
}
#header span{
  margin:auto;
}

#core {
  width: 100%;
  height: 31%;;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
}
#core div{
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  margin-left:1rem;
}
#core div :first-child{
  font-size:2rem;
}
#core p{
  margin-top:0.5rem;
  margin-bottom:0.5rem;
}
#core img {
  width:33%;
  height:80%;
  margin-right:3rem;
}

#comment {
  display:flex;
  flex-direction:row;
  justify-content:space-around;

}
</style>
