import myLibrary from './library.js';
import Book from './book.js';
import { renderBooks,renderBooksInfo } from "./helper.js";

let modal = document.getElementById("modal");
let modalCancelButton = modal.getElementsByTagName("button")[1];
let modalAddButton = modal.getElementsByTagName("button")[0];

let title = document.getElementById("title");
let author = document.getElementById("author");
let genre = document.getElementById("genre");
let pages = document.getElementById("pages");
let read_pages = document.getElementById("read_pages");
let isRead = document.getElementById("isRead");


modalAddButton.addEventListener("click", function () {
  let book = new Book(
    title.value,
    author.value,
    genre.value,
    pages.value,
    read_pages.value,
    cover.value,
    isRead.checked
  );
  myLibrary.addBookToLibrary(book);
  bookTable.innerHTML = "";
  renderBooks(myLibrary, bookTable);
  renderBooksInfo(myLibrary, info);
  modal.classList.add("hidden");
});

modalCancelButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

export default modal