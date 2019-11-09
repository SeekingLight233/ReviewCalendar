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
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: "Title-2"
        },
        {
          date: `${today.getFullYear()}/${
            today.getMonth() === 11 ? 1 : today.getMonth() + 2
          }/06`,
          title: "Title-3",
          desc: "description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "root",
          desc: "can u hear me???",
          defn:
            "vt.做，制造； 生产，制定； 使成为； 使产生\nvi.开始； 尝试； 行进； 增大\nn.制造； 生产量； 性格； 形状，样式",
          commit: "/ɪɡ'zæktli/",
          audio:
            "http://media-audio1.qiniu.baydn.com/us/a/ab/abc_pub_audio/f6a76dfa37fda935a7b3737df8834fb9.98c9b59648e603cbee652980dbdad19f.mp3.mp3"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "merge",
          desc: "longlonglong description"
        },
        {
          date: `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`,
          title: "handsome",
          desc: "longlonglong description"
        }
      ]
    };
  },
  methods: {
    handleDayChanged(data) {},
    handleMonthChanged(data) {}
  },
  created() {
    this.$axios
        .post(
          "https://www.jixieclub.com:8444/getall",
          {
            params: {
              user: "690163223",
            }
          },
        )
        .then(res => {
          console.log(res.data);
          console.log(typeof res.data);
          for(let i = 0;i<res.data.length;i++){
            
          }
          
        })
  },
  mounted() {
    
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
