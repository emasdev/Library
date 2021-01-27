let myLibrary = [
  {
    title: "Fight club",
    author: "Chuck Palahniuk",
    genre: "psychology",
    src:
      "https://http2.mlstatic.com/D_NQ_NP_2X_961845-MLM43604844141_092020-F.webp",
  },
  {
    title: "1Q84",
    author: "Haruki Murakami",
    genre: " Parallel universes in fiction,Fiction",
    src:
      "https://http2.mlstatic.com/D_NQ_NP_2X_961845-MLM43604844141_092020-F.webp",
  },
];

Array.prototype.addBookToLibrary = function (book) {
  this.push(book);
  console.log(this);
};

export default myLibrary;
