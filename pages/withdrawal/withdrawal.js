Page({
  data: {
    agree: false,
    price: null
  },

  // 同意
  agree() {
    this.setData({
      agree: !this.data.agree
    })
  },

  // 金额
  setPrice(e) {
    this.setData({
      price: e.detail.value
    })
  }
})
