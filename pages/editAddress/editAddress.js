import {
  whereTree,
  editAddress,
  getAddress
} from '../../config/api'

const App = getApp()

Page({
  data: {
    id: null,
    iphoneFooter: null,
    sex: null,
    default: 0,
    address: null,
    name: null,
    phone: null,
    multiIndex: [0, 0, 0],
    multiArray: [],
    regionList: []
  },
  onLoad(options) {
    this.setData({
      id: options.id
    })
  },

  onShow() {
    this.setData({
      iphoneFooter: App.globalData.iphoneFooter,
    })
    this.getData()
  },

  // 数据
  getData() {
    whereTree().then(res => {
      this.setData({
        regionList: res.data
      })
      this.initMultiArray()
    })
    if (this.data.id) {
      let obj = {
        id: this.data.id
      }
      getAddress(obj).then(res => {
        this.setData({
          sex: res.data.sex,
          default: res.data.is_default,
          address: res.data.street,
          name: res.data.contact,
          phone: res.data.mobile,
        })
        this.data.id ? this.setMultiIndex(res.data.province, res.data.city, res.data.area) : null
      })
    }
  },

  // 编辑地址
  save() {
    if (!(this.data.name && (/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.data.phone)) && this.data.address && this.data.sex && this.data.address)) {
      wx.showToast({
        title: '填写有误',
        icon: "loading"
      })
      return
    }

    let obj = {
      contact: this.data.name,
      mobile: this.data.phone,
      province: this.data.multiArray[0][this.data.multiIndex[0]],
      city: this.data.multiArray[1][this.data.multiIndex[1]],
      area: this.data.multiArray[2][this.data.multiIndex[2]],
      street: this.data.address,
      is_default: this.data.default,
      sex: this.data.sex,
    }
    this.data.id ? obj.id = this.data.id : null
    editAddress(obj).then(res => {
      wx.navigateBack()
    })
  },

  // 修改设定地址
  setMultiIndex(province, city, area) {
    let that = this
    that.data.regionList.forEach(function (v, k) {
      if (v.name == province) {
        that.setTwo(k)
        that.data.regionList[k].children.forEach(function (o, p) {
          if (o.name == city) {
            that.setThree(p)
            that.data.regionList[k].children[p].children.forEach(function (i, j) {
              if (i.name == area) {
                that.setData({
                  multiIndex: [k, p, j]
                })
              }
            })
          }
        })
      }
    })
  },

  // 初始转换地址数据
  initMultiArray() {
    let one = []
    this.data.regionList.forEach(element => {
      one.push(element.name)
    })
    let two = []
    this.data.regionList[0].children.forEach(element => {
      two.push(element.name)
    })
    let three = []
    this.data.regionList[0].children[0].children.forEach(element => {
      three.push(element.name)
    })
    this.setData({
      multiArray: [one, two, three]
    })
  },

  // 选择地址
  bindMultiPickerColumnChange(e) {
    //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
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
      this.data.multiArray[1].push(element.name)
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
      this.data.multiArray[2].push(element.name)
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
