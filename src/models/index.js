// module.exports.Token = require('./token.model');
// module.exports.User = require('./user.model');

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('../config/config');


const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];
const db = {};
console.log('running mode: ', env);

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Ticket = require("./ticket.model")(sequelize, Sequelize);
db.Expense = require("./expense.modal")(sequelize, Sequelize);
db.Leave = require("./leave.modal")(sequelize, Sequelize);
db.Task = require("./task.model")(sequelize, Sequelize);
db.Time = require("./time.model")(sequelize, Sequelize);
db.Workexperience = require("./workexperience.modal")(sequelize, Sequelize);
db.Education = require("./education.modal")(sequelize, Sequelize);
db.Givenassests = require("./givenassests.model")(sequelize, Sequelize);
db.Clock = require("./clock.model")(sequelize, Sequelize);
db.ClockSetting = require("./clocksetting.model")(sequelize, Sequelize);

db.TeamEmployee = require("./teamemployee.model")(sequelize, Sequelize.DataTypes)
db.AppliedJobs = require('./appliedjobs.model')(sequelize, Sequelize.DataTypes);
db.FavJobs = require('./favjobs.model')(sequelize, Sequelize.DataTypes);
db.Applicantdetails = require('./applicantdetails.model')(sequelize, Sequelize.DataTypes);
db.Jobslist = require('./jobslist.model')(sequelize, Sequelize.DataTypes);
db.Noticeboard = require('./noticeboard.model')(sequelize, Sequelize.DataTypes);


db.Assets = require("./assets.modal")(sequelize, Sequelize);
db.Dashboardcard = require("./dashboardcard.modal")(sequelize, Sequelize);
db.skilldetails = require("./skill.model")(sequelize, Sequelize);
db.Noticeboardorg = require("./noticeboardorg.model")(sequelize, Sequelize);
db.Charts = require("./charts.modal")(sequelize, Sequelize);

// User Relations Starts 
// Employee Relations
db.Givenassests.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' })
db.User.hasMany(db.Givenassests, { foreignKey: 'user_id', targetKey: 'id' })
db.Givenassests.belongsTo(db.Assets, { foreignKey: 'assets_id', targetKey: 'assets_id' })
db.Assets.hasMany(db.Givenassests, { foreignKey: 'assets_id', targetKey: 'assets_id' })


db.Employee.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' })
db.User.hasOne(db.Employee, { foreignKey: 'user_id', targetKey: 'id' })


// notiboard relations
db.Noticeboardorg.belongsTo(db.Noticeboard, { foreignKey: 'noticeboard_id', targetKey: 'noticeboard_id' })
db.Noticeboard.hasMany(db.Noticeboardorg, { foreignKey: 'noticeboard_id', targetKey: 'noticeboard_id' })
db.Noticeboardorg.belongsTo(db.Employee, { foreignKey: 'employee_id', targetKey: 'employee_id' })
db.Employee.hasMany(db.Noticeboardorg, { foreignKey: 'employee_id', targetKey: 'employee_id' })
db.Noticeboardorg.belongsTo(db.Clientdetails, { foreignKey: 'client_id', targetKey: 'client_id' })
db.Clientdetails.hasMany(db.Noticeboardorg, { foreignKey: 'client_id', targetKey: 'client_id' })


// Many to Many relation

// Candidate Relations
db.User.hasOne(db.Applicantdetails, { foreignKey: 'user_id', targetKey: 'id' })
db.Applicantdetails.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' })
db.AppliedJobs.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' })
db.User.hasMany(db.AppliedJobs, { foreignKey: 'user_id', targetKey: 'id' })
db.FavJobs.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' })
db.User.hasMany(db.FavJobs, { foreignKey: 'user_id', targetKey: 'id' })

// User Relations End


