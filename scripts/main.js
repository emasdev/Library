const library = document.getElementById('library_container')
const bookTable = document.createElement('ul')
library.appendChild(bookTable)

function createElement(tag,text,parrent){
  el =document.createElement(tag);
  el.innerText = text;
  parrent.appendChild(el)
  return el
}

let myLibrary = [
  {
    title:'Fight club',
    author:'Chuck Palahniuk',
    genre: 'psychology',
    src:"https://http2.mlstatic.com/D_NQ_NP_2X_961845-MLM43604844141_092020-F.webp"
  },
  {
    title:'1Q84',
    author:'Haruki Murakami',
    genre: ' Parallel universes in fiction,Fiction',
    src:"https://http2.mlstatic.com/D_NQ_NP_2X_961845-MLM43604844141_092020-F.webp"
  }
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

myLibrary.forEach(book=>{

  title = createElement('li',book.title,bookTable);
})