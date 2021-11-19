//整合所有路由
var router = require("koa-router")()

const list = require('./list')

//多个子路由使用use
router.use('/', list.routes(), list.allowedMethods())

module.exports = router