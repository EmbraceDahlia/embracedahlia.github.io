let student = { 
    firstName: "", 
    lastName: "", 
    grades: [],
    inputNewGrade(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
};

let student1 = Object.create(student);
student1.firstName = "FNU";
student1.lastName = "Dahlia";
student1.grades = [99.9, 95.75, 100];

let student2 = Object.create(student);
student2.firstName = "Chae";
student2.lastName = "Young";
student2.grades = [75, 80, 70];

let student3 = Object.create(student);
student3.firstName = "Charlie";
student3.lastName = "Puth";
student3.grades = [95, 92, 88];

let students = [student1, student2, student3];

let total = 0;
let count = 0;
for (const s of students) {
  total += s.computeAverageGrade();
  count++;
}
const avg = total / count;
console.log("Average grade:", avg.toFixed(2));

// let rabbit = { jumps: true, __proto__: animal };

// // Object.setPrototypeOf(rabbit, animal);
// console.log(rabbit); // Set the prototype of rabbit to animal
// console.log(rabbit.__proto__); 