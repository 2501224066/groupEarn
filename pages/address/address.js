const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    list: [{
        agen: '湖北-武汉-汉阳',
        address: '拉屎的卡是加大宽阿迪说的撒的撒的撒的撒打算可',
        name: '李嗷嗷',
        phone: '1992323242',
        sex: 1
      },
      {
        agen: '湖北-武汉-汉阳',
        address: '拉屎的卡是加大宽阿迪',
        name: '李嗷嗷',
        phone: '1992323242',
        sex: 2
      }
    ]
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter,
    })
  },
})
