import {
  luckDetail,
  luck
} from '../../config/api'

const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    id: null, // 团ID
    goodsId: null, // 商品ID
    detail: null,
    self: '*', // 自己刮开的号
    list: [], // 全部数字
    openList: [], // 打开的数字
    overTime: 0, // 结束时间
    nowTime: 0, // 当前时间
    relShow: false, // 弹框
    d: '00',
    H: '00',
    i: '00',
    s: '00'
  },

  onLoad(options) {
    this.setData({
      id: options.id,
      goodsId: options.goodsId
    })
  },

  onShow() {
    this.setData({
      nowTime: Math.floor(Date.parse(new Date()) / 1000),
      iphoneFooter: App.globalData.iphoneFooter
    })
    this.getData()
  },

  // 数据
  getData() {
    let obj = {
      active_id: this.data.id,
      good_id: this.data.goodsId
    }
    luckDetail(obj).then(res => {
      this.setData({
        detail: res.data,
        openList: res.data.list,
        self: res.data.me,
        list: res.data.position
      })
      this.countTime()
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '我正在参加钻石团的拼团抢购，快来和我一起参加吧～',
      path: '/pages/earnDetail/earnDetail?id=' + this.data.detail.active_id + '&shareUserId=' + wx.getStorageSync('userId') + '&joinGroupId=' + this.data.detail.active_id,
      imageUrl: 'https://shop.970209.xyz/uploads/images/202104/84b502d0cde4afca2743521141bfbf5.jpg'
    }
  },

  // 去拼团
  toMake() {
    wx.switchTab({
      url: '/pages/make/make',
    })
  },

  // 关闭弹框
  relClose() {
    this.setData({
      relShow: false
    })
  },

  // 刮奖
  open(e) {
    let obj = {
      num: e.currentTarget.dataset.num,
      active_id: this.data.id,
      good_id: this.data.goodsId
    }
    luck(obj).then(res => {
      if (res.data == 1) {
        this.setData({
          me: e.currentTarget.dataset.num,
          relShow: true
        })
        this.getData()
      } else {
        wx.showToast({
          title: '该牌已被他人翻开',
          icon: 'loading'
        })
        this.getData()
      }
    })
  },

  // 倒计时
  countTime() {
    let that = this
    let timing = setInterval(function () {
      let nowTime = that.data.nowTime
      let d = '00'
      let H = '00'
      let i = '00'
      let s = '00'
      if (that.data.detail.end_time >= nowTime) {
        let surplus = that.data.detail.end_time - nowTime
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
