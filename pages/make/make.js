Page({
  data: {
    tabList: [
      '全部', '1-99元', '100-199元', '200元以上'
    ],
    tabIndex: 0,
    keyword: null,
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },

  // 输入关键字
  setKeyword(e) {
    this.setData({
      keyword: e.detail.value
    })
  },

  // 关闭关键字
  close() {
    this.setData({
      keyword: null
    })
  }
})
