Component({
  data: {
    domWidth: null,
  },
  properties: {
    detail: { // 数据列表
      type: JSON,
      value: {}
    }
  },
  lifetimes: {
    attached() {
      this.domWidth()
    }
  },
  methods: {
    // 标签宽度
    domWidth() {
      let query = this.createSelectorQuery();
      query.select('#dom').boundingClientRect();
      query.exec((res) => {
        this.setData({
          domWidth: res[0].width
        })
      })
    }
  }
})
