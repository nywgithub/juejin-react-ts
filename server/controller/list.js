module.exports = {
    async getList (ctx){
        console.log('ctx-get', ctx)
        /* 
            从带参数请求中获取参数
        */
        //从reques原生获取
        var request = ctx.request
        var request_query = request.query
        //从ctx获取
        var ctx_query = ctx.query
        console.log(request_query, ctx_query)

        /* 
            获取动态路径url参数
        */
        var params = ctx.params
        console.log(params)

        ctx.body = "hey" 
    },
    async addList (ctx){
        console.log('ctx-add' , ctx)
        /* 
            获取post请求体参数(非json形式)
        */
        //从reques原生获取
        var postBody = ctx.request.body
        ctx.body = ctx.request.body
        console.log(postBody)
    },
}