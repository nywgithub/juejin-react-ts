// 使用 Mock
import Mock from 'mockjs'

export const postdata =  Mock.mock('/postdata1','get',{
    success: true,
    message: '@cparagraph',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1,
        // 属性 userId 是一个5位的随机码
        'userId|5': '',
    }],
    test:'@cname' //随机中文名
})
export const getinfo =  Mock.mock(RegExp('/getinfo?' + ".*"), "get", {
    success: true,
    message: '@cparagraph',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|12': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'title': '@cname(2)',
        // 属性 userId 是一个5位的随机码
        'url': '@string("lower",5)',
    }],
    name:'@cname' //随机中文名
});