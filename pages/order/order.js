Page({
  data: {
    tabList: [
      '全部', '待付款', '待发货', '已发货', '已完成', '已取消'
    ],
    tabIndex: 0,
    list: [{
      title: "盛大的双卡双待机啊三大开始大声的哭",
      price: "1232.24",
      num: 3,
      status: 1
    }, {
      title: "盛大的双卡双待机啊三",
      price: "132.00",
      num: 1,
      status: 2
    }, {
      title: "盛大的双卡双待啊三",
      price: "12.90",
      num: 1,
      status: 5
    }]
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },
})
