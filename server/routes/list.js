var router = require("koa-router")()
var controller = require("../controller/list")

const routers = router.get('/list', async(ctx)=>{
    ctx.body = 'hello koa'
})

module.exports = routers