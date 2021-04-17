import {
  rank
} from '../../config/api'

Page({
  data: {
    tabList: [
      '邀请', '收入', '积分', '消费'
    ],
    tabIndex: 0,
    list:[]
  },

  onShow() {
    this.getData()
  },

  // 数据
  getData(addStatus = false) {
    let obj = {
      type: this.data.tabIndex + 1
    }
    rank(obj).then(res => {
      this.setData({
        list: addStatus ? this.data.list.concat(res.data) : res.data
      })
    })
  },


  // 切换tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
    this.getData()
  }
})
