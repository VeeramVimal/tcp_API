const httpStatus = require('http-status');
const { AppliedJobs, Jobslist, Applicantdetails } = require('../models');
const { JobslistService } = require('./');
const ApiError = require('../utils/ApiError');
const { findOneApplicant } = require('./applicantdetails.service');

  /**
 * Get AllApplied
 * @param {ObjectId} appliedjob_id
 * @returns {Promise<User>}
 */

   const getAllAppliedJobs= async () => {
    const getAllJobApplication = await AppliedJobs.findAll({
        include:[{
            model: Jobslist,
            attributes: ["job_name","job_location", "employment_type"]
        }]
    });
    return getAllJobApplication;
  };

/**
 * Get User applied Jobs
 * @param {ObjectId} appliedjob_id
 * @returns {Promise<User>}
 */


 const getUserAppliedJobs= async (user_id) => {
    const getAllJobApplication = await AppliedJobs.findAll({
        include:[{
            model: Jobslist,
            attributes: ["job_name","job_location", "employment_type"]
        }],
        where: {
            user_id: user_id
        }
    });
    if(!getAllJobApplication) throw new ApiError(httpStatus.BAD_REQUEST, "There is no job application")
    return getAllJobApplication;
  };


  /**
 * Get AppliedJobs by appliedjob_id
 * @param {ObjectId} appliedjob_id
 * @returns {Promise<User>}
 */
const getOneAppliedJobs = async (appliedjob_id) => {
    const getOneJobApplication = await AppliedJobs.findOne({ 
        where: {  
            appliedjob_id:appliedjob_id
        },
        include:[{
            model: Jobslist,
            attributes: ["job_name","job_location", "employment_type"]
        }]
     })
    return getOneJobApplication
};

/**
 * 
 * @param {Object} job_id 
 * @param {Object} user_id 
 * @returns {Promise<User>}
 */

const findAppliedJobs = async (userBody) => {
    const getOneJobApplication = await AppliedJobs.findOne({ 
        where: {  
            job_id:userBody.job_id,
            user_id:userBody.user_id
        }
     })
    return getOneJobApplication
};

/**
 * Create a application
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
 const createAppliedJobs = async (userBody) => {
    const applied = await findAppliedJobs(userBody)
    if(applied) throw new ApiError(httpStatus.BAD_REQUEST, "User already applied for the job")
    const userdetails = await findOneApplicant(userBody.user_id)
    if(!userdetails) throw new ApiError(httpStatus.BAD_REQUEST, "User details not found")
    const job = await JobslistService.getOneJobslist(userBody.job_id)
    if(!job) throw new ApiError(httpStatus.BAD_REQUEST, "Job is not found")

    const application = await AppliedJobs.create(userBody);
    return application;
};

/**
 * update Application by application id
 * @param {ObjectId} appliedjob_id
 * @param {Object} updateBody
 * @returns {Promise<AppliedJobs>}
 */
 const updateAppliedJobs = async (appliedjob_id, updateBody) => {
    const AppliedJobs = await getOneAppliedJobs(appliedjob_id);
    if (!AppliedJobs) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Application not found');
    }
    Object.assign(AppliedJobs, updateBody);
    await AppliedJobs.save();
    return AppliedJobs;
};


/**
 * 
 * @param {user_id} user_id 
 * @returns {Promise<AppliedJobs>}
 */

 const getApplicationByUserId = async (user_id) => {
    const jobApplied = await AppliedJobs.findAll({
        where:{
            user_id:user_id
        },
        attributes: ['status','createdAt'],
        include:[{
            model: Jobslist,
            attributes: ['job_name', 'company_name', 'industry', 'employment_type']
        }]
    })
    return jobApplied
}

/**
 * 
 * @param {job_id} job_id 
 * @returns {Promise<AppliedJobs>}
 */

const getApplicationByJobId= async (job_id) => {
    const jobApplied = await AppliedJobs.findAll({
        where:{
            job_id:job_id
        },
        attributes: ['status','createdAt'],
        include:[{
            model: Jobslist,
            attributes: ['job_name', 'company_name', 'industry', 'employment_type']
        }]
    })
    return jobApplied
}

/**
 * 
 * @param {job_id} appliedjobs_id 
 * @returns {Promise<AppliedJobs>}
 */

 const getApplicantDetailsByApplicationId= async (appliedjob_id) => {
    const jobApplied = await AppliedJobs.findAll({
        where:{
            appliedjob_id:appliedjob_id
        },
        attributes: ['status','createdAt'],
        include:[{
            model:Applicantdetails
        }]
    })
    return jobApplied
}

/**
 * 
 * @param {appliedjobs_id} 
 * @param {user_id}
 * @returns {Promise<AppliedJobs>}
 */

 const deleteAppliedJobs= async (job_id, user_id) => {
    const jobApplied = await findAppliedJobs({job_id, user_id})
    if(!jobApplied) throw new ApiError(httpStatus.BAD_REQUEST, 'Application not found');
    await jobApplied.destroy({where :{
        job_id,
        user_id
    }})
    return jobApplied
}

const deleteBulkAppliedJobs= async (job_id, user_id) => {
    // const jobApplied = await findAppliedJobs({job_id, user_id})
    // if(!jobApplied) throw new ApiError(httpStatus.BAD_REQUEST, 'Application not found')
    const applied = await AppliedJobs.destroy({where :{
        job_id,
        user_id
    }})
    return applied
}

module.exports = {
    getAllAppliedJobs,
    getUserAppliedJobs,
    getOneAppliedJobs,
    updateAppliedJobs,
    createAppliedJobs,
    getApplicationByUserId,
    getApplicationByJobId,
    getApplicantDetailsByApplicationId,
    deleteAppliedJobs,
    deleteBulkAppliedJobs
};
