Component({
  data: {
    imgPre: null
  },
  properties: {
    detail: { // 数据列表
      type: JSON,
      value: {}
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        imgPre: wx.getStorageSync('imgPre')
      })
    }
  },
  methods: {
    // 跳转
    to(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    }
  }
})
