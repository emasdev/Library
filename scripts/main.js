import myLibrary from "./library.js";
import Book from "./book.js";
import { renderBooks } from "./helper.js";
const library = document.getElementById("library_container");
const bookTable = document.createElement("ul");
library.appendChild(bookTable);

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
  // modal.classList.add("hidden");
});

cancelButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
