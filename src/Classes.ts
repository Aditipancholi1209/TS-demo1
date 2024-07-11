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
    constructor(protected height?: number, public weight?: number, private power?: number) {

    }
    getmyHeight = () => this.height
}
const Player1 = new Player(2, 5, 1)
console.log(Player1, ' Player1 ')

class Player2 extends Player {
    special: boolean
    constructor(height: number, weight: number, power: number, special: boolean) {
        super(height, weight, power);
        this.special = special;
    }
}

const abhi = new Player2(100, 200, 300, true)
console.log(abhi.getmyHeight(), abhi.special, abhi.weight)



interface ProductType {
    name: string,
    stock: number,
    offer?: boolean,
    price: number
    // getID: () => string                 

}

interface GiveId{
    getID: () => string
}

class Product implements ProductType , GiveId{
    private id: string = String(Math.random() * 1000)
    constructor(
        public name: string,
        public price: number,
        public stock: number,
    ) { }
    getID = () => this.id;
}

const aditi = new Product('Macbook', 200000, 20)

// ? optional 
// ! definite 