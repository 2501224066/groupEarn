import {
  homeData
} from '../../config/api'

const App = getApp()

Page({
  data: {
    navHeight: null,
    navTop: null,
    navScrollTop: 0,
    swiper: [], // 轮播
    noticeTop: 0,
    notice: [], // 消息
    active: [], // 团
    dynamic: [], // 动态
  },

  onShow() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    })
    this.getData()
    this.checkJoin()
  },

  // 检查是否受邀进来参团
  checkJoin() {
    if (wx.getStorageSync('joinGroupId')) {
      wx.showModal({
        title: '您已登录',
        content: '是否继续参与拼团',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/earnDetail/earnDetail?id=' + wx.getStorageSync('joinGroupId'),
            })
            wx.removeStorageSync('joinGroupId')
          } else if (res.cancel) {
            wx.removeStorageSync('joinGroupId')
          }
        }
      })
    }
  },

  // 数据
  getData() {
    homeData().then(res => {
      this.setData({
        swiper: res.data.banner,
        active: res.data.active,
        notice: res.data.notice,
        dynamic: res.data.newGroupNotice
      })
    })
  },

  // 去拼团列表
  toMake() {
    wx.switchTab({
      url: '/pages/make/make',
    })
  },

  //  跳转
  to(e) {
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
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },

  // 页面上滑距离，控制 nav 变色
  onPageScroll(ev) {
    this.setData({
      navScrollTop: ev.scrollTop
    })
  },

  // 敬请期待
  wait(){
    wx.showToast({
      title: '敬请期待',
      icon: "loading"
    })
  },


  // 分享
  onShareAppMessage() {}
})
