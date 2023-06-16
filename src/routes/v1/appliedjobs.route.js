const express = require('express');
const validate = require('../../middlewares/validate');
const appliedJobsController = require('../../controllers/appliedjobs.controller');
const auth = require('../../middlewares/auth');
const { appliedjobs } = require("../../validations")


const router = express.Router();

//Admin routes
//get all application from api
router.get('/admin', appliedJobsController.getAllAppliedJobs);
// router.get('/admin', appliedJobsController.getAllAppliedJobs);
router.get('/applicant/:appliedjob_id', validate(appliedjobs.getAdminOneAppliedjobs),  appliedJobsController.getApplicantDetailsByApplicationId)
router.put('/admin/:appliedjob_id', validate(appliedjobs.updateAdminAppliedjobs), appliedJobsController.updateAppliedJobs)



//Candidate routes
//get user application from api
router.get('/', auth('getUsers'), appliedJobsController.getUserAppliedJobs)
router.post('/', auth('getUsers'), validate(appliedjobs.createEmpAppliedjobs), appliedJobsController.createAppliedJobs)
router.delete('/bulk', auth('getUsers'), validate(appliedjobs.deleteEmpBulkAppliedjobs), appliedJobsController.deleteBulkAppliedJobs)
router.delete('/:job_id', auth('getUsers'), validate(appliedjobs.deleteEmpAppliedjobs), appliedJobsController.deleteAppliedJobs)

module.exports = router;