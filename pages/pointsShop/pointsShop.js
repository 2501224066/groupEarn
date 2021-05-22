import {
  pointsIndex,
  classify,
  pointsGoods,
  bandPromoters,
  pointsPush
} from '../../config/api'

const App = getApp()

Page({
  data: {
    navScrollTop: null,
    swiper: [], // 轮播
    tabIndex: 0,
    tab: [],
    domScrollTop: null,
    pushGoods: [],
    goods: [],
    icon: [],
    imgPre: null,
    page: 1,
    pagesize: 14,
  },

  onLoad(options) {
    if (options.hasOwnProperty('shareUserId')) {
      wx.setStorageSync('shareUserId', options.hasOwnProperty('shareUserId'))
      if (!wx.getStorageSync('loginStatus')) {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      } else {
        // 绑定
        this.bandPromoters()
      }
    }
    this.domScrollTop()
  },

  onShow() {
    this.setData({
      imgPre: App.globalData.imgPre,
      page: 1,
    })
    this.getIndex()
    this.getPush()
    this.getClassify()
  },

  // 推荐商品
  getPush() {
    let obj = {
      page: 1,
      pagesize: 7
    }
    pointsPush(obj).then(res => {
      this.setData({
        pushGoods: res.data
      })
    })
  },

  // 绑定推广者
  bandPromoters() {
    let obj = {
      id: wx.getStorageSync('shareUserId')
    }
    bandPromoters(obj).then(res => {
      wx.removeStorageSync('shareUserId')
      wx.showToast({
        title: '绑定成功',
        icon: 'success'
      })
    })
  },

  // 获取页面数据
  getIndex() {
    pointsIndex().then(res => {
      this.setData({
        swiper: res.data.banner,
        icon: res.data.category,
      })
    })
  },

  // 一级分类
  getClassify() {
    classify().then(res => {
      this.setData({
        tab: res.data
      })
      this.getGoods()
    })
  },

  // 商品
  getGoods(addStatus = false) {
    let obj = {
      pid: this.data.tab[this.data.tabIndex].id,
      page: this.data.page,
      pagesize: this.data.pagesize
    }
    pointsGoods(obj).then(res => {
      this.setData({
        goods: addStatus ? this.data.goods.concat(res.data) : res.data
      })
    })
  },

  // 触底
  onReachBottom() {
    this.setData({
      page: this.data.page + 1
    })
    this.getGoods(true)
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index,
      page: 1
    })
    this.getGoods()
  },

  // 页面上滑距离
  onPageScroll(ev) {
    this.setData({
      navScrollTop: ev.scrollTop
    })
  },

  // 标签距离顶部距离
  domScrollTop() {
    let query = wx.createSelectorQuery();
    query.select('#dom').boundingClientRect();
    query.exec((res) => {
      this.setData({
        domScrollTop: res[0].top
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
