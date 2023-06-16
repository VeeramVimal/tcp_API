const { Employee, User, Assets, Givenassests, Project,Task,Leave } = require('../models')
const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status')
const removeFile = require('../utils/removeFile')

/** 
 * Get Employee
 * @param noParams
 * @returns {Promise<Enquiry/>}
 */

const getEmployee = async () => {
    const getAllemployee = await Employee.findAll({
        include: [{
            model: User,
            attributes: {
                exclude:['password','status','id']
            }
        }]
    });
    return getAllemployee;
};

//  * Get sort employee
const getShortEmployee = async () => {
    const getAllemployee = await Employee.findAll({
            attributes: ['employee_id', 'employee_firstname', 'employee_lastname']
    });
    return getAllemployee;
};
/**
 * Get One Enquiry
 * @param {Object} user_id
 * @returns {Promise<Enquiry/>}
 */
const getOneEmployee = async (user_id) => {
    const employee = await Employee.findOne({
        where: {
            user_id: user_id
        }
    })
    if(!employee) throw new ApiError(httpStatus.BAD_REQUEST, 'employee not found')
    return employee
}
const getTotalcounts = async () => {
    return Employee.findAll({ where: { status: 1 } })
};
/**
 *  Update Employee
 *  @param {Object} leave_id, updatedEmployee
 *  @returns {Promise<Enquiry/>}
 */

 const getTotalleaves = async (leave_id) => {
     console.log("leave_idleave_id====", leave_id);
    return await Leave.findAll({ where : { employee_id: leave_id} })
};
const getClosedleaves = async (leave_id) => {
    return await Leave.findAll({ where: { status: 0, employee_id: leave_id} })
};

const getOpenleaves = async (leave_id) => {
    return await Leave.findAll({ where: { status: 1, employee_id: leave_id } })
};
const getPendingleaves = async (leave_id) => {
    return await Leave.findAll({ where: { status: 2, employee_id: leave_id } })
};
const getresolvedleaves = async (leave_id) => {
    return await Leave.findAll({ where: { status: 3, employee_id: leave_id } })
};

/**
 *  task 
 *  @param {Object} user_id, updatedEmployee
 *  @returns {Promise<Enquiry/>}
 */
 const getTotalTask = async (user_id) => {
    return await Task.findAll({ where : { employee_id: user_id} })
};
const getopentask = async (user_id) => {
    return await Task.findAll({ where: { status: 0, employee_id: user_id} })
};
const getpendingtask = async (user_id) => {
    return await Task.findAll({ where: { status: 1, employee_id: user_id } })
};

/**
 * project counts
 *  @param {Object} user_id, project counts
 *  @returns {Promise<Enquiry/>}
 */
const getTotalproject = async (user_id) => {
    return await Project.findAll({ where : { employee_id: user_id} })
};
const getClosedproject = async (user_id) => {
    return await Project.findAll({ where: { status: 0, employee_id: user_id} })
};
const getOpenproject = async (user_id) => {
    return await Project.findAll({ where: { status: 1, employee_id: user_id } })
};
const getPendingproject = async (user_id) => {
    return await Project.findAll({ where: { status: 2, employee_id: user_id } })
};

const updateEmployee = async (project_id, updateBody) => {
    const EmployeeData = await getOneEmployee(project_id);
    if (!EmployeeData) {
        throw new ApiError(httpStatus.NOT_FOUND, 'employee not found');
    }
    if(EmployeeData.employee_avatar) removeFile(EmployeeData.employee_avatar)
    Object.assign(EmployeeData, updateBody);
    await EmployeeData.save();
    return EmployeeData;
}

// const projectsService = async () => {
//     const activeTask = await Project.findAll({order:[['project_id', 'DESC']], where:{ status: 0}}) 
//     return {activeTask}
// }
// const tasksService = async () => {
//     const pendingtask = await Task.findAll({order:[['task_id', 'DESC']], where:{ status: 1}})
//     return {pendingtask}
// }
/**
 * Delete One Employee
 * @param {Object} user_id
 * @returns {Promise<Enquiry/>}
 */
const deleteEmployee = async (user_id) => {
    const deleteAssets = await getOneEmployee(user_id);
    if (!deleteAssets) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'bad request');
    }
    if(deleteAssets.employee_avatar !== null) removeFile(deleteAssets.employee_avatar)
    await deleteAssets.destroy({ where: { user_id: user_id } });
    return deleteAssets;
};

/** 
 * Get Employee Assets
 * @param noParams
 * @returns {Promise<Employee/>}
 */

const getEmployeeAssets = async () => {
    const getAllemployeeAssets = await User.findAll({
        include:[{ 
            model : Givenassests,
            include:[{
                model: Assets
            }]
        
        }],
        where:{
            role:'employee'
        }
    });
    return getAllemployeeAssets;
};

module.exports = {
    getEmployee,
    getOneEmployee,
    getShortEmployee,
    updateEmployee,
    getTotalcounts,
    deleteEmployee,
    getEmployeeAssets,
    getTotalleaves,
    getClosedleaves,
    getOpenleaves,
    getPendingleaves,
    getresolvedleaves,
    getTotalproject,
    getClosedproject,
    getOpenproject,
    getPendingproject,
    getTotalTask,
    getopentask,
    getpendingtask
}