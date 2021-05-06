const App = getApp()

Page({
  data: {
    iphoneFooter: null,
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
  },

})
