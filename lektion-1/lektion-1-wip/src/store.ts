const _products: Product[] = []

const form = document.getElementById("product-form")

function addProduct(name: string, price: number) {
    const foundProductIndex = _products.findIndex(p => p.name === name)
    if(foundProductIndex !== -1) {
        _products[foundProductIndex] = {
            ..._products[foundProductIndex],
            quantity: _products[foundProductIndex].quantity + 1
        }
        return
    }

    _products.push({
        name,
        price,
        quantity: 1
    })
}
/* 
2. Create a function that takes in an array of product objects and returns the total cost of all _products.
*/

function getProductTotal (): number {
    // 1 foreach
    let total = 0;
    _products.forEach(p => {
        total += (p.price * p.quantity)
    }) 
    return total

    // 2 map, reduce
    return _products.map(p => p.price * p.quantity).reduce((acc, current) => acc + current)
}


//3 Create a function that takes in a product object and updates its quantity in storage.
function updateProductQuantity(product: Product, quantity: number): Product {
    product.quantity = quantity
    return product
}

//! Optional
//1 Create a function that takes in an array of product objects and a 
//  discount percentage, and returns the total cost of all products after discount.

//Refactored version: Create a function that takes in a total and a 
//discount percentage, and returns the total cost of all products after discount.


function getDiscountedTotal(total: number, discount: number): number {

    const totalDiscount = total * discount

    return total - totalDiscount
} 

//2. Create a function that takes in an array of product objects 
//and a tax rate, and returns the total cost of all products after tax.

function getTaxedTotal(total: number, taxrate: number): number {
    const taxOfTotal = total * taxrate
    return total + taxOfTotal
}

//3. Create a function that takes in an array of product objects and a 
//filter function, and returns an array of products that pass the filter function.

const filterOnEmpty = (product: Product): boolean => {
    return product.quantity > 0
}

const filterOnName = (product: Product, name: string) => {
    return product.name.toLowerCase().includes(name)
}

function filterProducts(filter: (product: Product) => boolean): Product[] {
    return _products.filter(filter)
}


form?.addEventListener("submit", (event) => {
    event.stopPropagation()
    event.preventDefault()
    const _form = event.target as HTMLFormElement
    const _fields = _form.elements
    const nameInput = _fields.namedItem("name") as HTMLInputElement
    const priceInput = _fields.namedItem("price") as HTMLInputElement

    console.log(nameInput, priceInput)
    addProduct(nameInput.value, parseInt(priceInput.value))
    console.log("Products: ", _products)
    _form.reset()

    const main = document.getElementById("product-main") 

    const totalPriceTag = document.createElement("h3")
    totalPriceTag.innerText = `${getProductTotal()}kr`
    main?.appendChild(totalPriceTag)
})