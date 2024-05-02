export default function createEmployeesObject(departmentName, employees) {
  const Workers = { [departmentName]: employees };
  return Workers;
}
