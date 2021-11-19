module.exports = {
    async getlist (ctx){
        console.log(ctx)
        await ctx.render('list', 'list页面')  
    },
}