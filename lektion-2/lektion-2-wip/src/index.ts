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


const myTuple: [string, number, boolean] = [
    "hej", 12, true
]

const [greeting, cost, bool] = myTuple

//Enum implicit
enum Weekday {
    NA,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
}

//Enum explicit
enum Color {
    RED = 1,
    GREEN = 2,
    BLUE = 3
}

//Enum String
enum Keys {
    ENTER = "ENTER",
    DEL = "DEl",
    SPACE = "SPACE"
}

//Computed enum values
enum FileAccess {
    NA,
    READ = 1,
    WRITE = 2,
    READ_WRITE = READ | WRITE
}

enum StatusCode {
    OK = 200,
    CREATED = 201,
    UNALLOWED = 401,
    NOT_FOUND = 404,
}

enum RequestType {
    NA,
    POST,
    GET,
    PUT
}

const database = "http://sim.data/api/v1";
const downDatabase = "http://sim.data.down/api/v1"

const databaseEndpoints = [
    "users/1",
    "users/12",
    "users/18"
]

function simulatedNetworkRequest(){
    //todo requests have to have a RequestMethod a db and a endpoint

    //todo requests landing in the down database should return 500

    //todo requests landing in the normal db has to correspond with an endpoint otherwise 404

    //todo POST generate 201 GET 200 and any attempt at interacting with user 1 results in 401
}