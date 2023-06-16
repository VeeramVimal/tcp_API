const httpStatus = require('http-status');
const { Ticket, Employee } = require('../models');
const ApiError = require('../utils/ApiError');
const sequalize = require('sequelize')



// const isJobsListTaken = async function (job_name) {
//   const user = await Jobslist.findOne({ where: { job_name } });
//   return !!user;
// };

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createTicket = async (userBody) => {
  
    return Ticket.create(userBody);
};

const getAllTicket = async () => {
    const getAllTicket = await Ticket.findAll(
        {
            include:[{
                model: Employee,
                required: true
            }]
    }
    )
    return getAllTicket;
};

const getOneTicket = async (ticket_id) => {
    return Ticket.findOne({ where: { ticket_id: ticket_id } })
};
const getTotalcounts = async () => {
    return Ticket.findAll()
};
const getClosedcounts = async () => {
    return Ticket.findAll({ where: { status: 4 } })
};
const getOpencounts = async () => {
    return Ticket.findAll({ where: { status: 1 } })
};
const getPendingcounts = async () => {
    return Ticket.findAll({ where: { status: 2 } })
};
const getresolvedcounts = async () => {
    return Ticket.findAll({ where: { status: 3 } })
};

const countAllTicket = async (user_id) => {
    return Ticket.findAll(({ where : { requester: user_id} }))
}
/**
* Get SinglePackage by skil_id
* @param {ObjectId} ticket_id
* @returns {Promise<User>}
*/
const getByTicket = async (ticket_id) => {
    return Ticket.findOne({ where: { ticket_id: ticket_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} ticket_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateTicket = async (ticket_id, updateBody) => {
    const Ticket = await getOneTicket(ticket_id);
    if (!Ticket) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'bad request');
    }
    Object.assign(Ticket, updateBody);
    await Ticket.save();
    return Ticket;
};


/**
 * Delete Package by id
 * @param {ObjectId} ticket_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteTicket = async (ticket_id) => {
    const deleteTicket = await getOneTicket(ticket_id);
    if (!deleteTicket) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'ticket not found');
    }
    Object.assign(deleteTicket);
    const deleteResponse = await deleteTicket.destroy({ where: { ticket_id: ticket_id } });
    return deleteResponse;
};

module.exports = {
    createTicket,
    getOneTicket,
    getAllTicket,
    getByTicket,
    updateTicket,
    getOpencounts,
    deleteTicket,
    getClosedcounts,
    getPendingcounts,
    getresolvedcounts,
    getTotalcounts,
    countAllTicket
};