Page({
  data: {
    tabList: [
      '邀请', '收入', '积分', '消费'
    ],
    tabIndex: 0,
    rank: [{
        header: "https://img2.woyaogexing.com/2017/10/17/556d6117294495f8!400x400_big.jpg",
        name: "深度",
        sex: 1,
        num: 89
      },
      {
        header: "https://img2.woyaogexing.com/2017/10/17/556d6117294495f8!400x400_big.jpg",
        name: "神雕稀烂",
        sex: 2,
        num: 89
      },
      {
        header: "https://img2.woyaogexing.com/2017/10/17/556d6117294495f8!400x400_big.jpg",
        name: "呵呵",
        sex: 2,
        num: 89
      }, {
        header: "https://img2.woyaogexing.com/2017/10/17/556d6117294495f8!400x400_big.jpg",
        name: "深度",
        sex: 1,
        num: 89
      }
    ]
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  }
})
