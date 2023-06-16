const { User, Clientdetails, Project, sequelize, Task, Leave } = require('../models')

const AdminDashboardService = async () => {
    const client_count = await Clientdetails.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col('client_id')), 'count']]
    })
    const employee_count = await User.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col('id')), 'count']],
        where:{
            role:'employee'
        }
    })
    const project_count = await Project.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col('project_id')), 'count']]
    })
    const pendingtask_count = await Task.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col('task_id')), 'count']],
        where:{
            status: 1
        }
    })
    const today_attendance = await Leave.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col("leave_id")), "count"]]
    })
    const currentLeave = await Leave.findAll({limit: 5, order:[['date', 'DESC']]})
    const unresolvedTask = await Task.findAll({limit: 5, order:[['task_id', 'DESC']], where:{ status: 1}})
    return {client_count, employee_count, project_count, today_attendance, pendingtask_count, currentLeave, unresolvedTask}
}

module.exports = {
    AdminDashboardService
}