const Employee = require('./employee');
const employee = new Employee('Ryan', '123456', 'Ryan @gmail.com');

test('test if we get the constructor vaules for the employee object',()=>{
  expect(employee.name).toBe('Ryan');
  expect(employee.id).toBe('123456');
  expect(employee.email).toBe('Ryan@gmail.com');
});

test('test if we get the name from the getName() method', () =>{
  expect(employee.getName).toBe('Ryan');
});

test('test if we get the id from the getId() method', () =>{
  expect(employee.getId).toBe('123456');
});

test('test if we get the email from the getEmail() method', () =>{
  expect(employee.getEmail).toBe('Ryan@gmail.com');
});

test('test if we get the role from the getRole() method', () =>{
  expect(employee.getRole).toBe('Employee');
});