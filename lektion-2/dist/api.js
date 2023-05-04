var BASE_URL = "https://openlibrary.org/";
var SEARCH_URL = "".concat(BASE_URL, "search.json?limit=10&title=");
var seachForm = document.querySelector("form");
var results = document.getElementById("results");
function createBookElement(book) {
    var bookElement = document.createElement("div");
    bookElement.classList.add("book");
    var coverElement = document.createElement("img");
    coverElement.src = "https://covers.openlibrary.org/b/id/".concat(book.cover_i, "-M.jpg");
    bookElement.appendChild(coverElement);
    var titleElement = document.createElement("h2");
    titleElement.textContent = book.title;
    bookElement.appendChild(titleElement);
    var authorElement = document.createElement("p");
    authorElement.textContent = book.author_name.join(", ");
    bookElement.appendChild(authorElement);
    var yearElement = document.createElement("p");
    yearElement.textContent = book.first_publish_year.toString();
    bookElement.appendChild(yearElement);
    return bookElement;
}
function addBooksToResults(books) {
    results.innerHTML = "";
    books.forEach(function (book) {
        var bookElement = createBookElement(book);
        results.appendChild(bookElement);
    });
}
// form submit function searchLibrary()
function searchLibrary(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    var query = data.get("search");
    if (query === "")
        addBooksToResults([]);
    fetch("".concat(SEARCH_URL).concat(query))
        .then(function (response) { return response.json(); })
        .then(function (responseData) {
        var data = responseData;
        var books = data.docs;
        addBooksToResults(books);
    })
        .catch(function (error) { return console.log(error); });
}
seachForm.addEventListener("submit", searchLibrary);
