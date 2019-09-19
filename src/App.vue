<template>
  <div id="app">
    <mu-paper class="demo-paper" :z-depth="4" id="mypaper">
      <div class="title">
        
      </div>
      <mu-avatar slot="avatar" size=80 id="myava">
        <img src="./assets/icon.jpg" />
      </mu-avatar>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form" id="myform">
        <mu-form-item label="用户名" help-text prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit" id="mybutton">登录</mu-button>
          <mu-button @click="clear">注册</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-paper>

    <!-- <router-view/> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      argeeRules: [{ validate: val => !!val, message: "必须同意用户协议" }],
      validateForm: {
        username: "",
        password: "",
        isAgree: false
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.mu-demo-form {
  width: 100%;
  max-width: 100%;
}
#myform {
  /* margin-right: 0px; */
  background: #f5eeee;
  
}
#mypaper {
  width: 36%;
  margin: 200px auto;
  border-radius: 10px;
   background: #f5eeee;
}
#mybutton {
  margin-right: 20%;
  margin-left: 24%;
}
#myava{
  margin-bottom: 0px;
}
.title{
  background: url('./assets/text.png') no-repeat;
  /* border: 2px solid red; */
  background-size: 100%;
  width: 100%;
  height: 150px;
}
@media screen and (max-width: 600px) {
  #mypaper {
    width: 100%;
    margin: 100px auto;
    border-radius: 10px;
  }
  #mybutton {
    margin-right: 11%;
    margin-left: 20%;
  }
}
</style>
