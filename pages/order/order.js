import {
  orderList,
  take
} from '../../config/api'

Page({
  data: {
    tabList: [
      '全部', '待付款', '待发货', '已发货', '已完成', '已取消'
    ],
    tabIndex: 0,
    list: [],
    page: 1
  },

  onShow() {
    if (!wx.getStorageSync('loginStatus')) {
      wx.showToast({
        title: '请先登录',
        icon: 'loading'
      })
      setTimeout(function () {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }, 500)
      return
    }

    this.setData({
      page: 1,
      tabIndex: wx.getStorageSync('lookOrderTab') ? wx.getStorageSync('lookOrderTab') : 0
    })
    this.getData()
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      page: 1,
      tabIndex: e.currentTarget.dataset.index
    })
    wx.setStorageSync('lookOrderTab', this.data.tabIndex)
    this.getData()
  },

  // 数据
  getData(addStatus = false) {
    let obj = {
      page: this.data.page,
      type: this.data.tabIndex
    }
    orderList(obj).then(res => {
      this.setData({
        list: addStatus ? this.data.concat(res.data) : res.data
      })
    })
  },

  // 收货
  take(e) {
    let that = this
    wx.showModal({
      title: '确认',
      content: '是否确认收货',
      success(r) {
        if (r.confirm) {
          let obj = {
            id: e.currentTarget.dataset.id
          }
          take(obj).then(res => {
            wx.showToast({
              title: '收货成功',
              icon: "success"
            })
            setTimeout(function () {
              that.setData({
                page: 1
              })
              that.getData()
            }, 1000)
          })
        }
      }
    })
  },

  // 触底
  onReachBottom() {
    this.setData({
      page: this.data.page + 1
    })
    this.getData(true)
  },

  // 跳转
  to(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  }
})
