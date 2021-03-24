import {
  homeData
} from '../../config/api'

const App = getApp()

Page({
  data: {
    navHeight: null,
    navTop: null,
    swiper: [
      "https://img2.woyaogexing.com/2017/10/17/556d6117294495f8!400x400_big.jpg",
      "https://img2.woyaogexing.com/2017/10/17/28990af8ee939ee1!400x400_big.jpg"
    ],
    active: [] // 团
  },

  onShow() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    })
    this.getData()
  },

  getData() {
    homeData().then(res => {
      this.setData({
        swiper: res.data.banner,
        active: res.data.active
      })
    })
  }
})
