'use strict'

class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }
    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(qid, answer) {
        this.questionId = qid;
        this.answer = answer;
    }
    checkAnswer(answer) {
        return this.answer === answer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach(q => this.questions.set(q.questionId, q.answer));
        this.students = students;
    }
    scoreStudentBySid(sid) {
        const student = this.students.find(s => s.studentId === sid);
        if (!student) return 0;
        let score = 0;
        for (let i = 0; i < student.answers.length; i++) {
            const studentQA = student.answers[i];
            const correctQA = this.questions.get(studentQA.questionId);
            if (studentQA.checkAnswer(correctQA)) {
                score++;
            }
        }
        return score;
    }
    getAverageScore() {
        let scores = this.students.map(s => this.scoreStudentBySid(s.studentId));
        const total = scores.reduce((sum, s) => sum + s, 0);
        return scores.length ? total / scores.length : 0;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5