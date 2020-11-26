
const { index } = require('../controllers/people');

module.exports = router => {
router.get('/', index);
router.get('/docs', index);

return router;
};