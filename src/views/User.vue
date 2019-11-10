<template>
  <div id="app">
    <vue-event-calendar
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
      demoEvents: [
        {
          date: `2019/11/08`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `2019/11/09`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `2019/11/11`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `2019/11/19`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定；",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `2019/11/29`,
          title: "root",
        },
        {
          date: `2019/11/30`,
          title: "root",
        },
        {
          date: `2019/11/20`,
          title: "root",
        },
        {
          date: `2019/11/21`,
          title: "root",
        },
        
      ]
    };
  },
  methods: {
    handleDayChanged(data) {},
    handleMonthChanged(data) {}
  },
  created() {
    
  },
  mounted(){
    this.$EventCalendar.toDate('2019/11/09');
  }
  
  // mounted() {
  //   this.$axios
  //     .post("https://www.jixieclub.com:8444/getall", {
  //       params: {
  //         user: "690163223"
  //       }
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //       console.log(typeof res.data);
  //       console.log(res.data[0].data);
  //       console.log(typeof res.data[0].data);
  //       //接下来对数据进行下处理
  //       let words = [];
  //       for (let i = 0; i < res.data.length; i++) {
  //         let obj = {};
  //         //先处理下时间
  //         //手残date在后台拼错了拼成了data
  //         let tmp = res.data[i].data;
  //         let year = tmp.slice(0, 4);
  //         let month = tmp.slice(5, 7);
  //         let day = tmp.slice(8, 10);
  //         let full = year+"/"+month+"/"+day;
  //         obj.date = full;
  //         obj.title = res.data[i].word;
  //         obj.desc = res.data[i].note;
  //         obj.commit = res.data[i].commit;
  //         obj.defn = res.data[i].defn;
  //         obj.audio = "https:"+res.data[i].audio;
  //         words.push(obj);
  //       }
  //       console.log(words);
  //       this.demoEvents = words;
  //     });
  // }
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
