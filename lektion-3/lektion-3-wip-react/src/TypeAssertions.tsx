import { useEffect, useRef, useState } from "react"


type Product = {
    name: string;
    EAN: string;
    category: "FOOD" | "ELECTRONIC"
}

type Electronic = Product & {
    category: "ELECTRONIC"
    voltage: number
}

type Food = Product & {
    category: "FOOD"
    calories: number
}

type LS_KEY = "@LS_PRODUCTS" 

const fetchData = () => {
    const data: unknown = [{
        name: "Tomato",
        EAN: "1727382783-2131231"
    }]

    const product: Product = data as Product 
}

const setInLocalStorage = (key: LS_KEY, products: Product[]) => {
    localStorage.setItem(key, JSON.stringify(products))
}

const getFromLocalStorage = (key: LS_KEY): Product[] => {
    const data = localStorage.getItem(key)

    if(!data) return []

    const _products = JSON.parse(data) as Product[]
    return _products
}

const productIsFoodOrElectronic = (product: Food | Electronic) => {
    if(product.category === "FOOD"){
        console.log("Calories: ",product.calories)
    }
    else {
        console.log("Voltage: ",product.voltage)
    }
}

const TypeAssertions = () => {
    const [products, setProducts] = useState<Product[]>([])

    const countRef = useRef(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setProducts(getFromLocalStorage("@LS_PRODUCTS"))
    },[])

    useEffect(() => {
        if(containerRef.current){
            //Explicit typign
            // const buttons: NodeListOf<HTMLButtonElement> = containerRef.current.querySelectorAll(".button")
            const buttons = containerRef.current.querySelectorAll(".button")
            buttons.forEach(button => {
                (button as HTMLButtonElement).addEventListener("click",(e) => {
                    const operator = button.textContent
                    if(operator) {
                        countRef.current =  operator === "+" ?  countRef.current + 1 : countRef.current - 1
                    }
                })
            })
        }
    },[containerRef])

    productIsFoodOrElectronic({
        name: "Tomato",
        EAN: "213213",
        category: "ELECTRONIC",
        voltage: 200
    })

    return <div ref={containerRef}>
        Click counter
        <div className="button" data-operator="+">+</div>
        {countRef.current}
        <div className="button"data-operator="-">-</div>
        <br></br>
        <br></br>
        <br></br>
        Products from storage:
        {products.map(product => (
            <div>
                <p><strong>{product.name}</strong></p>
                <p><i>{product.EAN}</i></p>
            </div>
        ))}
    </div>
}

export default TypeAssertions