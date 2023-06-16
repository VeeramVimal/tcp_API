const express = require('express')
const { education } = require('../../validations')
const { educationController } = require('../../controllers')
const validateUser = require('../../middlewares/validateUser')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/', validateUser, educationController.getAllEducation)
router.get('/:education_id', validateUser, validate(education.getOneEducation), educationController.getOneEducation)
router.post('/', validateUser, validate(education.createEducation), educationController.createEducation)
router.put('/:education_id', validateUser, validate(education.updateEducation), educationController.updateByEducation)
router.delete('/:education_id', validateUser, validate(education.deleteEducation), educationController.deleteEducation)

module.exports = router