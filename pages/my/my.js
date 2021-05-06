import {
  userInfo
} from '../../config/api'

const App = getApp()

Page({
  data: {
    userInfo: null,
    navHeight: null,
    navTop: null,
    money: '0.00', // 余额
    point: 0, // 积分
    invite: 0 // 邀请人数
  },

  onShow() {
    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    })

    if (!wx.getStorageSync('loginStatus')) {
      wx.showToast({
        title: '请先登录',
        icon: 'loading'
      })
      setTimeout(function () {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }, 500)
      return
    }

    this.getUserInfo()
  },

  // 用户信息
  getUserInfo() {
    userInfo().then(res => {
      this.setData({
        money: res.data.balance,
        invite: res.data.invite_num,
        point: res.data.point
      })
    })
  },

  // 去订单
  toOrder(e) {
    wx.navigateTo({
      url: '/pages/order/order'
    })
  },

  //  跳转
  to(e) {
    if(e.currentTarget.dataset.hasOwnProperty('tab')){
      wx.setStorageSync('lookOrderTab', e.currentTarget.dataset.tab)
    }
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  }
})
