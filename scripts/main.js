import myLibrary from "./library.js";
import Book from "./book.js";
import { renderBooks } from "./helper.js";
const library = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(library)
const bookTable = document.createElement("div");
library.appendChild(bookTable);

/* Main View elements */
let addBookModal = document.getElementById("add-book-modal");


/* modal elements */

let modal = document.getElementById("modal");
let cancelButton = modal.getElementsByTagName("button")[1];
let addBookButton = modal.getElementsByTagName("button")[0];

let title = document.getElementById("title");
let author = document.getElementById("author");
let genre = document.getElementById("genre");
let pages = document.getElementById("pages");
let cover = document.getElementById("cover");

// --------------------

/* Render books */

console.log(myLibrary);

// render books to the screen
renderBooks(myLibrary, bookTable);

/* Add book to library */

addBookModal.addEventListener("click", function (e) {
  modal.classList.remove("hidden");
});

addBookButton.addEventListener("click", function (e) {
  e.preventDefault;
  let book = new Book(
    title.value,
    author.value,
    genre.value,
    pages.value,
    cover.value
  );
  myLibrary.addBookToLibrary(book);
  bookTable.innerHTML = "";
  renderBooks(myLibrary, bookTable);
  modal.classList.add("hidden");
});

cancelButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
