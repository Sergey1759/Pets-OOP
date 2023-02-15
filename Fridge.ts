import {Food, IFoodInFridge} from "./Food";

export interface IFridge {
    allFood: IFoodInFridge[]
    openFridge:()=> IFridge[]
}

export class Fridge{
    private allFood: IFoodInFridge[];
    constructor() {
        this.allFood = []
    }
    openFridge():IFoodInFridge[]{
        return this.allFood
    }
    addToFridge(food: IFoodInFridge): void{
        let resultFood = this.allFood.find(itemFood => itemFood.title == food.title);
        if (!resultFood) this.allFood.push(food);

        if (resultFood) this.allFood.map(item => {
            if(item.title == food.title) ++item.count
            return item;
        })
    }
    feedSomeone(title:string):Food | undefined {
        let foodForSomeone: Food | undefined = this.allFood.find(item => item.title === title);

        if (foodForSomeone) {
            foodForSomeone.count--;

            if(foodForSomeone.count == 0){
                this.allFood = this.allFood.filter(item => item.title !== title)
            }
        }
        return foodForSomeone;
    }

}
