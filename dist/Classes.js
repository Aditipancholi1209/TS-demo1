"use strict";
// class Player {
//     private height = 34;
//     weight = 50;  // by default public property
//     constructor(height: number, weight: number) {
//         this.height = height;
//         this.weight = weight;
//     }
//      myHeight = ()=>{
//         return this.height;
//     }
// }
// const abhi = new Player(100, 200)
// console.log(abhi.weight, "abhi.weight")
// console.log(abhi.myHeight(), "myHeight")
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getmyHeight = () => this.height;
    }
}
const Player1 = new Player(2, 5, 1);
console.log(Player1, ' Player1 ');
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
}
const abhi = new Player2(100, 200, 300, true);
console.log(abhi.getmyHeight(), abhi.special, abhi.weight);
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getID = () => this.id;
    }
}
const aditi = new Product('Macbook', 200000, 20);
// ? optional 
// ! definite 
