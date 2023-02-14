import {Food, IFoodInFridge} from "./Food";

export interface IFridge {
    allFood: IFoodInFridge[]
    openFridge:()=> IFridge[]
}

export class Fridge{
    readonly allFood: IFoodInFridge[];
    constructor() {
        this.allFood = []
    }
    openFridge():IFoodInFridge[]{
        return this.allFood
    }
    addToFridge(food: IFoodInFridge){
        let resultFood = this.allFood.filter(itemFood => itemFood.title == food.title);
        if (resultFood.length == 0 ) this.allFood.push(food);
        if (resultFood.length) this.allFood.map(item => {
            if(item.title == food.title) ++item.count
            return item;
        })
    }
    feedSomeone(title:string):Food{
        let foodForSomeone:Food;
        let resultFood = this.allFood.filter(itemFood => itemFood.title == title);
        if (resultFood.length == 0 ) console.log('This food doesn\'t exist in fridge')
        if (resultFood.length) this.allFood.map(item => {
            if(item.title == title){
                --item.count;
                foodForSomeone = item;
            }
            return item;
        });
        return foodForSomeone;
    }

}
