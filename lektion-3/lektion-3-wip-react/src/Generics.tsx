import { useState } from "react"

interface Friend {
    name: string;
}

const greeting = (message: string) => {
    return message
}

function greetingWithData<T> (message: string, data: T) {
    
    message = `${message}${data}`

    return message
}

// function addData<T> (data1: T, data2: T) {
//     return data1 + data2
// }

function sortProducts<T>(products: T[], sortFunction: (product1: T, product2: T) => number) {
    return products.sort(sortFunction)
}

const Generics = () => {
    // Implicit generic useState
    const [name, setName] = useState("name")

    //explicit generic useState
    const [age, setAge] = useState<number>(0)

    const friendIds = [1,38,23,12]

    const friends: Friend[] = [
        { name: "Jane" },
        { name: "Mark"},
        { name: "Albert"},
        { name: "Moa"}
    ]


    return <div>
        Generics

        <p>Greeting: {greeting("Hello world")}</p>

        <p>Greeting with data: {greetingWithData<number>("Today is the ", 31)}</p>
        <p>Greeting with data: {greetingWithData("It is raining today ", false)}</p>

        <p> Sorted friend ids:&nbsp;
            {sortProducts<number>(friendIds, (id1, id2) => id1 - id2).join(", ")}
        </p>

        <p>
            Sorted friends:&nbsp;
            {sortProducts<Friend>(friends,(f1, f2) => f1.name.length - f2.name.length).map(f => f.name).join(", ")}
        </p>
    </div>
}

export default Generics