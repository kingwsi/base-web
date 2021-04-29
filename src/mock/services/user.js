import Mock from 'mockjs'
import { builder } from '../util'

const info = (options) =>{
  const userInfo = {
    username: 'tiez',
    mobile: '15555555555',
    avatar: 'https://avatars2.githubusercontent.com/u/35095609?s=400&v=4',
    nickName: '铁柱'
  }
  const json = builder(userInfo)
  console.log('json', json)
  return json
}

const loginByMobile = (options) =>{
  const data = JSON.parse(options.body)
  const token = 'test-token'
  let resultData = builder(token)
  if(data.username !== '15555555555' || data.password !== '123456') {
    resultData = builder(null, '用户名或密码错误', 500)
  }
  console.log(`mock[${options.url}]->`, resultData)
  return resultData
}

Mock.mock(/\/api\/user\/info/, 'get', info)

Mock.mock(/\/api\/login\/mobile/, 'post', loginByMobile)