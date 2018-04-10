let Router = require('koa-router');
let router = new Router();

router.get('/',ctx => {
    ctx.body =  'Hello Word !!';
});
router.get('/home',ctx => {
    ctx.body = 'Welcome home page !'
})

module.exports = router;