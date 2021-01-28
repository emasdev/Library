let myLibrary = [
  {
    title: "Fight club",
    author: "Chuck Palahniuk",
    genre: "psychology",
    pages: 128,
    cover:
      "https://http2.mlstatic.com/D_NQ_NP_2X_961845-MLM43604844141_092020-F.webp",
  },
  {
    title: "1Q84",
    author: "Haruki Murakami",
    genre: " Parallel universes in fiction,Fiction",
    pages: 442,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
  },
  {
    title: "dddddd",
    author: "Haruki Murakami",
    genre: " Parallel universes in fiction,Fiction",
    pages: 442,
    cover:
      "",
  }
];

Array.prototype.addBookToLibrary = function (book) {
  console.log(this);
  this.push(book)
};

Array.prototype.removeBookFromLibrary = function (book) {  
  return this.filter(el=>el!=book)
};



export default myLibrary;
