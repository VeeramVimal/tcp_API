const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const { employeeService, projectService } = require('../services')
const httpStatus = require('http-status');

const getEmployee = catchAsync(async (req,res) => {
  try{
    const getResponse = await employeeService.getEmployee()
    res.send(getResponse)
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})

const getShortemployee = catchAsync(async (req, res) => {
  try {
    const employee = await employeeService.getShortEmployee();
    res.send(employee);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


const getOneEmployee = catchAsync(async (req,res) => {
  try{
    const getOneResponse = await employeeService.getOneEmployee(req.params.user_id)
    res.send(getOneResponse);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getTotalcount = catchAsync(async (req, res) => { 
  try{
    const total_employees = await employeeService.getTotalcounts();
    const total_employee = total_employees.length
    res.send({total_employee});
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
  });
  
  const getTotalcounts = catchAsync(async (req, res) => {
    try{
        const total_leaves = await employeeService.getTotalleaves(req.params.leave_id);
        const casual_leaves = await employeeService.getClosedleaves(req.params.leave_id);
        const sick_leaves = await employeeService.getOpenleaves(req.params.leave_id);
        const Success_leaves = await employeeService.getPendingleaves(req.params.leave_id);
        const pending_leaves = await employeeService.getresolvedleaves(req.params.leave_id);


        const total_leave = total_leaves.length
        const casual_leave = casual_leaves.length
        const sick_leave = sick_leaves.length
        const Success_leave = Success_leaves.length
        const pending_leave = pending_leaves.length  
        const TotalValue = total_leaves
        
        res.send({total_leave , casual_leave , sick_leave , Success_leave , pending_leave , TotalValue }); 
        // res.send(total_leaves); 

    }
   catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
    }
    
    
  });
  
  const getprojectcount = catchAsync(async (req, res) => {
    try{
        const total_projects = await employeeService.getTotalproject(req.params.user_id);
        const assigned_projects = await employeeService.getClosedproject(req.params.user_id);
        const unassigned_projects = await employeeService.getOpenproject(req.params.user_id);
        const completed_projects = await employeeService.getPendingproject(req.params.user_id);


        const total_project = total_projects.length
        const assigned_project = assigned_projects.length
        const unassigned_project = unassigned_projects.length
        const completed_project = completed_projects.length  
        const Totalproject = total_projects

        
        res.send({total_project , assigned_project , unassigned_project , completed_project, Totalproject  }); 
    }
   catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
    }  
  });

  const gettaskcount = catchAsync(async (req, res) => {
    try{
        const total_tasks = await employeeService.getTotalTask(req.params.user_id);
        const assigned_tasks = await employeeService.getopentask(req.params.user_id);
        const completed_tasks = await employeeService.getpendingtask(req.params.user_id);

        const total_task = total_tasks.length
        const assigned_task = assigned_tasks.length
        const completed_task = completed_tasks.length
        const Totaltask = total_tasks

        res.send({total_task , assigned_task , completed_task, Totaltask  }); 
    }
   catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
    }  
  });
  const totalproject = catchAsync( async (req,res) => {
    try {
        const adminDashboard = await employeeService.projectsService()
        res.send(adminDashboard)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})

const updateEmployee = catchAsync(async (req,res) => {
  try{
    if(req.file) req.body.employee_avatar = req.file.path;
    const updateResponse = await employeeService.updateEmployee(req.params.user_id, req.body)
    res.send(updateResponse)
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})

const deleteEmployee = catchAsync(async (req,res) => {
    try{
        const deleteResponse = await employeeService.deleteEmployee(req.params.user_id);
        if(deleteResponse) {
          res.json({
            code: httpStatus.OK,
            message: 'employee deleted successfully'
          })
        }
      }
      catch(err){
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
          code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
          message: err.message ||'internal server error'
        })
      }
    });

const getEmployeeAssets = catchAsync(async (req,res) => {
  try{
    const getResponse = await employeeService.getEmployeeAssets()
    res.send(getResponse)
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})

module.exports = {
    getEmployee,
    getOneEmployee,
    getShortemployee,
    updateEmployee,
    getTotalcount,
    getEmployeeAssets,
    deleteEmployee,
    getTotalcounts,
    totalproject,
    getprojectcount,
    gettaskcount
}