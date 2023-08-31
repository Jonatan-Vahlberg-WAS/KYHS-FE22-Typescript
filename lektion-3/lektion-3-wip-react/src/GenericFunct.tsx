

interface Comicbook {
    pages: number
    distributor: string;
}

interface Book {
    pages: number
    binded: boolean
}

interface PagedEntity {
    pages: number
}

interface StringLike {
    toString: () => string
}

function flipThroughBook<T extends PagedEntity>(book: T){
    return `Flipping trough this book with ${book.pages} pages`
}

//Generate a generic task that uses the following: generic functions and arguments

// 1. Create a generic function that takes in a value of type T and returns 
    // that value
    function genericFn<T> (value: T): T {
        return value
    }

// 2. Create a generic function that takes in a value of type T and a 
    // array of type T and returns the array with the value added to it

    function addToArray<T> (value: T, arr: T[]): T[] {
        arr.push(value)
        return arr
    }

// 3. Create a generic function that takes in a array of type T and search value of
    // type T and returns a tuple of two arrays.
    // 3.1. splits the array at a designated value of type T

    function splitArrayOnSearch<T> (arr: T[], searchValue: T): [T[], T[]] {
        const indexOfSearchValue = arr.findIndex(item => item === searchValue)
        if(indexOfSearchValue === -1){
            return [[],[]]
        }
        const firstHalf: T[] = []
        const laterHalf: T[] = []

        arr.forEach((item, index) => {
            if(index <= indexOfSearchValue ){
                return firstHalf.push(item)
            }
            laterHalf.push(item)

        })

        return [firstHalf, laterHalf]
    }

const GenericsFunct = () => {

    const ids = [1,4,212,67,13,45,34]
    const names = ["Jane","Mark", "Erik", "Lucas"]

    const [idsBefore, idsAfter] = splitArrayOnSearch(ids, 67)
    const [namesBefore, namesAfter] = splitArrayOnSearch(names, "Erik")

    const book: Book = {
        pages: 300,
        binded: false
    }

    const comicbook: Comicbook = {
        pages: 62,
        distributor: "Marvel"
    }
    
    const stringLike: StringLike = 0;

    return <div>
        Generics task

        <p>1. Solution for task 1</p>
        {genericFn(18)}
        {genericFn("Hello")}
        {genericFn(true)}
        {genericFn(null)}

        <p>2. Solution for task 2</p>
        <p>Before: {[1,2]}</p>
        <p>After: {addToArray<number>(3,[1,2])}</p>

        <p>. Solution for task 3</p>
        <p>{idsBefore.join(", ")}&nbsp;|&nbsp;{idsAfter.join(", ")}</p>
        <p>{namesBefore.join(", ")}&nbsp;|&nbsp;{namesAfter.join(", ")}</p>

        <p>
            {flipThroughBook(book)}
        </p>
        <p>
        {flipThroughBook(comicbook)}
        </p>
    </div>
}

export default GenericsFunct