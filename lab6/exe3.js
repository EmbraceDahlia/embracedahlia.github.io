'use strict'
function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
}

Animal.prototype.run = function () {
    return ++this.speed;
}

Animal.compareBySpeed = function (a1, a2) {
    return a1.speed-a2.speed;
}

function Rabbit(name, speed) {
    Animal.call(this, name, speed);
}

Rabbit.prototype.hide = function () {
    console.log(this.name,"hides");
}

Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);
Object.setPrototypeOf(Rabbit, Animal)

let rabbit = new Rabbit("Pokkie", 10);
console.log(rabbit.name);
console.log(rabbit.speed);
rabbit.hide();
rabbit.run();
rabbit.run();
rabbit.run();
rabbit.run();
rabbit.run();
console.log(rabbit.speed);

let rabbit2 = new Rabbit("Bobby", 8);
let rabbit3 = new Rabbit("Cotton", 13);
let rabbits = [rabbit, rabbit2, rabbit3];
console.log(rabbits.sort(Rabbit.compareBySpeed));
