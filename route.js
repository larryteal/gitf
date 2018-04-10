let Router = require('koa-router');
let router = new Router();

router.get('/',ctx => {
    ctx.body =  'hello word';
});
router.get('/home',ctx => {
    ctx.body = 'is home page'
})

module.exports = router;