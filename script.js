let container = document.getElementById('cardContainer')

let myLib = []
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLib(newBook){
    myLib.push(newBook)
}

function displayBooks(myLib){
    for(let i = 0; i < myLib.length; i++){
        const newCard = document.createElement('div')
        const title = document.createElement('div')
        const author = document.createElement('div')
        const pages = document.createElement('div')
        const readStatus = document.createElement('button')
        title.textContent = myLib[i]['title']
        author.textContent = myLib[i]['author']
        pages.textContent = myLib[i]['pages'] + ' pages'
        readStatus.textContent = (myLib[i]['readStatus'] ? 'Read' : 'Not read')
        newCard.classList.add('newCard')
        newCard.append(title, author, pages, readStatus)
        container.append(newCard)
    }
}

let book1= new Book("Sea of Monsters", "Rick Riordan", 312, true);

addBookToLib(book1)

let book2 = new Book("The Night in Paris", "Top G", 30, false)
addBookToLib(book2)

console.log(myLib)

displayBooks(myLib)



