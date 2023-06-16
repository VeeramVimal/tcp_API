const { Noticeboardorg, Noticeboard, Clientdetails, Employee } = require('../models')

const getAllnoticeboard = async () => {
    const getResponse = await Noticeboardorg.findAll({
        include: [Noticeboard, Clientdetails, Employee]
    })
    return getResponse
}
const getOnenoticeboard = async (id) => {
    const getOneResponse = await Noticeboardorg.findById(id)
    return getOneResponse 
}
const createnoticeboard = async (body) => {
    const createResponse = await Noticeboardorg.create(body)
    return createResponse
}
const updatenoticeboard = async (body, id) => {
    const updateResponse = await Noticeboardorg.update(body, id)
    return updateResponse
}
const deletenoticebboard = async (id) => {
    const deleteResponse = await Noticeboardorg.delete({where: {
        id:id
    }})
    return deleteResponse
}
module.exports = {
    getAllnoticeboard,
    getOnenoticeboard,
    createnoticeboard,
    updatenoticeboard,
    deletenoticebboard
}