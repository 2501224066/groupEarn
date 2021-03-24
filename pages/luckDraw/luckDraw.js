const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    self: 2, // 自己刮开的号
    res: [3, 8, 9], // 中奖号码
    list: [{
        open: false,
        num: 7
      },
      {
        open: false,
        num: 0
      },
      {
        open: false,
        num: 3
      },
      {
        open: true,
        num: 6
      },
      {
        open: false,
        num: 9
      },
      {
        open: true,
        num: 2
      },
      {
        open: true,
        num: 8
      },
      {
        open: true,
        num: 5
      },
      {
        open: false,
        num: 1
      },
      {
        open: false,
        num: 4
      }
    ],
    over: false, // 是否全部刮开
    relShow: true // 刮开弹框
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
  },

  // 关闭弹框
  relClose() {
    this.setData({
      relShow: false
    })
  }
})
