'use strict'
function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
}

Animal.prototype.run = function (speed) {
    return this.speed += speed;
}

Animal.compareBySpeed = function (a1, a2) {
    return a1.speed - a2.speed;
}

function Rabbit(name, speed) {
    Animal.call(this, name, speed);
}

Rabbit.prototype.hide = function () {
    console.log(this.name, "hides");
}

Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);
Object.setPrototypeOf(Rabbit, Animal)

let rabbit = new Rabbit("Pokkie", 10);
console.log(rabbit.name, rabbit.speed);
rabbit.hide();
rabbit.run(5);
rabbit.run(10);
rabbit.run(2);
console.log(`${rabbit.name} hide ran with speed ${rabbit.speed}`);

let rabbit2 = new Rabbit("Bobby", 8);
console.log(rabbit2.name, rabbit2.speed);
let rabbit3 = new Rabbit("Cotton", 13);
console.log(rabbit3.name, rabbit3.speed);
let rabbits = [rabbit, rabbit2, rabbit3];
console.log("Rabbits order by speed: ");
rabbits.sort(Rabbit.compareBySpeed).forEach((r,index)=>console.log(`${++index}. ${r.name} - speed ${r.speed}`));
