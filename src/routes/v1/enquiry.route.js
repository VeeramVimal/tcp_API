const express = require('express')
const { enquiry } = require('../../validations')
const { enquiryController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/', auth('getUsers'), enquiryController.getEnquiry)
router.get('/:enquiry_id', auth('getUsers'), validate(enquiry.getOneEnquiry), enquiryController.getOneEnquiry)
router.post('/', validate(enquiry.createEnquiry), enquiryController.createEnquiry)
router.put('/:enquiry_id', auth('getUsers'), validate(enquiry.updateEnquiry), enquiryController.updateEnquiry)
router.delete('/:enquiry_id', auth('getUsers'), validate(enquiry.deleteEnquiry), enquiryController.deleteEnquiry)

module.exports = router