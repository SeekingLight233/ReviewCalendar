<template>
  <div id="app">
    <vue-event-calendar
      :init="init"
      :events="demoEvents"
      :dayevents="dayEvents"
      @day-changed="handleDayChanged"
      @month-changed="handleMonthChanged"
      :username="this.$store.state.username"
    ></vue-event-calendar>
  </div>
</template>

<script>
let today = new Date();
export default {
  name: "app",
  data() {
    return {
      init: "2019/11/10",
      demoEvents: [
        {
          date: `2019/11/08`,
          title: "root",
          desc: "can u hear me???",
          defn: "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `2019/11/08`,
          title: "root",
          desc: "can u hear me???",
          defn: "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `2019/11/08`,
          title: "root",
          desc: "can u hear me???",
          defn: "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        }
      ],
      dayEvents:[]
    };
  },
  methods: {
    handleDayChanged(data) {
      this.$store.state.showevent = true;
      console.log("触发了handle事件");
      console.log(data.date);
      console.log(data.date.split("/"));
      this.getword(this.toUnix(data.date),"690163223");
      let obj = {
          date: `2019/11/08`,
          title: "add",
          desc: "can u hear me???",
          defn: "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        };
      // this.demoEvents.push(obj);
      // this.demoEvents.splice(0,1);
    },
    //把2019/12/12这种日期转换成时间戳
    toUnix(date) {
      let now = new Date();
      let tmp = date.split("/");
      let year = tmp[0];
      let month = tmp[1];
      let day = tmp[2];
      console.log(year+" "+month+" "+ day);
      now.setFullYear(year);
      now.setMonth(month - 1);
      now.setDate(day);
      
      console.log(now.getTime());
      return now.getTime();
    },
    handleMonthChanged(data) {},
    getall() {
      this.$axios
        .post("https://www.jixieclub.com:8444/getall", {
          params: {
            user: this.$store.state.username
          }
        })
        .then(res => {
          console.log(res.data);
          let list = [];
          for (let i = 0; i < res.data.length; i++) {
            let obj = {};
            console.log(res.data[i].data);
            console.log(typeof res.data[i].data);
            let full = this.transformDateString(res.data[i].data);
            obj.date = full;
            obj.title = res.data[i].word;
            obj.desc = res.data[i].note;
            obj.defn = res.data[i].defn;
            obj.commit = res.data[i].commit;
            obj.audio = "https:" + res.data[i].audio;
            list.push(obj);
          }
          this.demoEvents = list;
        });
    },
    getword(unix, username) {
      this.$axios
        .post("https://www.jixieclub.com:8444/getword", {
          params: {
            unix: unix,
            user: username
          }
        })
        .then(res => {
          console.log(res.data);
          this.dayEvents.splice(0);
          let list = [];
          for (let i = 0; i < res.data.length; i++) {
            let obj = {};
            //时间换成传过来的时间
            let full = this.transformDate(unix);
            obj.date = full;
            obj.title = res.data[i].word;
            obj.desc = res.data[i].note;
            obj.defn = res.data[i].defn;
            obj.commit = res.data[i].commit;
            obj.audio = res.data[i].audio;
            list.push(obj);
          }
          this.dayEvents.push(...list);
        });
    },
    transformDate(unix) {
      let time = new Date(unix);
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let full = year + "/" + month + "/" + day;
      return full;
    },
    transformDateString(str) {
      let year = str.slice(0, 4);
      let month = str.slice(5, 7);
      let day = str.slice(8, 10);
      let full = year + "/" + month + "/" + day;
      return full;
    },
    //在日历上显示出哪些天是有单词需要背的
    showcircle() {
      let user = localStorage.getItem("username");
      this.$axios
        .post("https://www.jixieclub.com:8444/showdate", {
          params: {
            user: user
          }
        })
        .then(res => {
          console.log(res.data);
          let list = [];
          for (let i = 0; i < res.data.length; i++) {
            let obj = {};
            obj.date = res.data[i];
            obj.title = "init";
            obj.desc = "desc";
            obj.defn = "defn";
            obj.commit = "commit";
            obj.audio = "https:";
            list.push(obj);
          }
          this.demoEvents = list;
        });
    }
  },
  created() {
    this.showcircle();
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        console.log("用户允许通知");
      } else if (permission === "denied") {
        console.log("用户拒绝通知");
      }
    });
    this.$store.state.username = localStorage.getItem("username");
    let user = localStorage.getItem("username");
  },

  mounted() {
    // this.getword(1573626059000, "690163223");
    // let today = this.transformDate(new Date().getTime());
    // this.$EventCalendar.toDate('2019/11/09');
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin-top: 30px;
}

h1,
h2,
h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.t-center {
  text-align: center;
  margin: 20px;
}
</style>
