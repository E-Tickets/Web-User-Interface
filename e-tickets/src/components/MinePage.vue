<template>
  <div>
    <div>
      <img src="../../static/img/setting2.png" alt="">
      <div>
        <img src="../../static/img/chat3.png" alt="">
        <span>user</span>
      </div>
      <img src="../../static/img/chat3.png" alt="">
    </div>
    <ul>
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
      subtags: [
        {tag: '话题', icon: '../static/img/chat.png'},
        {tag: '台词', icon: '../static/img/words.png'},
        {tag: '资讯', icon: '../static/img/message.png'}
      ]
    }
  }
}
</script>
<style>
</style>
