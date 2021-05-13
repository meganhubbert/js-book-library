document.addEventListener("DOMContentLoaded", () => {
    const newBookForm = document.querySelector('form')
    newBookForm.addEventListener('submit', addBook)
    fetchAll()
})

// global variables

let searchBar = document.querySelector("input#search-bar")
let searchButton = document.querySelector("button#search-button")
let bookLibrary= document.querySelector("div#all-books")




//fetch functions

function fetchAll(){
    fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(book => book.forEach(book => renderBook(book)))

}

function createBook(book){
    fetch(`http://localhost:3000/books`, {
        method: "POST",
        headers: {
            "Content-type" : "Application/json"
        },
        body: JSON.stringify(book)
    })
}

//Event Handlers

function addBook(e){
    e.preventDefault()
    const book = {
        title: e.target['title-input'].value,
        author: e.target['author-input'].value,
        genre: e.target['genre-input'].value,
        coverPhoto: e.target['cover-input'].value,
        publishingDate: e.target['published-input'].value
    }
    createBook(book)
}

// DOM Manipulation

function renderBook(book) {
    let bookDiv = document.createElement("div")
    bookDiv.innerHTML = `
    <div class='bookInfo'></div>
        <img src="${book.coverPhoto}" width="200px" height="300px"/>
        <h4>${book.title}</h4>
        <h5>${book.author}</h5>
        <p>${book.genre}</p>
        <p>${book.publishingDate}</p>
    `
bookLibrary.append(bookDiv)
}


// searchButton.addEventListener("submit")

//fetch
// function viewBooks() {
//     fetch("http://localhost:3000/books")
//     .then(res => res.json())
//     .then((allBooks) => {
//         allBooks.forEach((bookObj) => {
//             let bookSpan= document.createElement("span")
//             let bookImage= document.createElement("img")
//                 bookImage.src= bookObj.coverPhoto
//                 bookImage.style.width = '200px'
//                 bookImage.style.height = '300px'
//                 bookSpan.append(bookImage)
//             let bookTitle= document.createElement("h4")
//                 bookTitle.innerText=bookObj.title
//                 bookSpan.append(bookTitle)
//             let bookAuthor= document.createElement("h5")
//                 bookAuthor.innerText=bookObj.author
//                 bookSpan.append(bookAuthor)
//             let bookGenre= document.createElement("p")
//                 bookGenre.innerText=bookObj.genre
//                 bookSpan.append(bookGenre)
//             let bookPublishingDate= document.createElement("p")
//                 bookPublishingDate.innerText=bookObj.publishingDate
//                 bookSpan.append(bookPublishingDate)
//                 bookLibrary.append(bookSpan)
//         });
//     })
// }

// viewBooks();
