<template>
  <div>
    <div id="detail">
      <div id="header">
        <img src="../../static/img/chat3.png" alt="">
        <span>发现</span>
        <img src="../../static/img/search.png" alt="">
      </div>
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
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  z-index:2;
}
</style>
