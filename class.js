class Student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
    }
}

const student1 = new Student(12, "Trevor");
const student2 = new Student(3, "Micheal");
console.log(student1, student2);
console.log(student1.name, student2.name);
