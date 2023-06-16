const httpStatus = require('http-status');
const { Clientdetails, Project } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Client Details
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createClientdetails = async (userBody) => {
  // console.log('userBody',userBody)
    const client = await Clientdetails.create(userBody);
     console.log('client',client)
 
      return client;
     
};

/**
 * Create a Client Details
 * @returns {Promise<User>}
 */

 const getAllClientdetails= async () => {
    const getAllpackage = await Clientdetails.findAll();
    return getAllpackage;
  };


  /**
 * Get Clientdetails by client_id
 * @param {ObjectId} client_id
 * @returns {Promise<User>}
 */
const getOneClientdetails = async (client_id) => {
    console.log(client_id, "client_id")
    const Applicant = await Clientdetails.findOne({ where: { client_id: client_id } })
    if (!Applicant) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
      }
    return Applicant
};

/**
 * update Clientdetails by client_id
 * @param {ObjectId} client_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateClientdetails = async (client_id, updateBody) => {
    const Client = await getOneClientdetails(client_id);
    if (!Client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }
    Object.assign(Client, updateBody);
    await Client.save();
    return Client;
};


/**
 * Delete Clientdetails by id
 * @param {ObjectId} client_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteClientdetails = async (client_id) => {
    const deleteClient = await getOneClientdetails(client_id);
    if (!deleteClient) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
    }
    Object.assign(deleteClient);
    await deleteClient.destroy( { where: { client_id: client_id } });
    return deleteClient;
};



module.exports = {
    createClientdetails,
    getAllClientdetails,
    getOneClientdetails,
    updateClientdetails,
    deleteClientdetails
};
