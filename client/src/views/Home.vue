<template>
  <div class="home">
    <mu-paper
      class="demo-paper"
      :z-depth="4"
      id="mypaper"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
    >
      <div id="img">
        <img src="../assets/text.png" alt id="text" />
      </div>

      <mu-avatar slot="avatar" size="80" id="myava">
        <img src="../assets/icon.jpg" />
      </mu-avatar>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form" id="myform">
        <mu-form-item label="ID号" help-text prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="#cc6b5f" @click="submit" id="mybutton">登录</mu-button>
          <mu-button @click="register" id="mybuttonrignt">注册</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-paper>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      loading: false,
      usernameRules: [
        { validate: val => !!val, message: "必须填写ID号" },
        { validate: val => val.length >= 3, message: "ID号长度大于3" }
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
      // this.$refs.form.validate().then(result => {
      //   console.log("form valid: ", result);
      // });
      this.loading = true;
      this.$axios
        .post(
          "https://www.jixieclub.com:3002/login",
          {
            params: {
              name: this.validateForm.username,
              password: this.validateForm.password
            }
          },
          {
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }
        )
        .then(res => {
          if (res.data.res === "empty") {
            alert("该用户不存在");
          }
          if (res.data.res === "error") {
            alert("密码输入错误");
          }
          if (res.data.res === "match") {
            localStorage.setItem("username",this.validateForm.username);
            localStorage.setItem("password",this.validateForm.password);
            
            this.$router.push({ path: "/user" });
          }
        });
    },
    register() {
      this.$router.push({ path: "/register" });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  },
  created(){
    //如果登陆过了就自动跳转
    if(localStorage.getItem("username")&&localStorage.getItem("password")){
      this.$router.push({ path: "/user" });
    }
  },
  mounted(){
    
  }
};
</script>
<style scoped>
.mu-demo-form {
  width: 100%;
  max-width: 100%;
}
#myform {
  /* margin-right: 0px; */
  background: #f5eeee;
  border-radius: 10px;
}
#mypaper {
  width: 36%;
  margin: 100px auto;
  border-radius: 10px;
  background: #f5eeee;
}
#mybutton {
  margin-right: 20%;
  margin-left: 20%;
}
#myava {
  margin-left: 42%;
}
#text {
  object-fit: fill;
  width: 100%;
  border-radius: 10px;
}


@media screen and (max-width: 600px) {
  #mypaper {
    width: 95%;
    margin: 100px auto;
    border-radius: 10px;
  }
  #mybutton {
    margin-right: 11%;
    margin-left: 20%;
  }
  
  #img {

  }
  #myava {
    margin-left: 38%;
  }
}
</style>