<template>
  <div class="wrapper" id="mywrapper" @click="update" >
    
      <span class="left">
        <span class="word">{{event.title}}</span>
        <div class="audio">
          <span class="commit" @click.stop="play()">{{event.commit}}</span>
          <div class="icon" @click.stop="play()">
            <mu-icon size="24" value="volume_down"></mu-icon>
          </div>
        </div>
        <div class="icon-star" @click.stop="showstar = !showstar">
          <mu-icon size="24" value="star_border" v-if="!showstar"></mu-icon>
          <mu-icon size="24" value="star" v-if="showstar"></mu-icon>
        </div>

        <mu-expand-transition>
          <div class="defn" v-show="show">
            <span>{{event.defn}}</span>
            <p class="desc" id="mydesc">{{event.desc}}</p>
          </div>
        </mu-expand-transition>
        <audio
          :id=event.title
          :src=event.audio
        ></audio>  
      </span>
    
  </div>
</template>
<script>
import i18n from "../i18n.js";
import { dateTimeFormatter } from "../tools.js";
import Vue from "vue";
import "muse-ui/lib/styles/base.less";
import { Button, Select, Icon, Helpers } from "muse-ui";
import "muse-ui/lib/styles/theme.less";
Vue.use(Helpers);
Vue.use(Button);
Vue.use(Icon);
export default {
  data() {
    return {
      i18n,
      show: false,
      showstar: false,
    };
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    locale: {
      type: String,
      required: true
    }
  },
  methods: {
    dateTimeFormatter,
    play() {
      let audio = document.getElementById(this.event.title);
      audio.play();
    },
    update(){
      this.show = true;
      //发送post请求更新单词状态
    }
  },
  
};
</script>
<style>
.word {
  font-size: 19px;
  font-weight: 700;
  line-height: 1.21;
  color: #333;
  margin-right: 10px;
}
.defn {
  width: 90%;
  /* margin-top: 10px; */
  font-size: 14px;
  line-height: 1.29;
  color: #333;
}
#mywrapper {
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
}
.right {
  float: right;
}
.left-father {
  /* display: inline-block;
  width: 100%; */
}

#eye {
  width: 50px;
  height: 50px;
}
.commit {
  font-size: 12px;
  line-height: 1.92;
  color: #b0b4be;
}
.icon {
  display: inline-block;
  transform: translateY(8px);
}
.audio {
  display: inline-block;
  transform: translateY(-2px);
}
.icon-star {
  display: block;
  margin-right: 20px;
  transform: translateY(5px);
  float: right;
}
#mydesc{
  transform: translateY(5px);
}

</style>