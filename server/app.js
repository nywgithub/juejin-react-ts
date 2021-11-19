const path = require("path") //path处理文件之间的调用
const koa = require("koa")
const views = require("koa-views")
const session = require("koa-session-minimal")
const kosStatic = require("koa-static") //处理静态文件
const bodyParser = require("koa-bodyparser")
const config = require("../config")
const routers = require("./routes/index")

const app = new koa()

//配置post请求时对ctx.body的解析
app.use(bodyParser())

//初始化路由中间件
console.log('routers', routers)
app.use(routers.routes())
   .use(routers.allowedMethods())

//监听启动端口
var port = config.port
app.listen(port)
console.log(`success start in port ${port}`)