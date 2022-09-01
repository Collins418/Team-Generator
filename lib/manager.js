const Employee = require ('./employee');

class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    //call parent below

    super(name,id,email);

    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
}

getRole() {
    return "Manager";
}
}

module.exports = Manager;