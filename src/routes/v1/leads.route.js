const express = require('express')
const { leads } = require('../../validations')
const { leadsController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

const router = express.Router()

router.get('/',auth('manageUsers'), leadsController.getAllLead)
router.get('/:lead_id', auth('manageUsers'), validate(leads.getOneLead), leadsController.getOneLead)
router.post('/', auth('manageUsers'), validate(leads.createLead), leadsController.createLead)
router.put('/:lead_id', auth('manageUsers'), validate(leads.updateLead), leadsController.updateLead)
router.delete('/:lead_id', auth('manageUsers'), validate(leads.deleteLead), leadsController.deleteLead)

module.exports = router