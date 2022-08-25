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
        //define parts of the card
        const newCard = document.createElement('div')
        const title = document.createElement('div')
        const author = document.createElement('div')
        const pages = document.createElement('div')
        const readStatus = document.createElement('button')
        //add text to the parts
        title.textContent = myLib[i]['title']
        author.textContent = myLib[i]['author']
        pages.textContent = myLib[i]['pages'] + ' pages'
        readStatus.innerHTML = (myLib[i]['readStatus'] ? 'Read' : 'Not read')
        //add classes for styling
        newCard.classList.add('newCard')
        readStatus.classList.add('statusButton')
        //change text of button based on value
        readStatus.addEventListener('click', () => handleClick(title.textContent))
        //append components
        newCard.append(title, author, pages, readStatus)
        container.append(newCard)
    }
}

function handleClick(bookTitle){
    //change the readStatus of the title which matches
    for(let i = 0; i< myLib.length; i++){
        if(myLib[i]['title'] == bookTitle){
            myLib[i]['readStatus'] = !myLib[i]['readStatus']
        }
    }
    //clear and rerender page
    container.innerHTML = ""
    displayBooks(myLib)
}

let book1= new Book("Sea of Monsters", "Rick Riordan", 312, true);

addBookToLib(book1)

let book2 = new Book("The Night in Paris", "Top Gun", 30, false)
addBookToLib(book2)

console.log(myLib)

displayBooks(myLib)



