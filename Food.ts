export interface IFoodInFridge {
    power: number,
    title: string,
    age: number,
    count: number
}

export class Food implements IFoodInFridge{
    constructor(public power: number, public title:string, public age: number, public count: number) {
    }

}