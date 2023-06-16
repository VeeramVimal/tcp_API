const httpStatus = require('http-status')
const { Teamemployee, Team } = require('../models')
const ApiError = require('../utils/ApiError');

// const isJobsListTaken = async function (item_name) {
//     const user = await Jobslist.findOne({ where: { item_name } });
//     return !!user;
// }
/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createTeamemployee = async (userBody) => {
  
    console.log(Teamemployee)
    return await Teamemployee.create(userBody);
};


const getAllTeamemployee = async () => {
    const getAllTeamemployee = await Teamemployee.findAll({
        include: [Team]
    });
    return getAllTeamemployee;
};


/**
* Get SingleTeam by team_id
* @param {ObjectId}   team_id
* @returns {Promise<User>}
*/
const getOneTeamemployee = async (team_id) => {
    return Teamemployee.findOne({ where: { team_id: team_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId}   team_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateTeamemployee = async (team_id, updateBody) => {
    const teamemployee = await getOneTeamemployee(team_id);
    if (!teamemployee) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Teamemployee is not found');
    }
    Object.assign(teamemployee, updateBody);
    await teamemployee.save();
    return teamemployee;
};


/**
 * Delete Package by id
 * @param {ObjectId}   team_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteTeamemployee = async (team_id) => {
    const deleteTeamemployee = await getOneTeamemployee(team_id);
    if (!deleteTeamemployee) {
        throw new ApiError(httpStatus.NOT_FOUND, 'teamemployee not found');
    }
    Object.assign(deleteTeamemployee);
    await deleteTeamemployee.destroy({ where: { team_id: team_id } });
    return deleteTeamemployee;
};

module.exports = {
    createTeamemployee,
    getAllTeamemployee,
    getOneTeamemployee,
    updateTeamemployee,
    deleteTeamemployee
};
