const App = getApp()

Page({
  data: {
    region: ['', '', ''],
    iphoneFooter: null,
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
  },

  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  }
})