//JobListRegister Relations
db.AppliedJobs.belongsTo(db.Jobslist, { foreignKey: 'job_id', targetKey: 'job_id' })
db.Jobslist.hasMany(db.AppliedJobs, { foreignKey: 'job_id', targetKey: 'job_id' })
db.FavJobs.belongsTo(db.Jobslist, { foreignKey: 'job_id', targetKey: 'job_id' })
db.Jobslist.hasMany(db.FavJobs, { foreignKey: 'job_id', targetKey: 'job_id' })


//GivenAssets employee Relations
db.Employee.belongsTo(db.Givenassests, { foreignKey: 'user_id', targetKey: 'user_id' })
db.Givenassests.hasMany(db.Employee, { foreignKey: 'user_id', targetKey: 'user_id' })


//task relations
db.Employee.belongsTo(db.Task, { foreignKey: 'employee_id', targetKey: 'task_id' })
db.Task.hasMany(db.Employee, { foreignKey: 'employee_id', targetKey: 'task_id' })
db.Project.belongsTo(db.Task, { foreignKey: 'project_id', targetKey: 'task_id' })
db.Task.hasMany(db.Project, { foreignKey: 'project_id', targetKey: 'task_id' })


//ApplicantDetails Relations
db.AppliedJobs.belongsTo(db.Applicantdetails, { foreignKey: 'user_id', targetKey: 'user_id' })
db.Applicantdetails.hasMany(db.AppliedJobs, { foreignKey: 'user_id', targetKey: 'user_id' })

//Client Relations
db.Project.belongsTo(db.Clientdetails, { foreignKey: 'client_id', targetKey: 'client_id' })
db.Clientdetails.hasMany(db.Project, { foreignKey: 'client_id', targetKey: 'client_id' })

//Task Relation
db.Task.belongsTo(db.Project, { foreignKey: 'project_id', targetKey: 'project_id' })
db.Project.hasMany(db.Task, { foreignKey: 'project_id', targetKey: 'project_id' })

//Assets employee Relations
db.Employee.belongsTo(db.Assets, { foreignKey: 'employee_id', targetKey: 'assets_id' })
db.Assets.hasMany(db.Employee, { foreignKey: 'employee_id', targetKey: 'assets_id' })

//leave employee Relations
db.Employee.hasMany(db.Leave, { foreignKey: 'employee_id', targetKey: 'employee_id' })
db.Leave.belongsTo(db.Employee, { foreignKey: 'employee_id', targetKey: 'employee_id' })

//project employee Relations
db.Employee.hasMany(db.Project, { foreignKey: 'employee_id', targetKey: 'employee_id' })
db.Project.belongsTo(db.Employee, { foreignKey: 'employee_id', targetKey: 'employee_id' })



//expense project Relations
db.Project.hasMany(db.Expense, { foreignKey: 'project_id', targetKey: 'project_id' })
db.Expense.belongsTo(db.Project, { foreignKey: 'project_id', targetKey: 'project_id' })
db.Employee.hasMany(db.Expense, { foreignKey: 'employee_id', targetKey: 'employee_id' })
db.Expense.belongsTo(db.Employee, { foreignKey: 'employee_id', targetKey: 'employee_id' })

//ticket employee Relations
db.Employee.hasMany(db.Ticket, { foreignKey: 'employee_id', targetKey: 'employee_id' })
db.Ticket.belongsTo(db.Employee, { foreignKey: 'employee_id', targetKey: 'employee_id' })

//Team Relation
db.User.hasMany(db.TeamEmployee, { foreignKey: "user_id", targetKey: "id" })
db.TeamEmployee.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" })

db.Team.hasMany(db.TeamEmployee, { foreignKey: "team_id", targetKey: "team_id" })
db.TeamEmployee.hasMany(db.Team, { foreignKey: "team_id", targetKey: "team_id" })

//Employee & EmployeeOrg

db.User.hasOne(db.Employeeorg, { foreignKey: "user_id", targetKey: "id"})
db.Employeeorg.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id"})

db.Organization.hasOne(db.Employeeorg, { foreignKey: "organisation_id", targetKey: "organisation_id"})
db.Employeeorg.belongsTo(db.Organization, { foreignKey: "organisation_id", targetKey: "organisation_id"})

module.exports = db