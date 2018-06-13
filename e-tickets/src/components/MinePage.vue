<template>
  <div id="mine">
    <div id="user">
      <img class="iconimage" src="../../static/img/setting2.png" alt="">
      <div>
        <img id="usersnap" src="../../static/img/user2.png" alt="">
        <span>未登录</span>
      </div>
      <img class="iconimage" src="../../static/img/warning2.png" alt="">
    </div>
    <ul id="XXX">
      <li v-for="(item, index) in XXX" v-bind:key="index" >
        <img class="iconimage" v-bind:src="item.icon" alt="">
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
  font-size: 2rem;
  font-weight: 600;
  width: auto;
  padding: 2%;
  height: 23%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(0, 100, 153);
  text-align: center;
}

#user div{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin:auto;
}

#usersnap {
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  background-color: gray;
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

.iconimage {
  width: 2rem;
  height: 2rem;
}
</style>
