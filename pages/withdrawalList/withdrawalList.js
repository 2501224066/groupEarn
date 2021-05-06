const App = getApp()

Page({
  data: {
    phoneFooter: null,
    navHeight: null,
    navTop: null,
    tabIndex: 0,
    tab: ['成功', '审核中', '失败'],
    dateIndex: 0,
    date: [],
  },

  onShow() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop,
      iphoneFooter: App.globalData.iphoneFooter,
    })
    this.sixMonth()
  },

  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },

  // 最近六个月
  sixMonth() {
    let data = new Date();
    let year = data.getFullYear();
    let mon = data.getMonth() + 2;
    let date = new Array();
    for (let i = 0; i < 5; i++) {
      mon = mon - 1;
      if (mon <= 0) {
        year = year - 1;
        mon = mon + 12;
      }
      if (mon < 10) {
        mon = "0" + mon;
      }
      date[i] = year + "/" + mon
    }
    this.setData({
      date: date
    })
  },

  bindPickerChange(e) {
    this.setData({
      page: 1,
      dateIndex: e.detail.value
    })
    this.getData()
    this.count()
  },


})