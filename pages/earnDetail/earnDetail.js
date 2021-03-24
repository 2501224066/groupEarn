const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    over: false
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
  },
})
