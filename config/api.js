var common = require('./request')

// 登录
export function login(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/login/miniapp_login' + repair,
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
