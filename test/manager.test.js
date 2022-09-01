const Manager = require('./manager');
const Manager = new Manager('Ryan', '123456', 'Ryan @gmail.com','429');

test('test if we get the constructor vaules for the manager object',()=>{
  expect(manager.name).toBe('Ryan');
  expect(manager.id).toBe('123456');
  expect(manager.email).toBe('Ryan@gmail.com');
  expect(manager.officeNumber).toBe('429');
});

test('test if we get the name from the getName() method', () =>{
  expect(manager.getName).toBe('Ryan');
});

test('test if we get the id from the getId() method', () =>{
  expect(manager.getId).toBe('123456');
});

test('test if we get the email from the getEmail() method', () =>{
  expect(manager.getEmail).toBe('Ryan@gmail.com');
});

test('test if we get the email from the getofficeNumber() method', () =>{
  expect(manager.getEmail).toBe('429');
});


test('test if we get the role from the getRole() method', () =>{
  expect(manager.getRole).toBe('Manager');
});