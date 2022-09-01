const Employee = require('./employee.js');

class Intern extends Employee{
  constructor(name, id, email, school){
    //call parent below

    super(name,id,email);

    this.school= school;
   
  }
  get school(){ 
    return this.school;
  
  }

  get Role(){
    return "Intern";
  }

}
module.exports=Intern;