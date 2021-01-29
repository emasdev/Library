import myLibrary from './library.js';
import Book from './book.js';
import { renderBooks,renderBooksInfo,renderFavoriteInfo } from "./helper.js";

let modal = document.getElementById("modal");
let modalCancelButton = modal.getElementsByTagName("button")[1];
let modalAddButton = modal.getElementsByTagName("button")[0];

let title = document.getElementById("title");
let author = document.getElementById("author");
let genre = document.getElementById("genre");
let pages = document.getElementById("pages");
let read_pages = document.getElementById("read_pages");
let cover = document.getElementById("cover");
let isRead = document.getElementById("isRead");


modalAddButton.addEventListener("click", function () {
  let book = new Book(
    title.value,
    author.value,
    genre.value,
    pages.value,
    read_pages.value,
    cover.value === '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBVTmWmQDY05iDPuCQSTZDN7EN6Xr_P5jLg&usqp=CAU' : cover.value,
    isRead.checked
  );
  console.log(book);
  myLibrary.addBookToLibrary(book);
  bookTable.innerHTML = "";
  renderBooks(myLibrary, bookTable);
  renderBooksInfo(myLibrary);
  renderFavoriteInfo(myLibrary);
  modal.classList.add("hidden");
});

modalCancelButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

export default modal