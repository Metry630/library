let container = document.getElementById("cardContainer");
let addBookButton = document.getElementById("addBook");
let modalOverlay = document.getElementById("modalOverlay");
let closeModal = document.getElementById("closeModal");
let saveBook = document.getElementById("save");
let newTitle = document.getElementById("title");
let newAuthor = document.getElementById("author");
let newPages = document.getElementById("pageNum");
let newStatus = document.getElementById("readStatus");
addBookButton.addEventListener("click", () => displayModal());
closeModal.addEventListener("click", () => hideModalWindow());
saveBook.addEventListener("click", () => addBook());

let myLib = [];
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLib(newBook) {
  myLib.push(newBook);
}

function displayBooks(myLib) {
  for (let i = 0; i < myLib.length; i++) {
    //define parts of the card
    const newCard = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const readStatus = document.createElement("button");
    const removeBook = document.createElement("button");
    //add text to the parts
    title.textContent = myLib[i]["title"];
    author.textContent = myLib[i]["author"];
    pages.textContent = myLib[i]["pages"] + " pages";
    readStatus.innerHTML = myLib[i]["readStatus"] ? "Read" : "Not read";
    removeBook.textContent = "Remove book";
    //add classes for styling
    newCard.classList.add("newCard");
    readStatus.classList.add("statusButton");
    //change text of readStatus button based on value
    readStatus.addEventListener("click", () => handleStatusClick(title.textContent));
    //add functionality to removeBook 
    removeBook.addEventListener("click", () => handleRemovalClick(title.textContent))
    //append components
    newCard.append(title, author, pages, readStatus, removeBook);
    container.append(newCard);
  }
}

function handleStatusClick(bookTitle) {
  for (let i = 0; i < myLib.length; i++) {
    if (myLib[i]["title"] == bookTitle) {
      myLib[i]["readStatus"] = !myLib[i]["readStatus"];
    }
  }
  //clear and rerender page
  container.innerHTML = "";
  displayBooks(myLib);
}

function handleRemovalClick(bookTitle) {
    for (let i = 0; i < myLib.length; i++) {
      if (myLib[i]["title"] == bookTitle) {
        const removalIndex = i;
        myLib.splice(removalIndex, 1)
      }
    }
    //clear and rerender page
    container.innerHTML = "";
    displayBooks(myLib);
  }

function addBook() {
  let newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPages.value,
    newStatus.value == true
  );
  console.log(newBook);
  addBookToLib(newBook);
  modalOverlay.style.display = "none";
  container.innerHTML = "";
  displayBooks(myLib);
}
function displayModal() {
  modalOverlay.style.display = "flex";
}
function hideModalWindow() {
  modalOverlay.style.display = "none";
}

let book1 = new Book("Sea of Monsters", "Rick Riordan", 312, true);

addBookToLib(book1);

let book2 = new Book("The Night in Paris", "Top Gun", 30, false);
addBookToLib(book2);

console.log(myLib);

displayBooks(myLib);
