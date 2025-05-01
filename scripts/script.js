'use strict'
console.log("Hello world from script.js.");
const PI = 3.14;
let radius = 5;
let a = 5;
a = "Hello";
var area = PI * radius * radius;//don't use var if possible as it doesn't display error, var is stored in window but let is within the js
console.log(area);
const big1 = 1234567890123456789012345678901234567890n;
const big2 = BigInt("1234567890123456789012345678901234567890");
const big3 = 1234567890123456789012345678901234567890;
console.log(big1 + typeof (big1));
console.log(big2 + typeof (big2));
console.log(big3 + typeof (big3));
let b = "abc";
console.log(b.at(-1));
console.log(b.at(0));
console.log(b.at(1));
console.log(b.at(-3));
console.log(b.at(-4));
console.log("len " + b.length);
function sum(a, b, c = 3) {
    console.log("arg len: " + arguments.length);
    return a + b + c;
}
console.log(sum(1, 2));
let students = [{ name: "John", age: 25 }, { name: "Smith", age: 30 },{ name: "Anna", age: 30 }, {name:"Jane",age:100}];
let total = 0;
let count = 0;
students.forEach(item => {
    total += item.age;
    count+=1;
}
)
console.log(total);
console.log(count);
let avg = total/count;
console.log(avg);
console.log(students);
students.sort((a1,a2)=>a2.name-a1.name);
console.log(students);
let s = students.find(student=>student.name.startsWith("J"));
console.log(s);
let ss = students.filter(student => student.name.startsWith("J"));
console.log(ss);
const {sname,sage}=students[2];
console.log('name',sname,'age',sage);

