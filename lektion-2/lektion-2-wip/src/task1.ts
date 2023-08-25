type AccessLevel = 1 | 2  | 3;

interface Person25 {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
}

interface Employee25 extends Person25 {
    employeeId: number;
    jobTitle: string;
    accessLevel: AccessLevel;
}

interface Product25 {
    EAN: string;
    title: string;
    description: string;
    quantity: number;
    price: number;
    discount?: number;
}

interface Store25 {
    address: string;
    id: string;
    corporateNumber?: string;
    employees: Employee25[];
    products: Product25[];
    isAccessGranted: (accessLevel?: AccessLevel) => boolean;
}

//?1.

const customer: Person25 = {
    firstName: "Jonatan",
    lastName: "Vahlberg",
    phone: "070-1234567",
    address: "Storgatan 1"
}

const employee1: Employee25 = {
    firstName: "Lars",
    lastName: "Karlsson",
    phone: "070-1234567",
    address: "Storgatan 12",
    employeeId: 1,
    jobTitle: "CEO",
    accessLevel: 3
}
// ? 2.
const product1: Product25 = {
    EAN: "123456789",
    title: "Banan",
    description: "En gul böjd frukt",
    quantity: 0,
    price: 10
}

const product2: Product25 = {
    EAN: "827328732",
    title: "Äpple",
    description: "En röd rund frukt",
    quantity: 10,
    price: 10,
    discount: 2
}

// ? 3.
const store: Store25 = {
    address: "Långa gatan 1",
    id: "1882",
    corporateNumber: "556667-8899",
    employees: [employee1],
    products: [product1, product2],
    isAccessGranted: (accessLevel?: AccessLevel) => {
        return !!accessLevel
    }
}

// ? 4.

const openStoreInventory = (store: Store25, accessLevel?: AccessLevel ) => {
    const _isAccessGranted = store.isAccessGranted(accessLevel)

    if(_isAccessGranted){
        console.log("Access granted")
        return 
    }
    console.log("Access is not granted contact employee or manager")
    
}
//Customer attempts to open store inventory
openStoreInventory(store, undefined)


// ? 5.

//Employee helps with opening inventory
openStoreInventory(store, store.employees[0].accessLevel)

// ? 6.

const checkInvetory = (store: Store25, EAN: string) => {
    const product = store.products.find(product => product.EAN === EAN)

    if(!product) {
        console.log(`Product: ${EAN} could not be found`)
        return
    }
    if(product && !product.quantity){
        console.log(`Product: ${product.title} is not available due to shortage`)
        return
    }
    console.log(`Product: ${product.title} is available ${product.quantity} left in stock`)
}

checkInvetory(store,"123456789")
checkInvetory(store,"282")
checkInvetory(store,"827328732")

