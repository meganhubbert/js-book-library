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


// fetch("http://localhost:3000/books", {
//     method: "POST",
//     headers: {
//         "Content-type": "Application/json"
//     },
//     body: JSON.stringify({addBookImage})
// }
//     .then(res => res.json())
//     .then((bookObj) => {
//         let newBookObj = {"addTitle":"title", "addAuthor": "author", "addGenre":"genre", "coverPhoto", "addPublicationDate": "publishingDate"};
// })

function createBook(){
    addBookButton.addEventListener (" click", (e) => {
        e.preventDefault
        let newBookTitle= addTitle.value
        let newBookAuthor= addAuthor.value
        let newBookImage=addBookImage.value
        let newBookGenre = addGenre.value
        let newBookPublishingDate= addPublicationDate.value

        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({
                title: newBookTitle,
                author: newBookAuthor,
                genre: newBookGenre,
                coverPhoto : newBookImage,
                publishingDate: newBookPublishingDate
            })
        })
        .then(res => res.json())
        .then(() => {})
    })
}

// function addBook(e){
//     e.preventDefault()
//     const book = {
//         title: e.target['title-input'].value,
//         author: e.target.author.value,
//         genre: e.target['genre-input'].value,
//         coverPhoto : e.target.coverphoto.value,
//         publishingDate: e.target.publishingdate.value
//         }
//         addBookButton.addEventListener('click', (evt) =>{createBook(book)})

// }

// function renderNewBook() {
//     let newBook = document.createElement('span')
//     newBook.innerHTML = `

//     <img src=${"coverPhoto.value"}/>
//     <h4>${"title-input.value"}</h4>
//     <h5>${"author.value"}</h5>
//     <p>${"genre-input.value"}</p>
//     <p>${"publishingdate.value"}</p>
//     `
// },

// let form = document.querySelector('form')
//     form.reset()
//     form.submit.value = 'submit'
//     form.addEventListener('click', addBook)


// fetch("http://localhost:3000/books", {
//     method: "PATCH",
//     headers: {
//         "Content-type": "Application/json"
//     },
//     body: json.stringify(data)
//     })
//     .then(() => r.json())
//     .then((bookObj) => {
//         console.log(bookObj)
//         let newBook = bookObj
//     .then()
//     })