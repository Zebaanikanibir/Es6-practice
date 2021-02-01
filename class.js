class Student{

constructor(sId, sName){

this.id = sId;
this.name =sName;
this.school = "girls school"
}

}
const student = new Student(12, "Shuvo");
const student2 = new Student(22, "mahiya");
console.log(student, student2);
console.log(student.name, student2.name);