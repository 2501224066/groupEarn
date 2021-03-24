const App = getApp()

Page({
  data: {
    phoneFooter: null,
    navHeight: null,
    navTop: null,
    dateIndex: 0,
    date: ['2020年3月', '2020年2月', '2020年1月', '全部'],
    list: [{
      title: '团长奖励金',
      time: '2021-05-18 08::47:23',
      num: "19.90",
      up: 1
    }, {
      title: '提现',
      time: '2021-05-18 08::47:23',
      num: "9.30",
      up: 0
    }]
  },

  onShow() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop,
      iphoneFooter: App.globalData.iphoneFooter
    })
  },

  bindPickerChange(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateIndex: e.detail.value
    })
  },
})
