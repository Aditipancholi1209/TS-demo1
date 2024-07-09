type funcType = (a: number, b: number, c?: number) => void | string | number

// Optional parameter
const DummyFunc: funcType = (a, b, c) => {
    if (typeof c === "undefined") { return console.log(a * b, "a*b"); }
    else {
        return a * b * c;
    }
}

func(2, 6);

// Default Parameter 

const DummyFunc2: funcType = (a, b, c = 10) => {
    return a * b * c;
}
DummyFunc2(20, 40)


// Rest Operator
type funcType3 = (...m: number[]) => number[]
const DummyFunc3: funcType3 = (...m) => {
    return m
}
DummyFunc3(10, 20, 30, 40, 50)


function DummyFunc4(n: number): number {
    return 45
}

interface ProductDetails { name: string, address: string, age: number, photo: string , id: string}

type GetDataType = (product: { name: string, address: string, age: number, photo: string }) => void

const getData: GetDataType = (object1) => {
    console.log(object1)
}
const product1: ProductDetails =
{
    name: 'Aditi',
    address: 'Ahmedabad',
    age: 23,
    photo: "heeuheue",
    id: 'hhs9shjs'
}
const product2: { name: string, address: string, age: number, photo: string } = {

    name: 'Aditi',
    address: 'Ahmedabad',
    age: 23,
    photo: "heeuheue"
}
getData(product1)

//never type 
const ErrorHandler =():never =>{
    throw new Error();
}

//return time
const ErrorHandler2 = ()=>{
    return new Error()
}


type Theme = "light" | "dark"

const theme : Theme = "light"
console.log("🚀 ~ theme:", theme)
