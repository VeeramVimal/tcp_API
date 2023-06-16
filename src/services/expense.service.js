const httpStatus = require('http-status')
const { Expense, Employee, Project } = require('../models')
const ApiError = require('../utils/ApiError')

// const isJobsListTaken = async function (item_name) {
//     const user = await Jobslist.findOne({ where: { item_name } });
//     return !!user;
// }
/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createExpense = async (userBody) => {
    return Expense.create(userBody);

};


const getAllExpense = async () => {
    const getAllpackage = await Expense.findAll(
        {
            include:[{
                model: Employee,
                required: true
            }]
    },
    {
        include:[{
            model: Project,
            required: true
        }]
}
    )
    return getAllpackage;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId} item_id
* @returns {Promise<User>}
*/
const getOneExpense = async (item_id) => {
    return Expense.findOne({ where: { item_id: item_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} item_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateExpense = async (item_id, updateBody) => {
    const Expense = await getOneExpense(item_id);
    if (!Expense) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Expense type not found');
    }
    Object.assign(Expense, updateBody);
    await Expense.save();
    return Expense;
};


/**
 * Delete Package by id
 * @param {ObjectId} item_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteExpense = async (item_id) => {
    const deleteExpense = await getOneExpense(item_id);
    if (!deleteExpense) {
        throw new ApiError(httpStatus.NOT_FOUND, 'category not found');
    }
    Object.assign(deleteExpense);
    await deleteExpense.destroy({ where: { item_id: item_id } });
    return deleteExpense;
};

module.exports = {
    createExpense,
    getAllExpense,
    getOneExpense,
    updateExpense,
    deleteExpense
};
