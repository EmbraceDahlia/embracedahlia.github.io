'use strict'
function Student(firstName, lastName, grades) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}

Student.computeAverageGrade = function (students) {
    let total = 0;
    let count = 0;
    for (const s of students) {
        const sum = s.grades.reduce((acc, g) => acc + g, 0);
        total += sum;
        count += s.grades.length;
    }
    return count === 0 ? 0 : total / count;
};

let student1 = new Student("", "Dahlia", [99.9, 95.75]);
let student2 = new Student("Chae", "Young", [80, 100]);
let student3 = new Student("Charlie", "Puth", [100, 90]);
student1.inputNewGrade(100);
student2.inputNewGrade(90);
student3.inputNewGrade(80);

let students = [student1, student2, student3];
console.log(students);

let avg = Student.computeAverageGrade(students);
console.log("Average grade:", avg.toFixed(2));