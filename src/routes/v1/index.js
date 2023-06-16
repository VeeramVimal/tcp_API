const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const jobslistRoute = require('./jobslist.route');
const jobCategoryRoute = require('./jobcategory.route');
const jobSkilsRoute = require('./jobskils.route');
const jobLocationRoute = require('./joblocation.route');
const applicantdetailsRoute = require('./applicantdetails.route');
const enquiryRoute = require('./enquiry.route');
const expenseRoute = require('./expense.route');
const ticketRoute = require('./ticket.route');
const taskRoute = require('./task.route');
const timeRoute = require('./time.route');
const employeeRoute = require('./employee.route');
const leaveRoute = require('./leave.route');
const projectRoute = require('./project.route');
const workexperienceRoute = require('./workexperience.route');
const appliedjobsRoute = require('./appliedjobs.route');
const favjobsRoute = require('./favjobs.route');
const education = require('./education.route');
const clientdetailsRoute = require('./clientdetails.route')
const assets = require('./assets.route')
const dashboardcard = require('./dashboardcard.route')
const organisationRoute = require('./organisation.route')
const charts = require('./charts.route')
const givenassests = require('./givenassests.route')
const config = require('../../config/config');
const teamRoute = require('./team.route');
const skillRoute = require('./skill.route');
const noticeRoute = require('./notiboard.route');
const teamemployeeRoute = require('./teamemployee.route');
const leadsRoute = require('./leads.route');
const dashboardRoute = require('./dashboard.route')
const noticeboardorg = require('./noticeboardorg.route')
const testingRoute = require('./testing.route')
const clockRoute = require('./clock.route')
const employeeorgRoute = require('./employeeorg.route')
const clockSettingRoute = require('./clockSetting.route')
const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/leads',
    route: leadsRoute,
  },
  {
    path: '/team',
    route: teamRoute,
  },
  {
    path: '/teamemployee',
    route: teamemployeeRoute,
  },
  {
    path: '/clock',
    route: clockRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/jobs',
    route: jobslistRoute,
  },
  {
    path: '/jobcategory',
    route: jobCategoryRoute,
  },
  {
    path: '/noticeboardorg',
    route: noticeboardorg,
  },
  {
    path: '/skill',
    route: skillRoute,
  },
  {
    path: '/jobskils',
    route: jobSkilsRoute,
  },
  {
    path: '/noticeboard',
    route: noticeRoute,
  },
  {
    path: '/joblocation',
    route: jobLocationRoute,
  },
  {
    path: '/applicantdetails',
    route: applicantdetailsRoute,
  },
  {
    path: '/enquiry',
    route: enquiryRoute,
  },
  {
    path: '/ticket',
    route: ticketRoute,
  },
  {
    path: '/task',
    route: taskRoute,
  },
  {
    path: '/time',
    route: timeRoute,
  },
  {
    path: '/expense',
    route: expenseRoute,
  },
  {
    path: '/employee',
    route: employeeRoute,
  },
  {
    path: '/leave',
    route: leaveRoute,
  },
  {
    path: '/project',
    route: projectRoute,
  },
  {
    path: '/workexperience',
    route: workexperienceRoute,
  },
  {
    path: '/education',
    route: education,
  },
  {
    path: '/organisation',
    route: organisationRoute,
  },
  {
    path: '/applications',
    route: appliedjobsRoute
  },
  {
    path: '/favjobs',
    route: favjobsRoute
  },
  {
    path: '/givenassests',
    route: givenassests
  },
  {
    path: '/assets',
    route: assets,
  },
  {
    path: '/dashboardcard',
    route: dashboardcard,
  },
  {
    path: '/charts',
    route: charts,
  }, {
    path: '/client',
    route: clientdetailsRoute
  },
  {
    path: "/dashboard",
    route: dashboardRoute
  },{
    path: "/testing",
    route: testingRoute
  },
  {
    path: "/employeeorg",
    route: employeeorgRoute
  }, 
  { 
    path: "/clocksetting",
    route: clockSettingRoute
  }
];

const devRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
