<template>
  <div class="popup">
    <div class="detail" v-if="login">
      <div class="popup_banner" />
      <div class="popup_item">
        <div class="popup_label">当前站点禁用</div>
        <div class="popup_content">
          <Switcher v-model="disabledInThisSite" />
        </div>
      </div>

      <div class="popup_translate">
        <textarea
          id="input"
          placeholder="在此输入你想要翻译的文字(｀・ω・´) "
          v-model="text"
          class="popup_input"
          @input="translate"
        />
        <div v-text="result" class="popup_result" />
      </div>

      <div class="popup_button" @click="e => goOptionsPage()">
        <i class="__icon __icon-star-solid" />查看生词簿
      </div>

      <div class="popup_footer">
        <a
          href="https://github.com/waynecz/dadda-translate-crx/issues"
          target="_blank"
          class="popup_link"
        >
          <i class="__icon __icon-git" /> 提问题 / 提建议
        </a>
      </div>
      <div class="popup_setting __tooltip __left" tooltip="更多设置" @click="goOptionsPage('setting')">
        <i class="__icon __icon-setting" />
      </div>
    </div>

    <div v-if="!login">
      <div class="login">
        <div class="popup_banner" />
        <div class="center">
          <mu-text-field v-model="username" label="账号" label-float></mu-text-field>
          <br />
          <div id="mypassword">
            <mu-text-field v-model="password" label="密码" label-float type="password"></mu-text-field>
            <br />
          </div>
          <mu-button color="#3842ec" id="myleft" @click="submit">登陆</mu-button>
          <mu-button>注册</mu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TR_SETTING_HAS_TOAST_KEY,
  TR_SETTING_IS_DIRECTLY_KEY,
  TR_SETTING_SKIP_CHINESE_KEY,
  TR_SETTING_BLACK_LIST_KEY,
  TR_SETTING_AUTO_SPEAK
} from "@/utils/constant";
// import 'muse-ui/lib/styles/base.less';
// import { Button, Select } from 'muse-ui';
// import 'muse-ui/lib/styles/theme.less';
import { _parseURL, _inBlackList } from "@/utils";
export default {
  name: "popup",

  async created() {
    this.translateDirectly = await this.$storage.get(
      TR_SETTING_IS_DIRECTLY_KEY,
      false
    );
    this.hasToast = await this.$storage.get(TR_SETTING_HAS_TOAST_KEY, true);
    this.skipChinese = await this.$storage.get(
      TR_SETTING_SKIP_CHINESE_KEY,
      false
    );
    this.autoSpeak = await this.$storage.get(TR_SETTING_AUTO_SPEAK, false);

    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      async tabs => {
        const currentTab = tabs[0];
        this.currentHost = _parseURL(currentTab.url).host;
        this.disabledInThisSite = await _inBlackList(this.currentHost);
      }
    );
  },

  data() {
    return {
      username: "",
      password: "",
      login: false,
      currentHost: null,
      translateDirectly: false,
      hasToast: true,
      autoSpeak: false,
      skipChinese: false,
      disabledInThisSite: false,

      text: "",
      result: "",

      translateTimer: null
    };
  },

  mounted() {
    document.getElementById("input").focus();
    // console.log(localStorage.getItem("username"))
  },
  created() {
    chrome.storage.sync.get(['username'], function(result) {
    console.log('Value currently is ' + result);
    console.log(result.username);
});
    if (localStorage.getItem("username")) {
      this.login = true;
    }
    console.log(chrome.extension.getBackgroundPage());
  },

  watch: {
    translateDirectly(val) {
      this.$storage.set(TR_SETTING_IS_DIRECTLY_KEY, val);
    },

    hasToast(val) {
      this.$storage.set(TR_SETTING_HAS_TOAST_KEY, val);
    },

    skipChinese(val) {
      this.$storage.set(TR_SETTING_SKIP_CHINESE_KEY, val);
    },

    autoSpeak(val) {
      this.$storage.set(TR_SETTING_AUTO_SPEAK, val);
    },

    async disabledInThisSite(val) {
      const blackList = await this.$storage.get(TR_SETTING_BLACK_LIST_KEY, {});
      blackList[this.currentHost] = val;

      this.$storage.set(TR_SETTING_BLACK_LIST_KEY, blackList);
    }
  },

  methods: {
    goOptionsPage(link = "vocabulary") {
      let isActive = false;
      const path = chrome.runtime.getURL(`options/options.html#link=${link}`);
      chrome.tabs.query(
        { windowId: chrome.windows.WINDOW_ID_CURRENT },
        tabs => {
          tabs.forEach(tab => {
            if (tab.url === path) {
              isActive = true;
              chrome.tabs.update(tab.id, { active: true });
            }
          });

          if (!isActive) {
            chrome.tabs.create({ url: path });
          }
        }
      );
    },

    translate(e) {
      if (this.translateTimer) clearTimeout(this.translateTimer);
      this.translateTimer = setTimeout(_ => {
        const { text } = this;
        chrome.runtime.sendMessage({ name: "translate", text }, res => {
          this.result = res.translate.dit;
        });
      }, 200);
    },
    submit() {
      console.log("wdnmd");

      this.$axios
        .post(
          "https://www.jixieclub.com:3002/login",
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
          if (res.data.res === "empty") {
            alert("该用户不存在");
          }
          if (res.data.res === "error") {
            alert("密码输入错误");
          }
          if (res.data.res === "match") {
            localStorage.setItem("username", this.username);
            localStorage.setItem("password", this.password);
            chrome.storage.sync.set({ "username": this.username }, function() {
              console.log("存进去了一个");
            });
            chrome.storage.sync.set({ "password": this.password }, function() {
              console.log("存进去了一个");
            });
            this.login = true;
          }
        });
    }
  }
};
</script>
<style scoped>
.login {
  margin-right: 10px;
}
.center {
  margin-left: 35px;
}
#mypassword {
  margin-top: -15px;
}
#myleft {
  margin-left: 21px;
  margin-right: 35px;
}
</style>