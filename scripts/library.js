
function Library (myLibrary){
  this.myLibrary = myLibrary
}

Library.prototype.addBookToLibrary = (book)=>{
  this.myLibrary.books.push(book)
}


let books= [
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
let myLibrary = new Library(books)

console.log(myLibrary.books);
myLibrary.addBookToLibrary(Object.new)

function addBookToLibrary(book) {
console.log('something');
  myLibrary.push(book);
}



export default myLibrary