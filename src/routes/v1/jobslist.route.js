const express = require('express');
const validate = require('../../middlewares/validate');
const jobsListValidation = require('../../validations/jobslist.validation');
const jobsListController = require('../../controllers/jobslist.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', validate(jobsListValidation.createJobsList), jobsListController.CreateJobsList);
// router.get('/',validate(jobsListValidation.getAllJobslist), jobsListController.getAllJobslists);
router.get('/', jobsListController.getAllJobs);
router.post('/filter', validate(jobsListValidation.filteredJobslists), jobsListController.getFilteredJobslists);
router.get('/:job_id', validate(jobsListValidation.getOneJobsList), jobsListController.getOneJobslists);
router.put('/:job_id', validate(jobsListValidation.updateJobslist), jobsListController.updateJobslists);
router.delete('/:job_id', validate(jobsListValidation.deleteJobslist), jobsListController.deleteJobslists);
module.exports = router;
