<template>
  <div>
    <div id="sign">
      <img src="../../static/img/signin/title.png" alt="">
      <form>
        <span>
          <img class="icon" src="../../static/img/signin/user.png" alt="">
          <input type="text" value="用户名">
        </span>
        <span>
          <img class="icon" src="../../static/img/signin/password.png" alt="">
          <input type="text" value="密码">
        </span>
        <input id="forget" type="button" value="忘记密码?">
        <div>
          <input id="signin" type="button" value="登陆">
          <input id="signup" type="button" value="注册">
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
  /* space-around; */
  align-items: center;
}

#sign>img{
  width: 60%;
  /* margin-top: 12.5%; */
  /* margin-bottom: 12.5%; */
}

.icon{
  width: 2rem;
  height: 2rem;
}

form span{
  box-sizing: border-box;
  width: 30rem;
  height: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border:1px solid rgb(0, 102, 153);
  border-radius: 1.7rem;
  margin-top:5rem;
}

span>input{
  color: rgb(102, 102, 102);
  padding:1rem;
  width:24rem;
  background:rgba(255,255,255,0);
  border:none;
}

span>input:focus{
  outline:none;
}

#forget {
  margin-top:1rem;
  margin-bottom:1rem;
  margin-left:70%;
  background:none;
  color: rgb(102, 102, 102);
  border:none;
}

div>input {
  margin:auto;
  color:white;
  box-sizing: border-box;
  width:12rem;
  height:4rem;
  padding:none;
  border:0;
  border-radius:1.1rem;
  font-size:2rem;
}

#signin{
  background:rgb(0, 102, 153);
}
#signup{
  background:rgb(204, 51, 0);
}
form div{
  display:flex;
  flex-direction:row;
  justify-content: space-around;
}
</style>
