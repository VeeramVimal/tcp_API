const router = require('express').Router();
const validate = require('../../middlewares/validate');
const projectValidation = require('../../validations/project.validation');
const projectController = require('../../controllers/project.controller');
const upload = require('../../config/multer');
const auth = require('../../middlewares/auth');



// router.get('/count', projectController.getTotalcount)
router.post('/', upload.single('add_file'), validate(projectValidation.createProject), projectController.createProject)
router.get('/', projectController. getALLProject)
router.get('/short', projectController. getShortProject)
router.get('/:project_id', validate(projectValidation.getOneProject), projectController.getOneProject)
router.put('/:project_id', upload.single('add_file'), projectController.updateProject)
router.delete('/:project_id',  projectController.deleteProject)

module.exports = router