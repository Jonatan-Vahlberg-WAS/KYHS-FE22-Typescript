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
    INTERNAL_SERVER_ERROR = 500
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

function simulatedNetworkRequest(requestType: RequestType, db: string, endpoint: string): StatusCode {

    // requests have to have a RequestType a db and a endpoint
    
    // requests landing in the down database should return 500
    if(db === downDatabase) return StatusCode.INTERNAL_SERVER_ERROR

    // if requestType is NA should return 500
    if(!requestType) return StatusCode.INTERNAL_SERVER_ERROR
    
    // requests landing in the normal db has to correspond with an endpoint otherwise 404
    if(!databaseEndpoints.includes(endpoint)) return StatusCode.NOT_FOUND 
    // interacting with user 1 results in 401
    if(endpoint === databaseEndpoints[0]) return StatusCode.UNALLOWED
    
    // POST generates 201 and PUT and GET 200
    return requestType === RequestType.POST ? StatusCode.CREATED : StatusCode.OK
}

console.log(simulatedNetworkRequest(RequestType.POST,database,databaseEndpoints[1]))
console.log(simulatedNetworkRequest(RequestType.POST,downDatabase,databaseEndpoints[1]))
console.log(simulatedNetworkRequest(RequestType.NA,database,databaseEndpoints[1]))
console.log(simulatedNetworkRequest(RequestType.POST,database,databaseEndpoints[0]))
console.log(simulatedNetworkRequest(RequestType.GET,database,databaseEndpoints[1]))
console.log(simulatedNetworkRequest(RequestType.GET,database,"test"))


type Person25Afternoon = {
    name: string;
    age: number;
}
    
type Address = {
    street: string;
    city: string;
    zipCode: string;
}

type PersonWithAddress = Person25Afternoon & Address;

type TextInputProps = {
    color: any;
    style: {}
    //100s more
}

// used mostly on the fly and not pre defined
const CustomTextInput = (props: TextInputProps & {
    hasValidation: boolean
}) => {

}

//TYPE defined
type Animal = {}

type Snake = {} & Animal

//INTERFACE defined
interface Insect {}
interface FireAnt extends Insect {}