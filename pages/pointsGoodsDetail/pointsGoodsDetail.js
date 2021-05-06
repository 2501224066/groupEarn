import {
  goodsDetail,
  createOrder
} from '../../config/api'

const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    navHeight: null,
    navTop: null,
    navScrollTop: null,
    domScrollTop: null,
    id: null,
    detail: null,
    buyType: 1, // 购买类型 1:加入购物车 2:购买
    maxBuyNum: 0, // 最大购买数量
    buyNum: 1, //购买数量
    specsShow: false, // 规格展示
    shareShow: false, // 分享展示
    specsArr: [], // 选中规格
  },

  onLoad(options) {
    this.domScrollTop()
    this.setData({
      id: 54,
    })
    if (options.shareUserId) {
      wx.setStorageSync('shareUserId', options.shareUserId)
    }
  },

  onShow() {
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
    this.setData({
      specsShow: false,
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop,
      iphoneFooter: App.globalData.iphoneFooter
    })
    this.getData()
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

  // 数据
  getData() {
    let obj = {
      id: this.data.id
    }
    goodsDetail(obj).then(res => {
      this.setData({
        detail: res.data,
        group: res.data.active != "" ? res.data.active : null,
        maxBuyNum: res.data.goods.max_buycount
      })
    })
  },

  // 返回
  back() {
    wx.navigateBack()
  },

  // 跳转
  to(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },

  // 选中规格
  checkedSpecs(e) {
    e.currentTarget.dataset.arr.forEach(element => {
      this.data.specsArr.indexOf(element) > -1 ? this.data.specsArr.splice(this.data.specsArr.indexOf(element), 1) : ''
    })
    this.data.specsArr.push(e.currentTarget.dataset.name)
    this.setData({
      specsArr: this.data.specsArr
    })
  },

  // 页面上滑距离，控制 nav 变色
  onPageScroll(ev) {
    this.setData({
      navScrollTop: ev.scrollTop
    })
  },

  // 打开规格
  openSpecs(e) {
    this.setData({
      buyType: e.currentTarget.dataset.type,
      specsShow: true,
      buyNum: 1
    })
  },

  // 关闭规格
  closeSpecs() {
    this.setData({
      specsShow: false
    })
  },

  // 打开分享
  openShare() {
    this.setData({
      shareShow: true
    })
  },

  // 关闭分享
  closeShare() {
    this.setData({
      shareShow: false
    })
  },

  // 数量增加
  numUp(e) {
    if (this.data.buyNum < this.data.maxBuyNum) {
      this.setData({
        buyNum: this.data.buyNum + 1
      })
    } else {
      wx.showToast({
        title: '限购' + this.data.maxBuyNum + '份',
        icon: 'none'
      })
    }
  },

  // 数量减少
  numDown(e) {
    if (this.data.buyNum > 1) {
      this.setData({
        buyNum: this.data.buyNum - 1
      })
    }
  },

  // 输入数量
  numInput(e) {
    if (isNaN(e.detail.value) || Number(e.detail.value) === 0) {
      this.setData({
        buyNum: 1
      })
      return
    }
    if (e.detail.value > this.data.maxBuyNum) {
      this.setData({
        buyNum: 3
      })
      return
    }
    this.setData({
      buyNum: Number(e.detail.value)
    })
  },

  // 创建订单
  buy() {
    if (this.data.specsArr.length < this.data.detail.sku.length) {
      wx.showToast({
        title: '请选择规格',
        icon: 'loading'
      })
      return
    }

    let obj = {
      buy_type: this.data.buyType,
      good_id: this.data.id,
      num: this.data.buyNum,
      message: '',
      sku: this.data.specsArr.length == 0 ? '默认,默认' : (this.data.specsArr.length == 1 ? this.data.specsArr[0] + ',默认' : this.data.specsArr.toString()),
      active_id: this.data.groupId ? this.data.groupId : 0
    }
    createOrder(obj).then(res => {
      wx.navigateTo({
        url: '/pages/confirm/confirm?orderId=' + res.data.order_id + '&goodsId=' + res.data.good_id
      })
    })
  },

  // 分享
  onShareAppMessage() {
    console.log('/pages/goodsDetail/goodsDetail?id=' + this.data.detail.goods.id + '&shareUserId=' + wx.getStorageSync('userId'))
    return {
      title: this.data.detail.goods.name,
      path: '/pages/goodsDetail/goodsDetail?id=' + this.data.detail.goods.id + '&shareUserId=' + wx.getStorageSync('userId'),
      imageUrl: this.data.detail.goods.banners[0]
    }
  },
})
