Component({
  lifetimes: {
    attached() {
      this.carNum()
    }
  },
  methods: {
    // 查询购物车数量
    carNum() {
      wx.setTabBarBadge({
        index: 3,
        text: '1'
      })
    }
  }
})
