<template>
  <div>
    <div id="signup">
      <img src="../../static/img/signin/title.png" alt="">
      <form>
        <span>
          <img class="icon" src="../../static/img/signup/user.png" alt="">
          <input v-model="username" v-input="" type="text" />
        </span>
        <span>
          <img class="icon" src="../../static/img/signup/nickname.png" alt="">
          <input v-model="nickname" v-input type="text" />
        </span>
        <span>
          <img class="icon" src="../../static/img/signup/password.png" alt="">
          <input v-model="password" v-input="password" type="text" />
        </span>
        <span>
          <img class="icon" src="../../static/img/signup/ensure.png" alt="">
          <input v-model="passwordconfirm" v-input="password" type="text" />
        </span>
        <div>
          <input id="signupbutton" type="button" value="完成注册" v-on:click="signUp()">
        </div>
      </form>
      <div id="third">
        <p>第三方账户登录</p>
        <hr>
        <ul>
          <li>
            <img src="../../static/img/signup/qq.png" alt="">
          </li>
          <li>
            <img src="../../static/img/signup/wechat.png" alt="">
          </li>
          <li>
            <img src="../../static/img/signup/weibo.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '用户名',
      nickname: '昵称',
      password: '密码',
      passwordconfirm: '确认密码'
    }
  },
  methods: {
    signUp () {
      const body = {}
      body.username = this.username
      body.password = this.password
      body.nikename = this.nikename
      this.$post('/api/user', body)
        .then((data) => {
          if (data.body.status === 'OK') {
            alert('注册成功')
            // TODOs jump to ？ where
          }
        })
    }
  }

}
</script>
<style scope>
#signup{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: white;
  background-image: url('../../static/img/signup/background.png');
  background-repeat:no-repeat;
  background-size:100%;
  z-index:2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* space-around; */
  align-items: center;
}

#signup>img{
  width: 60%;
  margin-top: -25%;
  /* margin-bottom: 12.5%; */
}

#signup form{
  border:1px solid rgb(0, 102, 153);
  border-radius:1rem;
  background-color:white;
}

#signup .icon{
  width: 2rem;
  height: 2rem;
}

#signup form span{
  box-sizing: border-box;
  width: 30rem;
  height: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.5); */
  /* border:1px solid rgb(0, 102, 153); */
  /* border-radius: 1.7rem; */
  margin:1rem;
}

#signup span>input{
  color: rgb(102, 102, 102);
  padding:1rem;
  width:24rem;
  background:rgba(255,255,255,0);
  border:none;
  border-bottom:1px solid rgb(0, 102, 153);
}

#signup span>input:focus{
  outline:none;
}

#signup div>input {
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

#signup #signupbutton{
  background:rgb(204, 51, 0);
  margin:1rem;
}
#signup form div{
  display:flex;
  flex-direction:row;
  justify-content: space-around;
}
#signup #third ul{
  display: flex;
  flex-direction: row;
}
</style>
