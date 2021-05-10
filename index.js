{/* <input id="search-bar" type="text" placeholder="Harry Potter and the Sorcerer's Stone"></input>
          <button id="search-button">Search</button> */}

        //   <div id = "all-books"></div>

let searchBar = document.querySelector("input#search-bar")
let searchButton = document.querySelector("button#search-button")
let bookLibrary= document.querySelector("div#all-books")


// searchButton.addEventListener("submit")

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





