Page({
  data: {
    tabList: [
      '全部', '拼团中', '拼团成功', '拼团失败'
    ],
    tabIndex: 0,
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  }

})
