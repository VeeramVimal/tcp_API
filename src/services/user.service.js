const httpStatus = require("http-status");
const { User, Employee } = require("../models");
const { sequelize } = require('./../models')
const ApiError = require("../utils/ApiError");
const { paginate } = require("../plugins");



const isEmailTaken = async function (email, excludeUserId) {
  console.log(email, excludeUserId);
  const user = await User.findOne({ where: { email } });
  return !!user;
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {

  userBody.status = 1;
  userBody.role = 'admin'
  if (await isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  return User.create(userBody);
};

const createCandidate = async (userBody) => {
  userBody.status = 1;
  userBody.role = 'candidate';
  if (await isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  return User.create(userBody);
};

const createEmployee = async (userBody, file) => {
  userBody.status = 1;
  userBody.role = 'employee';
  userBody.user_name = `${userBody.employee_firstname} ${userBody.employee_lastname}`
  userBody.user_avatar = `upload/employee_avatar/${userBody.employee_avatar}`

  if (file) {
    userBody.employee_avatar = file.path
  }
  if (await isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  // return User.create(userBody);
  return sequelize.transaction((t) => {
    return User.create(userBody, { transaction: t }).then((user) => {
      return Employee.create({ ...userBody, user_id: user.id }, { transaction: t })
    })
  }).then((data) => data).catch((err) => {
    throw new ApiError(httpStatus.BAD_REQUEST, err)
  })
};

const queryUsers = async (filter, options) => {
  // console.log(filter, options)
  const userQuery = paginate(filter, options);
  console.log(userQuery);
  const users = await User.findAll(userQuery);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return await User.findByPk(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  if (updateBody.email && (await isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await user.remove();
  return user;
};

module.exports = {
  createUser,
  createCandidate,
  createEmployee,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};

