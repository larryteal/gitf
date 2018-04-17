let Koa  = require('koa');
let router = require('./route')

let app = new Koa();

app.use(router.routes())
app.listen(3300);
//new git test