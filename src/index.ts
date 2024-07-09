const message : string = "hello world"
let a : number = 23
let check : boolean = true


let num = <number> 34;
let abc = <String> "aditi";

let both : number | string ;
both =34
both= "both"

console.log("🚀 ~ check:", check)
console.log("🚀 ~ a:", a)
console.log("🚀 ~ message:", message)

// any - datatype

const func = (n:number, m:number) =>{
    console.log(n,m);
    return String (n * m) ;
}

// const funcc = (n:number, m:number): number =>{
//     console.log(n,m);
//     return String(n * m) ;
// }

const funccc = (a : String | number)=>{
    if (typeof a == "string"){
        console.log(a.toUpperCase());
    }
    else{
        console.log(a, "type")
    }
}

funccc(2);

