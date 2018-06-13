<template>
  <div id="mine">
    <div id="user">
      <img src="../../static/img/setting2.png" alt="">
      <div>
        <img src="../../static/img/chat3.png" alt="">
        <span>user</span>
      </div>
      <img src="../../static/img/chat3.png" alt="">
    </div>
    <ul id="XXX">
      <li v-for="(item, index) in XXX" v-bind:key="index" >
        <img v-bind:src="item.icon" alt="">
        <span>
          {{item.tag}}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      XXX: [
        {tag: '关注', icon: '../static/img/chat.png'},
        {tag: '订单', icon: '../static/img/words.png'},
        {tag: '评价', icon: '../static/img/message.png'}
      ]
    }
  }
}
</script>
<style>
#mine {
  width: 100%;
  height: 100%;
  display: flex;
}
#user{
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(0, 100, 153);
}

#user div{
  display: flex;
  flex-direction: column;
}

#XXX {
  display: flex;
  flex-direction: row;
}
#XXX li{
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 2rem;
  height: 2rem;
}
</style>
