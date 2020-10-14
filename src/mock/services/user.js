import Mock from 'mockjs'
import { builder } from '../util'

const info = (options) =>{
    const userInfo = {
        username: 'tiez',
        mobileNum: '15557157663',
        avatar: 'https://avatars2.githubusercontent.com/u/35095609?s=400&v=4',
        nickName: '铁柱'
    }
    const json = builder(userInfo)
    console.log('json', json)
    return json
}
Mock.mock(/\/api\/user\/info/, 'get', info)