// General = common = Generic

// const funct =(n: number): number=>{
//     return n
// }

const funct = (n: any): any => {
    return n
}
// any should be avoided ; there's no point of typescript

// so we'll make a generic function for it

const functt = <CustomType>(n: CustomType): CustomType => {
    // let text:CustomType=n
    return n
}

// const ans = functt(20) // when we know that we've to send number only 
const an = functt('test')
const n = functt(true)

type Person = {
    name: string,
    age: number
}

const myfunction = <T>(n: T): T => {
    return n;
}

const Person1: Person = {
    name: "Abhi",
    age: 109
}

const ans = myfunction<Person>(Person1)


// <!----------------------------!>

// generic usage while declaring array 
const array: number[] = []
const array1: Array<number> = []


// <!----------------------------!>        object

const functionGeneric = <T, U>(n: T, o: U): { n: T, o: U } => {
    return { n, o };
}
const def = functionGeneric<number, string>(12, '21')

// <!----------------------------!> 


const functttt = <T, U extends T>(n: T, o: U): { n: T, o: U } => {
    return { n, o };
}
const adsasasa = functttt<number, number>(20, 29)


// <!----------------------------!> 
// extend keyword

type Cricket = {
    name: string,
    age: number,
}
type Cricket1 = {
    name: string,
    age: number,
    des: string
}

const player = {
    name: "dhoni",
    age: 50
}
const player1 = {
    name: "jadeja",
    age: 40
}
const functionGeneric1 = <T, U extends T>(n: T, o: U): { n: T, o: U } => {
    return { n, o };
}
const efg = functionGeneric<Cricket, Cricket>(player, player1)
// cricket type in both because U extends T


type Persons = {
    name: string;
    age: number;
}
const users: Persons[] = [
    {
        name: 'aditi',
        age: 23
    },
    {
        name: 'akshat',
        age: 24
    },
    {
        name: 'Random',
        age: 43
    }
]
const filterByPeople = <T, Key extends keyof T>(
    arr: T[],
    property: Key,
    value: T[Key]
): T[] => {
   return arr.filter((item) => item[property] === value)
};
const filterPeopleByName = filterByPeople(users, "name", 'akshat')
const filterPeopleByAge = filterByPeople(users, "age", 23)
console.log("🚀 ~ filterPeopleByAge:", filterPeopleByAge)
console.log("🚀 ~ filterPeopleByName:", filterPeopleByName)
