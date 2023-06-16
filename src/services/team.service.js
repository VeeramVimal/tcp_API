const httpStatus = require('http-status')
const { Team } = require('../models')
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
const createTeam = async (userBody) => {
   
    return Team.create(userBody);
};


const getAllTeam = async () => {
    const getAllTeam = await Team.findAll({
    });
    return getAllTeam;
};


/**
* Get SingleTeam by team_id
* @param {ObjectId}   team_id
* @returns {Promise<User>}
*/
const getOneTeam = async (team_id) => {
    return Team.findOne({ where: { team_id: team_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId}   team_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateTeam = async (team_id, updateBody) => {
    const team = await getOneTeam(team_id);
    if (!team) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Team is not found');
    }
    Object.assign(team, updateBody);
    await team.save();
    return team;
};


/**
 * Delete Package by id
 * @param {ObjectId}   team_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteTeam = async (team_id) => {
    const deleteTeam = await getOneTeam(team_id);
    if (!deleteTeam) {
        throw new ApiError(httpStatus.NOT_FOUND, 'team not found');
    }
    Object.assign(deleteTeam);
    await deleteTeam.destroy({ where: { team_id: team_id } });
    return deleteTeam;
};

module.exports = {
    createTeam,
    getAllTeam,
    getOneTeam,
    updateTeam,
    deleteTeam
};
