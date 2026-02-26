const {
    createEmployeeController,
    getAllEmployeesController,
    getEmployeeByIdController,
    updateEmployeeController,
    deleteEmployeeController
  } = require('../controllers/employeeController');
  
  module.exports = (app) => {
    app.post('/api/v1/employees', async (req, res) => {
      await createEmployeeController(req, res);
    });
  
    app.get('/api/v1/employees', async (req, res) => {
      await getAllEmployeesController(req, res);
    });
  
    app.get('/api/v1/employees/:uid', async (req, res) => {
      await getEmployeeByIdController(req, res);
    });
  
    app.put('/api/v1/employees/:uid', async (req, res) => {
      await updateEmployeeController(req, res);
    });
  
    app.delete('/api/v1/employees/:uid', async (req, res) => {
      await deleteEmployeeController(req, res);
    });
  };
  