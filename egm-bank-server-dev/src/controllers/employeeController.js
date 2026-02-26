const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require('../services/employee-service');

const createEmployeeController = async (req, res) => {
  try {
    const employee = await createEmployee(req.body);
    return res.status(201).json(employee);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getAllEmployeesController = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    return res.status(200).json(employees);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getEmployeeByIdController = async (req, res) => {
  try {
    const employee = await getEmployeeById(req.params.uid);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    return res.status(200).json(employee);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updateEmployeeController = async (req, res) => {
  try {
    const updated = await updateEmployee(req.params.uid, req.body);
    return res.status(200).json(updated);
  } catch (err) {
    if (err.message === 'Employee not found') {
      return res.status(404).json({ message: err.message });
    }
    return res.status(400).json({ error: err.message });
  }
};

const deleteEmployeeController = async (req, res) => {
  try {
    await deleteEmployee(req.params.uid);
    return res.status(200).json({ message: 'Employee deleted' });
  } catch (err) {
    if (err.message === 'Employee not found') {
      return res.status(404).json({ message: err.message });
    }
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createEmployeeController,
  getAllEmployeesController,
  getEmployeeByIdController,
  updateEmployeeController,
  deleteEmployeeController
};
