import {
  setting
} from 'config/api'

App({
  globalData: {
    imgPre: 'https://pin.giftfond.cn/', // 图片前缀
    navHeight: null,
    navTop: null,
    windowHeight: null,
    iphoneFooter: null,
  },
  
  onShow() {
    this.getSetting()
    this.getPhoneModel()
    this.topData()
  },

  // 设置
  getSetting() {
    setting().then(res => {
      wx.setStorageSync('applyPromotersPrice', Number(res.data.pro_price))
      wx.setStorageSync('pointsPushImg', res.data.points_pushImg)
    })
  },

  // 获取机型
  getPhoneModel() {
    wx.getSystemInfo({
      success: (res) => {
        if (res.model.indexOf('iPhone X') != -1 ||
          res.model.indexOf('iPhone XR') != -1 ||
          res.model.indexOf('iPhone XS Max') != -1 ||
          res.model.indexOf('iPhone 11') != -1 ||
          res.model.indexOf('iPhone 11 Pro') != -1 ||
          res.model.indexOf('iPhone 11 Pro Max') != -1) {
          this.globalData.iphoneFooter = true;
        } else {
          this.globalData.iphoneFooter = false;
        }
      }
    })
  },

  // 计算顶部数据
  topData() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top, //胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2; //导航高度
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})
