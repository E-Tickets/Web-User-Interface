<template>
  <div>
    <div id="sign">
      <img src="../../static/img/signin/title.png" alt="">
      <form>
        <div>
          <img class="icon" src="../../static/img/signin/user.png" alt="">
          <input type="text" value="用户名">
        </div>
        <div>
          <img class="icon" src="../../static/img/signin/password.png" alt="">
          <input type="text" value="密码">
        </div>
        <input type="button" value="忘记密码">
        <div>
          <input type="button" value="登陆">
          <input type="button" value="注册">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
</script>
<style scope>
#sign{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-image: url('../../static/img/signin/background.png');
  background-repeat:no-repeat;
  background-size:100% 100%;
  z-index:2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#sign>img{
  width: 80%;
  margin-top: 12.5%;
  margin-bottom: 12.5%;
}

.icon{
  width: 2rem;
  height: 2rem;
}

</style>
