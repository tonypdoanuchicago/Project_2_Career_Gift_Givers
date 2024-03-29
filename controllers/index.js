const router = require('express').Router();

const apiroutes = require('./api');
const homeRoutes = require('./homeRoutes')
router.use('/api', apiroutes);
router.use('/api', homeRoutes);
module.exports = router;
