<template>
  <div id="dis">
    <div id="search">
      <img src="../../static/img/chat3.png" alt="">
      <span>发现</span>
      <img src="../../static/img/search.png" alt="">
    </div>
    <ul id="stags">
      <li v-for="(item, index) in subtags" v-bind:key="index" @click="changeContents(index)">
        <img v-bind:src="item.icon" alt="">
        <span>
          {{item.tag}}
        </span>
      </li>
    </ul>
    <ul id="newlist">
      <li
       is="new"
       v-for="(item, index) in newslist"
       v-bind:key="index"
       v-bind:image="item.image"
       v-bind:title="item.title"
       v-bind:tag="item.tag"
       v-bind:category="item.category"
       v-bind:time="item.time"
      ></li>
    </ul>
  </div>
</template>
<script>
import New from '@/components/News'
export default {
  data () {
    return {
      subtags: [
        {tag: '话题', icon: '../static/img/chat.png'},
        {tag: '台词', icon: '../static/img/words.png'},
        {tag: '资讯', icon: '../static/img/message.png'}
      ],
      newslist: [
        {
          title: '真假难辨！《复联4》片名被曝光为《End Game》?',
          tag: '漫威',
          category: '资讯',
          time: '1小时前',
          image: '../static/img/new0001.jpg'
        },
        {
          title: '真假难辨！《复联4》片名被曝光为《End Game》?',
          tag: '漫威',
          category: '资讯',
          time: '1小时前',
          image: ''
        }
      ]
    }
  },
  components: {
    New
  },
  methods: {
    changeContents (index) {

    }
  }
}
</script>
<style>
#dis{
  width: 100%;
  height: 100%;
  font-size: 1.75rem;
}
#search {
  width: 100%;
  height: 8%;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: rgb(0, 100, 153);
}
#search img{
  height: 1.75rem;
  width: 1.75rem;
}
#stags{
  width:82%;
  height:11%;
  display: flex;
  justify-content: center;
  margin-left:9%;
  margin-right:9%;
}
#stags li {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#stags img {
  width:2rem;
  height:2rem;
}
#stags span{
  margin: 2px 0 2px 0;
}
#newlist {
  font-size: 1.75rem;
  height: 66.6%;
  overflow: auto;
  scroll-behavior: auto;
}
#newlist li {
  height: 36%;
}

</style>
