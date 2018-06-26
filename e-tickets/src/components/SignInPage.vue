<template>
  <div>
    <div id="sign">
      <img src="../../static/img/signin/title.png" alt="">
      <form>
        <span>
          <img class="icon" src="../../static/img/signin/user.png" alt="">
          <input v-model="username" v-input type="text" />
        </span>
        <span>
          <img class="icon" src="../../static/img/signin/password.png" alt="">
          <input v-model="password" v-input="password" type="text" />
        </span>
        <input id="forget" type="button" value="忘记密码?">
        <div>
          <input id="signin" type="button" value="登陆" v-on:click="signIn()">
          <input id="signup" type="button" value="注册" v-on:click="jumpSignUp()">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '用户名',
      password: '密码'
    }
  },
  methods: {
    signIn () {
      const body = {}
      body.username = this.username
      body.password = this.password
      this.$post('/api/session/user', body)
        .then((data) => {
          if (data.body.status === 'OK') {
            alert('登陆成功')
            // TODOs jump to ？ where
          }
        })
    },
    jumpSignUp () {
      // TODOs jump sign up page
      this.$router.push({name: 'signup'})
    }
  }

}
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

#sign .icon{
  width: 2rem;
  height: 2rem;
}

#sign form span{
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

#sign span>input{
  color: rgb(102, 102, 102);
  padding:1rem;
  width:24rem;
  background:rgba(255,255,255,0);
  border:none;
}

#sign span>input:focus{
  outline:none;
}

#sign #forget {
  margin-top:1rem;
  margin-bottom:1rem;
  margin-left:70%;
  background:none;
  color: rgb(102, 102, 102);
  border:none;
}

#sign div>input {
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

#sign #signin{
  background:rgb(0, 102, 153);
}
#sign #signup{
  background:rgb(204, 51, 0);
}
#sign form div{
  display:flex;
  flex-direction:row;
  justify-content: space-around;
}
</style>
