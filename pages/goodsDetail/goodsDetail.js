const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    navHeight: null,
    navTop: null,
    navScrollTop: 0,
    swiper: [
      "https://img2.woyaogexing.com/2017/10/17/556d6117294495f8!400x400_big.jpg",
      "https://img2.woyaogexing.com/2017/10/17/28990af8ee939ee1!400x400_big.jpg"
    ],
    follow: true, // 关注
    maxBuyNum: 3, // 最大购买数量
    buyNum: 1, //购买数量
    specsShow: false, // 规格展示
    buyType: 1, // 购买类型 1:拼团 2:购买
  },

  onShow() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop,
      iphoneFooter: App.globalData.iphoneFooter
    })
  },

  // 页面上滑距离，控制 nav 变色
  onPageScroll(ev) {
    console.log(ev.scrollTop)
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
})
