const express = require('express');
const validate = require('../../middlewares/validate');
const taskValidation = require('../../validations/task.validation');
const taskController = require('../../controllers/task.controller');
const auth = require('../../middlewares/auth');
const upload = require('../../config/multer');
const router = express.Router();

//task Admin Routes

router.post('/',  upload.single('add_file'), validate(taskValidation.createTask), taskController.createTask)
router.get('/', validate(taskValidation.getAllTask), taskController.getAllTask);
router.get('/short', auth('getUsers'), taskController.getShortTask);
router.get('/:task_id', auth('getUsers'), validate(taskValidation.getOneTask), taskController.getOneTask);
router.put('/:task_id', auth('getUsers'), upload.single('add_file'), taskController.updateTask);
router.delete('/:task_id', auth('getUsers'), taskController.deleteTask);

//task Employee Routes

//employee route
router.get('/employee', taskController.getEmployeeTask);

module.exports = router;
