import {
  login
} from '../../config/api'

const App = getApp()

Page({
  data: {
    navHeight: null,
    navTop: null,
    agree: false,
    code: null,
  },

  onShow() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    })
    this.login()
  },

  // 同意协议
  agree() {
    this.setData({
      agree: !this.data.agree
    })
  },

  // 提示同意协议
  noAgree() {
    wx.showToast({
      title: '请先同意协议',
      icon: "none"
    })
  },

  // 返回主页
  toHome() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  // 登录
  login() {
    var that = this
    // 获取code
    wx.login({
      success(res) {
        that.setData({
          code: res.code
        })
      }
    })
  },

  // 获取手机号
  getPhoneNumber(e) {
    // 拒绝授权
    if (e.detail.errMsg != 'getPhoneNumber:ok') {
      return false
    }

    var that = this
    wx.checkSession({
      success() {
        var obj = {
          code: that.data.code,
          iv: e.detail.iv,
          encryptedData: e.detail.encryptedData
        }
        login(obj).then(res => {
          wx.setStorageSync('token', res.data.token)
          wx.setStorageSync('userInfo', {
            nickname: res.data.nickname,
            avatarUrl: null,
            phone: res.data.phone
          })
          wx.setStorageSync('loginStatus', true)
          wx.showToast({
            icon: "success",
            title: '登录成功',
            success() {
              if (!wx.getStorageSync('authStatus')) {
                wx.navigateTo({
                  url: '/pages/authorize/authorize',
                })
                return
              }
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          })
        })
      },
      fail() {
        that.login()
      }
    })
  },
})
