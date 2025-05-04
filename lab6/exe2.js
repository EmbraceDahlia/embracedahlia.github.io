function Student(firstName, lastName, grades) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.grades = grades,
        this.inputNewGrade = function (newGrade) {
            this.grades.push(newGrade);
        },
        this.computeAverageGrade = function () {
            if (this.grades.length === 0) return 0;
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
            return sum / this.grades.length;
        }
};

let student1 = new Student("FNU","Dahlia",[99.9, 95.75, 100]);
let student2 = new Student("Chae","Young",[75, 80, 70]);
let student3 = new Student("Charlie","Puth",[95, 92, 88]);

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