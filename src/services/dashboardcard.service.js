
const httpStatus = require('http-status')
const { Dashboardcard, Leave, Ticket, Task } = require('../models')
const ApiError = require('../utils/ApiError')

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createDashboardcard = async (userBody) => {
    return Dashboardcard.create(userBody);
};


const getAllDashboardcard = async () => {
    const getAllpackage = await Dashboardcard.findAll();
    return getAllpackage;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId}    card_id
* @returns {Promise<User>}
*/
const getOneDashboardcard = async (card_id) => {
    return Dashboardcard.findOne({ where: { card_id: card_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId}     card_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateDashboardcard = async (card_id, updateBody) => {
    const Dashboardcard = await getOneDashboardcard(card_id);
    if (!Dashboardcard) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Dashboardcard  type not found');
    }
    Object.assign(Dashboardcard, updateBody);
    await Dashboardcard.save();
    return Dashboardcard;
};
const leaveDashboardService = async () => {
    const pendingLeaves = await Leave.findAll({order:[['leave_id', 'DESC']], where:{ status: 0}}) 
    return {pendingLeaves}
}
const ticketDashboardService = async () => {
    const opentickets = await Ticket.findAll({limit: 5, order:[['ticket_id', 'DESC']], where:{ status: 1}})
    return {opentickets}
}
const taskDashboardService = async () => {
    const pendingtask = await Task.findAll({order:[['task_id', 'DESC']], where:{ status: 1}})
    return {pendingtask}
}
/**
 * Delete Package by id
 * @param {ObjectId}    card_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteDashboardcard = async (card_id) => {
    const deleteDashboardcard = await getOneEditprofile(card_id);
    if (!deleteDashboardcard) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Dashboardcard not found');
    }
    Object.assign(deleteDashboardcard);
    await deleteDashboardcard.destroy({ where: { card_id: card_id } });
    return deleteDashboardcard;
};


module.exports = {
    createDashboardcard,
    getAllDashboardcard,
    getOneDashboardcard,
    updateDashboardcard,
    deleteDashboardcard,
    taskDashboardService,
    ticketDashboardService,
    leaveDashboardService
};