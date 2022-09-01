const Intern = require('./intern');
const Intern = new Intern('Ryan', '123456', 'Ryan @gmail.com','Prairie View');

test('test if we get the constructor vaules for the intern object',()=>{
  expect(intern.name).toBe('Ryan');
  expect(intern.id).toBe('123456');
  expect(intern.email).toBe('Ryan@gmail.com');
  expect(intern.school).toBe('Praire View A&M University');
});

test('test if we get the name from the getName() method', () =>{
  expect(intern.getName).toBe('Ryan');
});

test('test if we get the id from the getId() method', () =>{
  expect(intern.getId).toBe('123456');
});

test('test if we get the email from the getEmail() method', () =>{
  expect(intern.getEmail).toBe('Ryan@gmail.com');
});

test('test if we get the email from the getofficeNumber() method', () =>{
  expect(intern.getSchool).toBe('Prarie View A&M University');
});

test('test if we get the role from the getRole() method', () =>{
  expect(intern.getRole).toBe('intern');
});