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
    if(!wx.getStorageSync('loginStatus')){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  }

})
