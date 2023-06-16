const express = require('express')
const { leave } = require('../../validations')
const { leaveController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/',  leaveController.getAllLeave)
router.get('/:leave_id',  validate(leave.getOneLeave), leaveController.getOneLeave)
router.post('/',  validate(leave.createLeave), leaveController.createLeave)
router.put('/:leave_id',  validate(leave.updateLeave), leaveController.updateByLeave)
router.delete('/:leave_id',  validate(leave.deleteLeave),leaveController.deleteLeave)

module.exports = router
