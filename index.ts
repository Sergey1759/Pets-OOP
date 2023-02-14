import {Cat, Dog} from "./Animal.js";
import {Food} from "./Food.js";
import {Fridge} from "./Fridge.js";

let milk = new Food(1,'milk',0.01,1);
let meat = new Food(3,'meat',1,1);
let potato = new Food(2,'potato',0.5,1);

let fridge = new Fridge();

fridge.addToFridge(milk);
fridge.addToFridge(milk);
fridge.addToFridge(milk);
fridge.addToFridge(meat);
fridge.addToFridge(potato);

console.log(fridge.openFridge())

let cat =  new Cat('Tomas', 1);
let dog = new Dog('Bob', 5);

cat.eat(fridge.openFridge()[0]);
cat.eat(fridge.openFridge()[0]);

console.log(dog.say('haf'));
console.log(cat.say('meaw'))

