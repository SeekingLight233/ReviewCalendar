<template>
  <div>
    <mu-paper
      class="demo-paper"
      :z-depth="4"
      id="mypaper"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
    >
      <mu-text-field v-model="username" label="用户名" label-float></mu-text-field>
      <br />
      <mu-text-field v-model="password" label="密码" label-float type="password"></mu-text-field>
      <br />
      <mu-text-field v-model="cpassword" label="确认密码" label-float type="password"></mu-text-field>
      <br />

      <mu-button color="#cc6b5f" @click="submit" id="mybutton">提交</mu-button>
      <mu-button @click="reset">重置</mu-button>
    </mu-paper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      cpassword: ""
    };
  },
  methods: {
    reset() {
      (this.username = ""), (this.password = ""), (this.cpassword = "");
    },
    submit() {
      if (this.password != this.cpassword) {
        alert("两次密码好像输的不太对哦")
      }
      this.$axios
        .post(
          "http://39.107.97.170:3002/register",
          {
            params: {
              name: this.username,
              password: this.password
            }
          },
          {
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }
        )
        .then(res => {
          console.log(res.data.ex);
          if(res.data.ex == true){
            alert("此账户已被占用！")
          }
          if(res.data.ex == false){
            alert("创建成功！")
          }
          console.log(res.data.ex)
          
        });
    }
  }
};
</script>
<style  scoped>
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
  margin-right: 19%;
  margin-left: 0%;
  margin-bottom: 20px;
}
#myava {
  margin-bottom: 0px;
}

@media screen and (max-width: 600px) {
  #mypaper {
    width: 95%;
    margin: 100px auto;
    border-radius: 10px;
  }
  #mybutton {
    margin-right: 11%;
    margin-left: 0%;
    margin-bottom: 20px;
  }
  #text {
    object-fit: fill;
    width: 100%;
    border-radius: 10px;
  }
  #img {
  }
}
</style>