const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    remainingTime: 1021, // 剩余时间
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter
    })
    this.countTime()
  },

  // 倒计时
  countTime() {
    var that = this
    setInterval(function () {
      if (that.data.remainingTime >= 0) {
        that.setData({
          timeData: that.getHi(that.data.remainingTime),
          remainingTime: that.data.remainingTime - 1
        })
      }
    }, 1000)
  },

  // 获取分秒
  getHi(num) {
    var i = Math.floor((num) / 60)
    var s = num - i * 60
    return this.addZero(i) + "分" + this.addZero(s) + "秒"
  },

  // 补零
  addZero(num) {
    return num < 10 ? "0" + num : num
  },


})
