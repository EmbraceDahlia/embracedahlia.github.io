'use strict'
function Student(firstName, lastName, grades = []) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.grades = grades
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((acc, g, index, array) => acc + g / array.length, 0);
};

let student1 = new Student("", "Dahlia", [99.9, 95.75]);
let student2 = new Student("Chae", "Young", [80, 100]);
let student3 = new Student("Charlie", "Puth");
student1.inputNewGrade(100);
student2.inputNewGrade(90);
student3.inputNewGrade(100);
student3.inputNewGrade(90);
student3.inputNewGrade(80);
let students = [student1, student2, student3];
console.log(students);

let avg = students.reduce((acc, s, i, arr) => acc + s.computeAverageGrade() / arr.length, 0);
console.log("Average grade:", avg);
