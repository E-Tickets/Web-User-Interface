<template>
  <div>
    <div id="detail">
      <div id="header">
        <img src="../../static/img/arrow.png" alt="">
        <span>发现</span>
        <img src="../../static/img/message.png" alt="">
      </div>
      <div>
        <p>title</p>
        <p>score</p>
        <p>tags</p>
        <p>{{country}} | {{length}}</p>
        <p>{{time}} 在中国大陆上映</p>
        <img src="" alt="">
      </div>
      <div>
        <div>
          <p>{{number_1}}</p>
          <p>人正在期待中</p>
          <button>
            <img src="../../static/img/setting2.png" alt="">
            期待
          </button>
        </div>
        <div>
          <p>{{number_2}}</p>
          <p>人已吐槽</p>
          <button>
            <img src="../../static/img/chat3.png" alt="">
            吐槽
          </button>
        </div>
        <article>
          {{content}}
        </article>
        <hr>
        <div>
          <p>演职人员</p>
          <p>
            导演：{{director}}
          </p>
          <p>
            主演: {{actors}}
          </p>
        </div>
      </div>
      <button id="purchase">特惠抢票</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['image', 'title', 'tag', 'category', 'time'],
  data () {
    return {

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
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  z-index: 2;
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
}

#header img {
  margin:0.2rem;
}
#header span{
  margin:auto;
}
</style>
