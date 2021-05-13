document.addEventListener("DOMContentLoaded", () => {
    let newBookForm = document.querySelector('form')
    newBookForm.addEventListener('submit', addBook)
    fetchAll()
})

// global variables

let bookLibrary = document.querySelector("div#all-books")
// let searchBar = document.querySelector("input#search-bar")
// let searchButton = document.querySelector("button#search-button")

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
    .then(res => res.json())
    .then(book => renderBook(book))
}

// function patchBook(updatedBook, id){
//     fetch(`http://localhost:3000/books/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-type" : "application/json"
//         },
//         body: JSON.stringify(updatedBook)
//     })
//     .then(res => res.json())
//     .then(book => {
//         bookLibrary.innerHTML = ""
//         renderBook(book)
//     })
// }

// function deleteBook(id){
//     fetch(`http://localhost:3000/books/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type" : "application/json"
//         }
//     })
//     .then(res => res.json())
//     .then(() => {
//         bookLibrary.innerHTML = ""
//         fetchAll()
//     })
// }

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
        <div class='bookInfo' id=${book.id}>
                <img src="${book.coverPhoto}" width="200px" height="300px"/>
                <h4>${book.title}</h4>
                <h5>${book.author}</h5>
                <p>${book.genre}</p>
                <p>${book.publishingDate}</p>
                // div id = "edit-form"
            <button id="edit-button">Edit Info</button>
            <button id="delete-button">Delete Book</button>
        </div>
        `
    
    bookLibrary.append(bookDiv)
    let editButton = bookDiv.querySelector('#edit-button')
    console.log(editButton)
   
    editButton.addEventListener('click', () => {console.log("hello")})

    // const deleteButton = document.querySelector('#delete-button')
    // deleteButton.addEventListener('click', () => deleteBook(book.id))
}

function editBook(book){
    let form = document.querySelector('form')
    // form.removeEventListener('submit', addBook)
    // form.addEventListener('submit', (e) => updateBook(e, book))
    form['title-input'] = "hi!"
    // form['title-input'].value = book.title
    // form['author-input'].value = book.author
    // form['cover-input'].value = book.coverPhoto
    // form['genre-input'].value = book.genre
    // form['published-input'].value = book.publishingDate

    // form.submit.value = 'Edit'
}

// function updateBook(e, book) {
//     e.preventDefault()

//     const updatedBook = {
//         title: e.target['title-input'].value,
//         author: e.target['author-input'].value,
//         coverPhoto: e.target['cover-input'].value,
//         genre: e.target['genre-input'].value,
//         publishingDate: e.target['published-input'].value
//     }
//     form.reset()
//     form.submit.value = 'submit'
//     form.removeEventListener('submit', (e) => updateBook(e, book))
//     form.addEventListener('click', addBook)

//     patchBook(updatedBook, book.id)
// }