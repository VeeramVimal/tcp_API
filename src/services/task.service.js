const httpStatus = require('http-status');
const { Task, Employee, Project } = require('../models');
const { getOneProject } = require('./project.service');
const ApiError = require('../utils/ApiError');
const sequalize = require('sequelize')



/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createTask = async (userBody) => {
    
    if(await getOneProject(userBody.project_id) === null) throw new  ApiError(httpStatus.BAD_REQUEST, 'Project is not found')
    return await Task.create(userBody);
};

const getAllTask = async () => {
    const getAlltask= await Task.findAll({
        include:[{
            model: Employee,
            attributes: ['employee_id']
        },{
            model: Project,
            attributes: ['project_id']
        }]
    });
    return getAlltask;
};

const getShortTask = async () => {
    const getAllTask = await Task.findAll({
            attributes: ['task_id', 'task_title']
    });
    return getAllTask;
};

const getOneTask = async (task_id) => {
    return await Task.findOne({ where: { task_id: task_id } })
};
/**
* Get SinglePackage by skil_id
* @param {ObjectId} task_id
* @returns {Promise<User>}
*/
const getByTask = async (task_id) => {
    return await Task.findOne({ where: { task_id: task_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} task_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateTask = async (task_id, updateBody) => {
    const Task = await getOneTask(task_id);
    if (!Task) {
        throw new ApiError(httpStatus.NOT_FOUND, 'task not found');
    }
    Object.assign(Task, updateBody);
    await Task.save();
    return Task;
};


/**
 * Delete Package by id
 * @param {ObjectId} task_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteTask = async (task_id) => {
    const deleteTask = await getOneTask(task_id);
    if (!deleteTask) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'task not found');
    }
    Object.assign(deleteTask);
    await deleteTask.destroy({ where: { task_id: task_id } });
    return deleteTask;
};

const countAllTask = async (user_id) => {
    return await Task.findAll({ where : { employee_id: user_id} })  
}
const getEmployeeTask = async (employee_id) => {
    const EmployeeTask = await Task.findAll({
        where: {
            employee_id: employee_id
        }
    })
    return EmployeeTask
}


const  addTask = async (req) => {
    const addValue = {
        project_id: req.project_id,
    }
    const ProjectResponse = await getOneProject(addValue.project_id)
    if(!ProjectResponse){
        throw new ApiError(httpStatus.BAD_REQUEST, "job is not valid")
    }
    const existingUser = await getOneTask(addValue)
    if(existingUser){
        throw new ApiError(httpStatus.BAD_REQUEST, "already added to Favorite jobs")
    }
    const Project = await Task.create(addValue)
    return Project;
}
module.exports = {
    createTask,
    getOneTask,
    getAllTask,
    getByTask,
    updateTask,
    deleteTask,
    getEmployeeTask,
    addTask,
    getShortTask,
    countAllTask
};
