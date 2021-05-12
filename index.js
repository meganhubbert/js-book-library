{/* <input id="search-bar" type="text" placeholder="Harry Potter and the Sorcerer's Stone"></input>
          <button id="search-button">Search</button> */}

let searchBar = document.querySelector("input#search-bar")
let searchButton = document.querySelector("button#search-button")

// searchButton.addEventListener("submit")

fetch("http://localhost:3000/books") 
    .then(res => res.json())
    .then((allBooks) => {
        console.log(allBooks)
    })


