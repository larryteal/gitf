let Router = require('koa-router');
let router = new Router();

router.get('/',ctx => {
    ctx.body =  'Hello Word !';
});

module.exports = router;