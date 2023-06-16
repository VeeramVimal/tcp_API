const express = require('express');
const validate = require('../../middlewares/validate');
const clientdetails = require('../../validations/clientdetails.validation');
const clientdetailsController = require('../../controllers/clientdetails.controller');
const auth = require('../../middlewares/auth');


const router = express.Router();

router.get('/', auth('manageUsers'), clientdetailsController.getAllClientdetails);
router.get('/:client_id', auth('manageUsers'), validate(clientdetails.getOneClientdetails), clientdetailsController.getOneClientdetails);
router.post('/', auth('manageUsers'), validate(clientdetails.createClientdetails), clientdetailsController.createClientdetails);
router.put('/:client_id', auth('manageUsers'), validate(clientdetails.updateClientdetails), clientdetailsController.updateClientdetails);
router.delete('/:client_id', auth('manageUsers'), validate(clientdetails.deleteClientdetails), clientdetailsController.deleteClientdetails);

module.exports = router;