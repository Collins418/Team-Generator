const Employee =require ('./employee.js');

class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    //call parent below

    super(name,id,email);

    this.officeNumber= officeNumber;
  }
  get officeNumber(){ 
    return this.officeNumber;
  
  }

  get Role(){
    return "Manager";
  }

}
module.exports=Manager;