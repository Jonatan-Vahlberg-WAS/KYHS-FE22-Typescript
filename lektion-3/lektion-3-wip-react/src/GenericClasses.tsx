interface Splittable<T> {
    split: (splitOn: string) => T[]
    toLowerCase: () => T,
    toUpperCase: () => T
}

class GenericString<T extends Splittable<T>> {
    value: T;
    constructor(initialValue: T){
        this.value = initialValue
    }

    toRandomCasing(){
        const splitString = this.value.split("")
        let casedString = ""
        splitString.forEach(s => {
            const r = Math.random()
            if(r > 0.5){
                casedString += s.toLowerCase()
            }
            else{
                casedString += s.toUpperCase()
            }
        })

        return casedString
    }
}


const GenericClasses = () => {

    const genString = new GenericString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vero, dolore quod culpa itaque eveniet vitae deleniti sunt asperiores, fugiat sapiente dolores quia quos nam soluta, molestias quae quas dolorem?")

    return (
        <div>
            Generic classes
            <p>{genString.value}</p>
            <p>{genString.toRandomCasing()}</p>            
        </div>
    )
}

export default GenericClasses