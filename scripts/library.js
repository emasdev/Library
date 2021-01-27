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
      "https://http2.mlstatic.com/D_NQ_NP_2X_961845-MLM43604844141_092020-F.webp",
  },
];

// export default function Library(books) {
//   this.books = books;
// }

Array.prototype.addBookToLibrary = function (book) {
  this.push(book);
  console.log(this);
};

export default myLibrary;
