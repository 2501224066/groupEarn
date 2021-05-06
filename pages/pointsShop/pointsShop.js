Page({
  data: {
    navScrollTop: null,
    swiper: [
      'http://pin.giftfond.cn/images/d248430474cda5da39e0373519c3bfd7.jpg',
      'http://pin.giftfond.cn/images/755dda131fc92b6db8b0417a2d2fde92.jpg'
    ], // 轮播
    tabIndex: 0,
    tab: ['生鲜水果', '海产品', '生活用品', '家用百货', '酒水饮料', '其他'],
    domScrollTop: null,
  },

  onLoad() {
    this.domScrollTop()
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
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
  }
})
