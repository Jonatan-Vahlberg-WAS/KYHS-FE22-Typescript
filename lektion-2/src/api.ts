interface Book {
    author_name: string[];
    cover_i: number;
    first_publish_year: number;
    key: string;
    language: string[];
    title: string;
    type: string;
}

interface SuccessResponse {
    numFound: number;
    start: number;
    docs: Book[];
}

const BASE_URL = "https://openlibrary.org/"
const SEARCH_URL = `${BASE_URL}search.json?limit=10&title=`

const seachForm = document.querySelector("form") as HTMLFormElement
const results = document.getElementById("results") as HTMLDivElement

function createBookElement(book: Book): HTMLDivElement {
    const bookElement = document.createElement("div")
    bookElement.classList.add("book")

    const coverElement = document.createElement("img")
    coverElement.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    bookElement.appendChild(coverElement)

    const titleElement = document.createElement("h2")
    titleElement.textContent = book.title
    bookElement.appendChild(titleElement)

    const authorElement = document.createElement("p")
    authorElement.textContent = book.author_name.join(", ")
    bookElement.appendChild(authorElement)

    const yearElement = document.createElement("p")
    yearElement.textContent = book.first_publish_year.toString()
    bookElement.appendChild(yearElement)

    return bookElement
}

function addBooksToResults(books: Book[]): void {
    results.innerHTML = ""
    books.forEach(book => {
        const bookElement = createBookElement(book)
        results.appendChild(bookElement)
    })
}

// form submit function searchLibrary()
function searchLibrary(event: SubmitEvent) {
    event.preventDefault()
    const data = new FormData(event.target as HTMLFormElement)
    const query: string = data.get("search") as string

    if(query === "") addBooksToResults([])

    fetch(`${SEARCH_URL}${query}`)
        .then(response => response.json())
        .then(responseData => {
            const data: SuccessResponse = responseData
            const books: Book[] = data.docs
            addBooksToResults(books)
        }
        )
        .catch(error => console.log(error))

    
}

seachForm.addEventListener("submit", searchLibrary)