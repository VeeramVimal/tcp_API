const express = require('express')
const { workexperience } = require('../../validations')
const { workexperienceController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')
const validateUser = require('../../middlewares/validateUser')
const router = express.Router()

router.get('/', auth('getUsers'), workexperienceController.getAllWorkexperience)
router.get('/:work_id', auth('getUsers'), validate(workexperience.getOneWorkexperience), workexperienceController.getOneWorkexperience)
router.post('/', auth('getUsers'), validate(workexperience.createWorkexperience), workexperienceController.createWorkexperience)
router.put('/:work_id', auth('getUsers'), validate(workexperience.updateWorkexperience), workexperienceController.updateByWorkexperience)
router.delete('/:work_id', auth('getUsers'), validate(workexperience.deleteWorkexperience), workexperienceController.deleteWorkexperience)

module.exports = router
