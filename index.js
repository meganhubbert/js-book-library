document.addEventListener("DOMContentLoaded", () => {
    fetchAll()
})

// global variables

let searchBar = document.querySelector("input#search-bar")
let searchButton = document.querySelector("button#search-button")
let bookLibrary= document.querySelector("div#all-books")
let addBookForm = document.querySelector("form#book-post-form")
          let addTitle = addBookForm.querySelector("input#title-input")
          let addAuthor = addBookForm.querySelector("input#author-input")
          let addBookImage = addBookForm.querySelector("input#cover-input")
          let addGenre = addBookForm.querySelector("input#genre-input")
          let addPublicationDate = addBookForm.querySelector("input#published-input")
          let addBookButton = addBookForm.querySelector("button#submit")



//fetch functions

function fetchAll(){
    fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(book => book.forEach(book => renderBook(book)))

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
document.querySelector('div#all-books').append(bookDiv)
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
