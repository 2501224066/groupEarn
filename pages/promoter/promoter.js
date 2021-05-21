import {
  userInfo
} from '../../config/api'

const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    userInfo: null,
    money: 0,
    commission: 0,
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter,
      userInfo: wx.getStorageSync('userInfo'),
      userId: wx.getStorageSync('userId'),
    })
    this.getUserInfo()
  },

  // 用户信息
  getUserInfo() {
    userInfo().then(res => {
      this.setData({
        money: res.data.balance,
        commission: res.data.extension_price
      })
    })
  },


  // 跳转
  to(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }

})
