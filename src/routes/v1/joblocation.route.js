const express = require('express');
const validate = require('../../middlewares/validate');
const jobLocations = require('../../validations/joblocation.validation');
const jobLocation = require('../../controllers/joblocation.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', auth('manageUsers'),validate(jobLocations.createLocation), jobLocation.createJobLocation);
router.get('/', auth('manageUsers'), jobLocation.getAllJobLocation);
router.get('/:location_id', auth('manageUsers'), jobLocation.getByLocation);
router.put('/:location_id', auth('manageUsers'),validate(jobLocations.updateLocation), jobLocation.updateByLocation);
router.delete('/:location_id', auth('manageUsers'), jobLocation.deleteLocation);
module.exports = router;

