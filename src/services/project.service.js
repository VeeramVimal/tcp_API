const httpStatus = require('http-status')
const { Project, Clientdetails, Employee } = require('../models')
const { getOneClientdetails } = require('./clientdetails.service')
const ApiError = require('../utils/ApiError')
const sequalize = require('sequelize')

const removeFile = require('../utils/removeFile')


/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createProject = async (userBody) => {
   
    if(await getOneClientdetails(userBody.client_id) === null) throw new ApiError(httpStatus.BAD_REQUEST, 'there is not client details')
    return await Project.create(userBody);
};


const getAllProject = async () => {
    const getAllpackage = await Project.findAll(
    {
    include:[{
        model: Employee,
        required: true
    },
    // {
    //     include:[{
    //         model: Clientdetails,
    //     }]
    // }
    ]
}
    )
    return getAllpackage;
};

const getShortProject = async () => {
    const getAllproject = await Project.findAll({
            attributes: ['project_id', 'project_name']
    });
    return getAllproject;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId}   project_id
* @returns {Promise<User>}
*/
const getOneProject = async (user_id) => {
    return await Project.findOne({ where: { project_id: user_id } })
};

const getTotalcounts = async () => {
    return Project.findAll()
};


/**
 * updateJobslistById
 * @param {ObjectId}   Project_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateProject = async (Project_id, updateBody) => {
    const Project = await getOneProject(Project_id);
    if (!Project) {
        throw new ApiError(httpStatus.NOT_FOUND, 'project not found');
    }
    if(Project.add_file) removeFile(Project.add_file)
    Object.assign(Project, updateBody);
    await Project.save();
    return Project;
};


/**
 * Delete Package by id
 * @param {ObjectId}   project_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteProject = async (project_id) => {
    const Project = await getOneProject(project_id);
    if (!Project) {
        throw new ApiError(httpStatus.NOT_FOUND, 'project not found');
    }
    if(Project.add_file) removeFile(Project.add_file)
    await Project.destroy({ where: { project_id: project_id } });
    return Project;
};

module.exports = {
    createProject,
    getShortProject,
    getAllProject,
    getOneProject,
    updateProject,
    deleteProject,
    getTotalcounts,
   
}
