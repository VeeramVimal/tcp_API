const express = require('express');
// const multer = require('multer');
const validate = require('../../middlewares/validate');
const { applicantdetails } = require('../../validations');
const applicantdetailsController = require('../../controllers/applicantdetails.controller');
const upload = require('../../config/multer');
const auth = require('../../middlewares/auth');


const router = express.Router();

router.post('/admin', auth('manageUsers'), upload.fields([{name:'applicant_cv'},{name:'applicant_image'}]),validate(applicantdetails.createApplicant), applicantdetailsController.createApplicants);
router.get('/admin', auth('manageUsers'), applicantdetailsController.getAllApplicants);

router.post('/', auth(), upload.fields([{name:'applicant_cv'},{name:'applicant_image'}]), validate(applicantdetails.createApplicantdetails), applicantdetailsController.createApplicants);
router.get('/', auth(), applicantdetailsController.getoneApplicants);
router.put('/', auth(), upload.fields([{name:'applicant_cv'},{name:'applicant_image'}]), validate(applicantdetails.updateApplicantdetails), applicantdetailsController.updateApplicants);
router.delete('/', auth(), applicantdetailsController.deleteApplicants);
module.exports = router;