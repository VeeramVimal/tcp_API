const express = require('express');
const validate = require('../../middlewares/validate');
const jobCategory = require('../../validations/jobcategory.validation');
const jobsCategory = require('../../controllers/jobcategory.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', auth('manageUsers'),validate(jobCategory.createSkils), jobsCategory.createCategory);
router.get('/', auth('manageUsers'), jobsCategory.getAllJobcategory);
router.get('/:category_id', auth('manageUsers'), jobsCategory.getByCategory);
router.put('/:category_id', auth('manageUsers'),validate(jobCategory.updateCategory), jobsCategory.updateByCategory);
router.delete('/:category_id', auth('manageUsers'), jobsCategory.deletecategory);
module.exports = router;