import {Food} from "./Food.js";
import {errorHandler} from "./Error.js";

export interface IAnimal{
    name: string,
    age: number,
    eatExpiration: Date,
    say:(word:string)=> string
    eat:(food: Food)=> void
}

export class Animal implements IAnimal{
    eatExpiration: Date;
    constructor(public name: string, public age: number) {
        this.eatExpiration = new Date();
    }
    say(word: string):string{
        return `${this.name} said ${word}`
    }
    eat(food: Food| undefined){
        try {
            if (food != undefined) {
                this.eatExpiration = new Date(this.eatExpiration.getTime() + (1000 * 60 * 60 * food.power));
                console.log(`${this.name} ate a ${food.title}, they will be hungry at ${this.eatExpiration.getDate()}.${this.eatExpiration.getMonth() + 1}. ${this.eatExpiration.getHours()}:${this.eatExpiration.getMinutes()}`);
            } else {
                throw Error('food as parameter is undefined | This food doesn\'t exist in fridge')
            }
        } catch (error) {
            errorHandler(error);
        }
    }

}

export class Cat extends Animal{
    constructor(public name: string, public age: number) {
      super(name,age)
    }
}

export class Dog extends Animal{
    constructor(public name: string, public age: number) {
        super(name,age)
    }
    say(word: string): string {
        return `Dog :-) ${super.say(word)}`;
    }
}
