// global variables

let searchBar = document.querySelector("input#search-bar")
let searchButton = document.querySelector("button#search-button")
let bookLibrary= document.querySelector("div#all-books")
let addBookForm = document.querySelector("form#book-post-form")
          let addTitle = addBookForm.querySelector("input#title-input")
          let addAuthor = addBookForm.querySelector("input#author")
          let addBookImage = addBookForm.querySelector("input#coverphoto")
          let addGenre = addBookForm.querySelector("input#genre-input")
          let addPublicationDate = addBookForm.querySelector("input#publishingdate")
          let addBookButton = addBookForm.querySelector("button#submit")



// searchButton.addEventListener("submit")

//fetch
function viewBooks() {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then((allBooks) => {
        allBooks.forEach((bookObj) => {
            let bookSpan= document.createElement("span")
            let bookImage= document.createElement("img")
                bookImage.src= bookObj.coverPhoto
                bookImage.style.width = '200px'
                bookImage.style.height = '300px'
                bookSpan.append(bookImage)
            let bookTitle= document.createElement("h4")
                bookTitle.innerText=bookObj.title
                bookSpan.append(bookTitle)
            let bookAuthor= document.createElement("h5")
                bookAuthor.innerText=bookObj.author
                bookSpan.append(bookAuthor)
            let bookGenre= document.createElement("p")
                bookGenre.innerText=bookObj.genre
                bookSpan.append(bookGenre)
            let bookPublishingDate= document.createElement("p")
                bookPublishingDate.innerText=bookObj.publishingDate
                bookSpan.append(bookPublishingDate)
                bookLibrary.append(bookSpan)
        });
    })
}

viewBooks();
