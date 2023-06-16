const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const { Employeeorg, User, Organization } = require('../models')
const { getOneEmployee } = require('./employee.service') 
const { getOneorganisation } = require('./organisation.service') 

const getAllEmployeeOrg= async () => {
    const getResponse = await Employeeorg.findAll(
        {
            include:[User, Organization]
        }
    )
    return getResponse
}
const getOneEmployeeOrg = async (id) => {
    const getOneResponse = await Employeeorg.findOne({where:{
        id: id
    }})
    if(!getOneResponse) throw new ApiError(httpStatus.BAD_REQUEST, "not found")
    return getOneResponse
}
const createEmployeeOrg = async (body) => {
    // if(! await getOneEmployee(body.user_id)) throw new ApiError(httpStatus.BAD_REQUEST, "Employee not found")
    // if(! await getOneorganisation(body.organization_id)) throw new ApiError(httpStatus.BAD_REQUEST, "Organization not found")
    const createResponse = await Employeeorg.create(body)
    return createResponse
}
const updateEmployeeOrg = async (body, id) => {
    const updateEmployeeOrgResponse = await getOneEmployee(id)
    if(!await updateEmployeeOrgResponse) throw new ApiError(httpStatus.BAD_REQUEST, "Employee doesn't belong to any organization")
    await updateEmployeeOrgResponse.save(body, id)
    return updateEmployeeOrgResponse
}
const deleteEmployeeOrg = async (id) => {
    const deleteResponse = await Employeeorg.destroy({where: {
        id:id
    }})
    return deleteResponse
}
module.exports = {
    getAllEmployeeOrg,
    getOneEmployeeOrg,
    createEmployeeOrg,
    updateEmployeeOrg,
    deleteEmployeeOrg
}