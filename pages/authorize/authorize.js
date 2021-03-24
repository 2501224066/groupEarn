const App = getApp()

Page({
  data: {
    navHeight: null,
    navTop: null,
  },

  onShow() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    })
  },

   // 返回主页
   toHome(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})
