Page({
  data: {
    tabIndex: 0,
    tab: ['生鲜', '水产类', '化妆护肤', '冷饮', '酒水饮料', '土特产', '充值卡', '生活用品', '创意礼品'],
    twoIndex: 0,
    two: ['蔬菜', '水果', '生鲜肉类', '鸡腿', '汉堡', '可乐', '拉面', '面包']
  },

  // 切换tab
  checkoutTab(e){
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },

   // 切换two
   checkoutTwo(e){
    this.setData({
      twoIndex: e.currentTarget.dataset.index
    })
  }
})
