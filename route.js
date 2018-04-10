let Router = require('koa-router');
let router = new Router();

router.get('/',ctx => {
    ctx.body =  'hello word';
});

module.exports = router;