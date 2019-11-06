<template>
  <div class="about">
    <h1>这里是用户界面</h1>
    <vue-event-calendar :events="demoEvents" @dayChanged="dayChanged()"></vue-event-calendar>
    <mu-button color="primary">Primary</mu-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demoEvents: [
        {
          date: "2016/11/12", // 必填
          title: "Foo" // 必填
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        },
      ]
    };
  },
  methods: {
    monthChange(month) {
      console.log(month);
    },
    dayChange(day) {
      console.log(day);
    }
  }
};
</script>