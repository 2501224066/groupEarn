import {
  pointsPush
} from '../../config/api'

Page({
  data: {
    goods: [],
    page: 1,
    pointsPushImg: null,
    pagesize: 14,
    imgPre: null
  },

  onShow() {
    this.setData({
      imgPre: wx.getStorageSync('imgPre'),
      pointsPushImg: wx.getStorageSync('pointsPushImg'),
      page: 1,
    })
    this.getPush()
  },

  // 推荐商品
  getPush(addStatus = false) {
    let obj = {
      page: this.data.page,
      pagesize: this.data.pagesize,
    }
    pointsPush(obj).then(res => {
      this.setData({
        goods: addStatus ? this.data.goods.concat(res.data) : res.data
      })
    })
  },

  // 触底
  onReachBottom() {
    this.setData({
      page: this.data.page + 1
    })
    this.getGoods(true)
  },
})
