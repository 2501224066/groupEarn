Page({
  data: {
    list: [{
      name: 'hah'
    }, {
      name: 'ww'
    }, {
      name: 'ww'
    }, {
      name: 'ww'
    }, {
      name: 'ww'
    }, {
      name: 'ww'
    }, {
      name: 'ww'
    }, {
      name: 'ww'
    }],
    touchStart: null, // 手指滑动开始坐标
  },

  // 手指滑动开始
  touchstart: function (e) {
    this.setData({
      touchStart: e.changedTouches[0].clientX
    })
  },

  // 手指滑动结束
  touchMove: function (e) {
    let clientX = e.changedTouches[0].clientX;
    let touchStart = this.data.touchStart;
    if (touchStart != null) {
      if (clientX - touchStart >= 50) {
        this.data.list[e.currentTarget.dataset.index].moveSpace = 0
        this.setData({
          touchStart: null,
          list: this.data.list
        })
      } else if (clientX - touchStart <= -50) {
        this.data.list[e.currentTarget.dataset.index].moveSpace = -75
        this.setData({
          touchStart: null,
          list: this.data.list
        })
      }
    }
  },
})
