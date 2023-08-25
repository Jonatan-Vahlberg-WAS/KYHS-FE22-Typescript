interface Human {
    firstName: string;
    lastName: string;
    age: number
}

interface Child extends Human {
    playMates: Child[]
}

interface PersonWIP extends Human {
    children: Child[]
}

interface Movie {
    title: string;
    runtime: number;
    director: Human;
    leadActor: Human
    category: "DRAMA" | "COMEDY" | "HORROR"
    ageGated: boolean;
}

const _person: PersonWIP = {
    firstName: "Jonatan",
    lastName: "Vahlberg",
    age: 26,
    children: []
}

const _person2: PersonWIP = {
    firstName: "Lars",
    lastName: "Karlsson",
    age: 49,
    children: [{
        firstName: "Johan",
        lastName: "Karlsson",
        age: 12,
        playMates: []
    }]
}

if(!_person.children) {
    console.log("No children")
}
else{
    console.log("Has Children")
}

// const movie: Movie = {

// }

console.log(_person.children?.length)


