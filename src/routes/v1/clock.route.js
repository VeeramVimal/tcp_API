const express = require('express')
const { clock } = require('../../validations')
const { clockController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/',  clockController.getAllClock)
router.get('/:clock_id',  validate(clock.getOneClock), clockController.getOneClock)
router.post('/',  validate(clock.createClock), clockController.createClock)
router.put('/:clock_id',  validate(clock.updateClock), clockController.updateByClock)
router.delete('/:clock_id',  validate(clock.deleteClock),clockController.deleteClock)

module.exports = router
