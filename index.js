let Koa  = require('koa');

let app = new Koa();

app.use(ctx => {
    ctx.body = 'hello word'
})
app.listen(3300);