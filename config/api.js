var common = require('./request')

// 登录
export function login(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/login/miniapp_login' + repair,
    data: data
  })
}

// 修改用户信息
export function updateUserInfo(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user/editUser' + repair,
    data: data
  })
}

// 首页
export function homeData(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/home/index' + repair,
    data: data
  })
}

// 商品列表
export function goodsList(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/active/list' + repair,
    data: data
  })
}

// 商品详情
export function goodsDetail(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/active/detail' + repair,
    data: data
  })
}

// 配置
export function setting(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/home/setting' + repair,
    data: data
  })
}

// 我的推荐
export function pushList(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/myInvite' + repair,
    data: data
  })
}

// 收藏
export function follow(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user/setFavorites' + repair,
    data: data
  })
}

// 用户信息
export function userInfo(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/userinfo' + repair,
    data: data
  })
}

// 地址列表
export function addressList(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/address_query' + repair,
    data: data
  })
}

// 位置树
export function whereTree(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/address/list' + repair,
    data: data
  })
}

// 修改地址
export function editAddress(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user/address_save' + repair,
    data: data
  })
}

// 获取地址
export function getAddress(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/address_info' + repair,
    data: data
  })
}

// 删除地址
export function delAddress(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user/address_delete' + repair,
    data: data
  })
}

// 收藏列表
export function followList(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/getFavorites' + repair,
    data: data
  })
}

// 创建订单
export function createOrder(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/order/create' + repair,
    data: data
  })
}

// 默认地址
export function defaultAddress(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/DefaultAddress' + repair,
    data: data
  })
}

// 订单详情
export function orderDetail(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/order/order_info' + repair,
    data: data
  })
}

// 订单支付数据
export function orderPayData(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/order/pre' + repair,
    data: data
  })
}

// 支付
export function pay(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/wxpay/miniapp_pay' + repair,
    data: data
  })
}

// 钱包
export function wallet(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/BalanceDetail' + repair,
    data: data
  })
}

// 订单列表
export function orderList(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/order/query' + repair,
    data: data
  })
}

// 拼团记录
export function earnList(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/myActive' + repair,
    data: data
  })
}

// 排行榜
export function rank(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/rank/list' + repair,
    data: data
  })
}

// 公告详情
export function noticeDetail(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/home/notice' + repair,
    data: data
  })
}

// 拼团详情
export function groupDetail(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/active/groupDetail' + repair,
    data: data
  })
}

// 收入支出统计
export function moneyCount(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/user/getEntry' + repair,
    data: data
  })
}

// 提现申请
export function transfer(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user/transfer' + repair,
    data: data
  })
}

// 抽奖详情
export function luckDetail(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/luck/list' + repair,
    data: data
  })
}


// 刮奖
export function luck(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/luck/get' + repair,
    data: data
  })
}

// 支付后创建的团
export function groupId(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/wxpay/getStatus' + repair,
    data: data
  })
}

// 确认收货
export function take(data, repair = '') {
  return common.go({
    method: 'get',
    url: '/order/receiveOrder' + repair,
    data: data
  })
}