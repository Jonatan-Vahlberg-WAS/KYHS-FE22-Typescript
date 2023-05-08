
interface GenericSortIndicesFn<T> {
    (indices: T[]): T[]
}

interface GenericJoinIndicesFn<T, Separator> {
    (indices: T[], separator: Separator): string
}

interface Person {
    name: string
    age: number
    isPensioner: boolean
}

function sortIndices<T> (indices: T[]): T[] {
    indices.sort()
    return indices
}

function joinIndicies<T,Separator> (indices: T[], separator: Separator): string {
    let stringSeparator = String(separator)
    return indices.join(stringSeparator)
}

const persons: Person[] = [
    { name: "Gösta", age: 81, isPensioner: true },
    { name: "Biggita", age: 75, isPensioner: true },
    { name: "Tomas", age: 32, isPensioner: false }
]

let names =  persons.map(person => person.name)
let ages = persons.map(person => person.age)
let isPensioners = persons.map(person => person.isPensioner)

let sortNames: GenericSortIndicesFn<String> = sortIndices
let sortAges: GenericSortIndicesFn<number> = sortIndices
let sortIsPensioners: GenericSortIndicesFn<boolean> = sortIndices

let joinNames: GenericJoinIndicesFn<String,String> = joinIndicies
let joinAges: GenericJoinIndicesFn<number,String> = joinIndicies
let joinIsPensioners: GenericJoinIndicesFn<boolean,String> = joinIndicies

sortNames(names)
sortAges(ages)
sortIsPensioners(isPensioners)

console.log("Names: " + joinNames(names, ", "))
console.log("Ages: " + joinAges(ages, ", "))
console.log("Is pensioners: " + joinIsPensioners(isPensioners, ", "))


//Takes in a generic type T and returns a function that takes in a generic type T and returns a generic type T
// Also takes in a generic function that takes in a generic type T and returns a generic type T
class GenericTextHandler<T, U> {
    constructor(private text: T, private textHandler: (text: T) => U) {}

    public handleText(): U {
        return this.textHandler(this.text)
    }
}

const textCapitalizer = new GenericTextHandler("hello world", (text) => {
    if(!text || text.length < 2) return ""
    return `${text[0].toUpperCase()}${text.slice(1)}`
})

const textWordCapitalizer = new GenericTextHandler("the quick brown fox jumps over the lazy dog", (text) => {
    if(!text || text.length < 2) return ""
    return text.split(" ").map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(" ")
})

const numberAdder = new GenericTextHandler(42, (number) => {
    return number + 1
})

console.log(textCapitalizer.handleText())
console.log(textWordCapitalizer.handleText())
console.log(numberAdder.handleText())

interface User {
	id: number;
	name: string;
	age: number;
}


interface HasLength {
	length: number
}

function loggingIdentity<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity("helllo world")
loggingIdentity([0,1,2,3])
loggingIdentity({ length: 20, value: 20})

//loggingIdentity(8) //Argument of type 'number' is not assignable to parameter of type 'HasLength'.