const { Employee } = require("../../db/mongodb");
const { generateTimeStamp } = require("../../services/timestamp");

const validateEmployeeData = (data) => {
  const { uid, account, role, pin } = data;
  if (!uid || typeof uid !== "string")
    throw new Error('Invalid or missing "uid"');
  if (!account || typeof account !== "string")
    throw new Error('Invalid or missing "account"');
  if (!role || typeof role !== "string")
    throw new Error('Invalid or missing "role"');
  if (!pin || typeof pin !== "string")
    throw new Error('Invalid or missing "pin"');
};

const createEmployee = async (data) => {
  validateEmployeeData(data);

  const existing = await Employee.findOne({ uid: data.uid });
  if (existing)
    throw new Error(`Employee with uid "${data.uid}" already exists`);

  return Employee.create({
    ...data,
    createdAt: generateTimeStamp(),
    updatedAt: generateTimeStamp(),
  });
};

const getAllEmployees = () => Employee.find();

const getEmployeeById = async (uid) => {
  if (!uid || typeof uid !== "string") throw new Error('Invalid "uid"');
  return Employee.findOne({ uid });
};

const updateEmployee = async (uid, data) => {
  if (!uid || typeof uid !== "string") throw new Error('Invalid "uid"');

  const updated = await Employee.findOneAndUpdate(
    { uid },
    { ...data, updatedAt: generateTimeStamp() },
    { new: true }
  );
  if (!updated) throw new Error("Employee not found");
  return updated;
};

const deleteEmployee = async (uid) => {
  if (!uid || typeof uid !== "string") throw new Error('Invalid "uid"');

  const deleted = await Employee.findOneAndDelete({ uid });
  if (!deleted) throw new Error("Employee not found");
  return true;
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
