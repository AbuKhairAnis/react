const router = require('express').Router();
const {findAll,sendingMessage} = require('./controlar')


router.route('/').post(sendingMessage)
router.route('/find').get(findAll)




module.exports = router;