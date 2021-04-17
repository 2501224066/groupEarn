import {
  orderDetail
} from '../../config/api'

const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    id: null,
    d: '00',
    H: '00',
    i: '00',
    s: '00',
  },

  onLoad(options) {
    this.setData({
      id: options.id
    })
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
    this.getData()
  },

  // 数据
  getData() {
    let obj = {
      id: this.data.id
    }
    orderDetail(obj).then(res => {
      this.setData({
        detail: res.data
      })
      this.countTime()
    })
  },

  // 倒计时
  countTime() {
    let that = this
    let timing = setInterval(function () {
      let nowTime = Math.floor(Date.parse(new Date()) / 1000);
      let d = '00'
      let H = '00'
      let i = '00'
      let s = '00'
      if (that.data.detail.over_time >= nowTime) {
        let surplus = that.data.detail.over_time - nowTime
        d = that.addZero(Math.floor(surplus / 86400))
        H = that.addZero(Math.floor((surplus - d * 86400) / 3600))
        i = that.addZero(Math.floor((surplus - d * 86400 - H * 3600) / 60))
        s = that.addZero(surplus - d * 86400 - H * 3600 - i * 60)
      }
      that.setData({
        d: d,
        H: H,
        i: i,
        s: s
      })
    }, 1000)

    that.setData({
      timing: timing
    })
  },

  // 补零
  addZero(num) {
    return num < 10 ? "0" + num : num
  },

  onHide() {
    clearInterval(this.data.timing);
  },

  onUnload() {
    clearInterval(this.data.timing);
  }
})
