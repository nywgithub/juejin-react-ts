var router = require("koa-router")()
var controller = require("../controller/list")

const routers = router.get('list/:id', controller.getlist)

module.exports = routers