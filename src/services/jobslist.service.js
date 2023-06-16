const httpStatus = require('http-status');
const { Jobslist } = require('../models');
const ApiError = require('../utils/ApiError');
const sequalize = require('sequelize')
const { Op } = require('sequelize')

const isJobsListTaken = async function (job_name) {
  const user = await Jobslist.findOne({ where: { job_name } });
  return !!user;
};

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createJobsList = async (userBody) => {
  //   if (await isJobsListTaken(userBody.job_name)) {
  //       throw new ApiError(httpStatus.BAD_REQUEST, 'job name already taken');
  //   }

  return Jobslist.create(userBody);
};

const getAllJobs = async () => {
  const getAllJobs = await Jobslist.findAll();
  return getAllJobs
}

const getFilteredJobslist = async (filter) => {
  const employment_type_count = await Jobslist.findAll({
    attributes: [[sequalize.fn('COUNT', sequalize.col('employment_type')), 'count'], 'employment_type'],
    where: { status: 1 },
    group: 'employment_type'
  })
  const job_worklevel_count = await Jobslist.findAll({
    attributes: [[sequalize.fn('COUNT', sequalize.col('job_worklevel')), 'count'], 'job_worklevel'],
    where: { status: 1 },
    group: 'job_worklevel'
  })
  const filtered_job = await Jobslist.findAll({
    where: { ...filter, status: 1 }
  })
  return { job_worklevel_count, employment_type_count, filtered_job }
};

/**
* Get SinglePackage by job_id
* @param {ObjectId} job_id
* @returns {Promise<User>}
*/
const getOneJobslist = async (job_id) => {
  return Jobslist.findOne({ where: { job_id: job_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} job_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateJobslistById = async (job_id, updateBody) => {
  const jobsList = await getOneJobslist(job_id);
  if (!jobsList) {
    throw new ApiError(httpStatus.NOT_FOUND, 'job type not found');
  }
  // if (updateBody.name && (await isTicketNameTaken(updateBody.name, ticket_id))) {
  //     throw new ApiError(httpStatus.BAD_REQUEST, 'Ticket type already taken');
  // }
  Object.assign(jobsList, updateBody);
  await jobsList.save();
  return jobsList;
};
/**
 * Delete Package by id
 * @param {ObjectId} job_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteJobslist = async (job_id) => {
  const deletejobs = await getOneJobslist(job_id);
  if (!deletejobs) {
    throw new ApiError(httpStatus.NOT_FOUND, 'category not found');
  }
  Object.assign(deletejobs);
  await deletejobs.destroy({ where: { job_id: job_id } });
  return deletejobs;
};

module.exports = {
  createJobsList,
  getOneJobslist,
  updateJobslistById,
  deleteJobslist,
  getFilteredJobslist,
  getAllJobs
};
