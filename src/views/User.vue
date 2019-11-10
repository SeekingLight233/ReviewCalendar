<template>
  <div id="app">
    <vue-event-calendar
      :init = "init"
      :events="demoEvents"
      @day-changed="handleDayChanged"
      @month-changed="handleMonthChanged"
    ></vue-event-calendar>
  </div>
</template>

<script>
let today = new Date();
export default {
  name: "app",
  data() {
    return {
      init:"2019/11/10",
      demoEvents: [
        {
          date: `2019/11/08`,
          title: "root",
          desc: "can u hear me???",
          defn: "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        }
      ]
    };
  },
  methods: {
    handleDayChanged(data) {},
    handleMonthChanged(data) {},
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
          let list = [];
          for (let i = 0; i < res.data.length; i++) {
            let obj = {};
            //还得处理下时间
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
          console.log("list" + list);
          console.log(list);
          //vue bug，不支持动态更新data内的数组
          let sourcelist = this.demoEvents;
          sourcelist.push(...list);
          this.demoEvents = sourcelist;
        });
    },
    transformDate(unix) {
      let time = new Date(unix);
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let full = year + "/" + month + "/" + day;
      return full;
    }
  },
  created() {
    this.$axios
      .post("https://www.jixieclub.com:8444/getall", {
        params: {
          user: "690163223"
        }
      })
      .then(res => {
        console.log(res.data);
        this.demoEvents.push(...res.data);
      });
      // this.$EventCalendar.toDate('2019/11/10');
  },

  mounted() {
    this.getword(new Date().getTime(), "690163223");
    // let today = this.transformDate(new Date().getTime());
    this.$EventCalendar.toDate('2019/11/09');
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
