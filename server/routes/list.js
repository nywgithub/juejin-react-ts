var router = require("koa-router")()
var controller = require("../controller/list")
router.get('list/:id', controller.getList)
router.post('add', controller.addList)
module.exports = router