const express = require('express');
const validate = require('../../middlewares/validate');
const jobSkils = require('../../validations/jobskils.validation');
const jobsSkils = require('../../controllers/jobskils.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/' ,validate(jobSkils.createSkils), jobsSkils.createJobSkils);
router.get('/' , jobsSkils.getAllJobSkils);
router.get('/:skil_id' , jobsSkils.getBySkils);
router.put('/:skil_id' ,validate(jobSkils.updateSkils), jobsSkils.updateBySkils);
router.delete('/:skil_id' , jobsSkils.deleteSkils);
module.exports = router;

