// import lib from "tailwindcss";
import myLibrary from './library.js'
import Book from './book.js'
import createElement from './helper.js'
console.log(myLibrary);
const library = document.getElementById('library_container')
const bookTable = document.createElement('ul')
const addBookBtn = document.getElementById('add-book-btn')
library.appendChild(bookTable)

let title = document.getElementById('title')
let author = document.getElementById('author')
let genre = document.getElementById('genre')
let src = document.getElementById('src')


/* Render books */

myLibrary.forEach(book=>{

  let title = createElement('li',book.title,bookTable);
})

/* Add book to library */

addBookBtn.addEventListener("click", function(e){
  
  let book =new Book(title.value, author.value, genre.value, src.value);

  addBookToLibrary
  console.log(book);
});