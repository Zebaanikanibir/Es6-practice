class Parents {

    constructor(){
    
    this.fname = "jerry";
    
    }
    
    }


class Child extends Parents{

constructor(name){
super();
this.name = name;

}
   getFullName(){
    return this.name + " " + this.fname;
}

}
const baby = new Child("Arnold");
const baby2 = new Child("Arnoldpp");
console.log(baby.getFullName());
console.log(baby2.getFullName());
