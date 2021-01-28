import myLibrary from "./library.js";
import Book from "./book.js";
import { renderBooks } from "./helper.js";

/* container */

const library = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(library);
library.classList.add("flex", "flex-row", "min-h-full");

const bookTable = document.createElement("div");
bookTable.id = "bookTable";
bookTable.classList.add(
  "bg-gray-200",
  "flex-1",
  "pt-20",
  "grid",
  "md:grid-cols-3",
  "grid-col-2",
  "row-span-3"
);

const info = document.createElement("aside");
info.classList.add("bg-red-400", "border-l-2", "w-1/4", "pt-20");
info.innerHTML = "<h3 class='text-center'>Information</h3>";

library.appendChild(bookTable);
library.appendChild(info);
// ----------------

/* Main View elements */
let addBookModal = document.getElementById("add-book-modal");

/* modal elements */

let modal = document.getElementById("modal");
let modalCancelButton = modal.getElementsByTagName("button")[1];
let modalAddButton = modal.getElementsByTagName("button")[0];

let title = document.getElementById("title");
let author = document.getElementById("author");
let genre = document.getElementById("genre");
let pages = document.getElementById("pages");
let cover = document.getElementById("cover");

// --------------------

/* Render books */

// render books to the screen
renderBooks(myLibrary, bookTable);

/* Add book to library */

addBookModal.addEventListener("click", function (e) {
  modal.classList.remove("hidden");
});

modalAddButton.addEventListener("click", function (e) {
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

modalCancelButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
