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

function patchBook(updatedBook, id){
    fetch(`http://localhost:3000/books/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(updatedBook)
    })
    .then(res => res.json())
    .then(book => {
        bookLibrary.innerHTML = ""
        renderBook(book)
    })
}

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
                <div id = "edit-form">
                    <input id="title-edit" type="text" placeholder="Title"></input>
                    <input id="author-edit" type="text" placeholder="Author"></input>
                    <input id="genre-edit" type="text" placeholder="Genre"></input>
                    <input id="cover-edit" type="text" placeholder="Cover Photo URL"></input>
                    <input id="published-edit" type="text" placeholder="Year of Publication"></input>
                    <button id="edit-button">Edit Info</button>
                </div>
                <br>
            <button id="delete-button">Delete Book</button>
        </div>
        `
    
    bookLibrary.append(bookDiv)
    let editButton = bookDiv.querySelector('#edit-button')
    console.log(editButton)
   
    editButton.addEventListener('click', () => {
    function editBook(book){
        let editForm = bookDiv.querySelector('#edit-form')
        editForm.removeEventListener('click', addBook)
        editForm.addEventListener('submit', (e) => console.log("Hi"))
        // editForm.addEventListener('submit', (e) => updateBook(e, book))
        //    editForm['title-edit'].value = "Hi" 
    //     editForm['title-edit'].value = book.title
    //     editForm['author-edit'].value = book.author
    //     editForm['cover-edit'].value = book.coverPhoto
    //     editForm['genre-edit'].value = book.genre
    //     editForm['published-edit'].value = book.publishingDate
    
    //     editForm.submit.value = 'Edit'
    }
    
    // function updateBook(e, book) {
    //     e.preventDefault()
    
    //     const updatedBook = {
    //         title: e.target['title-edit'].value,
    //         author: e.target['author-edit'].value,
    //         coverPhoto: e.target['cover-edit'].value,
    //         genre: e.target['genre-edit'].value,
    //         publishingDate: e.target['published-edit'].value
    //     }
    //     editForm.reset()
    //     editForm.submit.value = 'submit'
    //     editForm.removeEventListener('submit', (e) => updateBook(e, book))
    //     editForm.addEventListener('click', addBook)
    
    //     patchBook(updatedBook, book.id)
    // }
    
    // const deleteButton = document.querySelector('#delete-button')
//     // deleteButton.addEventListener('click', () => deleteBook(book.id))
// })

})}
