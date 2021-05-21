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

  // 去我的
  toMy(){
    wx.switchTab({
      url: '/pages/my/my',
    })
  }

})
