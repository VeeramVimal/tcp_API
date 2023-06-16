const httpStatus = require('http-status');
const { FavJobs,Jobslist } = require('../models');
const ApiError = require('../utils/ApiError');
const { getOneJobslist } = require('./jobslist.service');

/**
 * Get all FavJobs
 * @returns {Promise<User>}
 */
const getFavJobs = async (user_id) => {
    const favJob = await FavJobs.findAll({where: {user_id: user_id},
        include:[{
            model: Jobslist,
            attributes: ["job_name","job_location", "employment_type","posted_date", "company_name", "job_field"]
        }]
    })
    return favJob
} 

const getOneFavJobs = async (params) => {
    const existingfavjob = await FavJobs.findOne({where: params})
    return existingfavjob
}
/**
 * Create a FavJobs
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
 const addFavJobs = async (req) => {
    const addValue = {
        user_id: req.user_id,
        job_id: req.body.job_id
    }
    const jobResponse = await getOneJobslist(addValue.job_id)
    if(!jobResponse){
        throw new ApiError(httpStatus.BAD_REQUEST, "job is not valid")
    }
    const existingUser = await getOneFavJobs(addValue)
    if(existingUser){
        throw new ApiError(httpStatus.BAD_REQUEST, "already added to Favorite jobs")
    }
    const applicant = await FavJobs.create(addValue);
    return applicant;
};

/**
 * Delete a FavJobs
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
 const deleteFavJobs = async (req) => {
    const deleteValue = {
        user_id: Number(req.user_id),
        job_id: Number(req.params.job_id)
    }
    const existingUser = await getOneFavJobs(deleteValue)
    if(!existingUser){
        throw new ApiError(httpStatus.BAD_REQUEST, "not added to Favorite jobs")
    }
    const applicant = await existingUser.destroy({where: deleteValue});
    return applicant;
};

module.exports = {
    getFavJobs,
    addFavJobs,
    deleteFavJobs
}