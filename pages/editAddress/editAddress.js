const App = getApp()

Page({
  data: {
    iphoneFooter: null,
    sex: 1,
    default: 0,
    address: null,
    name: null,
    phone: null,
    multiIndex: [0, 0, 0],
    multiArray: [],
    regionList: [{
      label: "黄石路",
      children: [{
          label: "万科",
          children: [{
              label: "13楼"
            },
            {
              label: "18楼"
            }
          ]
        },
        {
          label: "万达",
          children: [{
            label: "19楼"
          }]
        }
      ]
    }, {
      label: "玉门关",
      children: [{
          label: "今天",
          children: [{
              label: "5楼"
            },
            {
              label: "10楼"
            }
          ]
        },
        {
          label: "明天",
          children: [{
            label: "9楼"
          }]
        }
      ]
    }]
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter,
    })
    this.initMultiArray()
  },

  // 初始转换数据
  initMultiArray() {
    let one = []
    this.data.regionList.forEach(element => {
      one.push(element.label)
    })
    let two = []
    this.data.regionList[0].children.forEach(element => {
      two.push(element.label)
    })
    let three = []
    this.data.regionList[0].children[0].children.forEach(element => {
      three.push(element.label)
    })
    this.setData({
      multiArray: [one, two, three]
    })
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },

  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    switch (e.detail.column) {
      case 0:
        this.setTwo(e.detail.value)
        break
      case 1:
        this.setThree(e.detail.value)
        break
      case 2:
        this.data.multiIndex[2] = e.detail.value
        this.setData({
          multiIndex: this.data.multiIndex
        })
    }
  },

  // 根据选择第一列元素修改第二列列表
  setTwo(key) {
    this.data.multiIndex = [key, 0, 0]
    this.data.multiArray[1] = []
    this.data.regionList[key].children.forEach(element => {
      this.data.multiArray[1].push(element.label)
    })
    this.setData({
      multiIndex: this.data.multiIndex,
      multiArray: this.data.multiArray
    })
    this.setThree(0)
  },

  // 根据选择第二列元素修改第三列列表
  setThree(key) {
    this.data.multiIndex = [this.data.multiIndex[0], key, 0]
    this.data.multiArray[2] = []
    this.data.regionList[this.data.multiIndex[0]].children[key].children.forEach(element => {
      this.data.multiArray[2].push(element.label)
    })
    this.setData({
      multiIndex: this.data.multiIndex,
      multiArray: this.data.multiArray
    })
  },

  // 省市区
  regionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  // 选择性别
  checkoutSex(e) {
    this.setData({
      sex: e.currentTarget.dataset.sex
    })
  },

  // 设置默认
  setDefault() {
    this.setData({
      default: this.data.default == 1 ? 0 : 1
    })
  },

  // 地址
  address(e) {
    this.setData({
      address: e.detail.value
    })
  },

  // 电话
  phone(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 姓名
  name(e) {
    this.setData({
      name: e.detail.value
    })
  }
})
