import Book from "./book.js";

let myLibrary = [
  new Book(
    "Fight club",
    "Chuck Palahniuk",
    "psychology",
    128,
    0,
    "https://http2.mlstatic.com/D_NQ_NP_2X_961845-MLM43604844141_092020-F.webp",
    false
  ),

  new Book(
    "1Q84",
    "Haruki Murakami",
    " Parallel universes in fiction,Fiction",
    442,
    0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
    true
  ),

  new Book(
    "dddddd",
    "Haruki Murakami",
    " Parallel universes in fiction,Fiction",
    442,
    0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBVTmWmQDY05iDPuCQSTZDN7EN6Xr_P5jLg&usqp=CAU",
    true
  ),
];

Array.prototype.addBookToLibrary = function (book) {
  this.push(book);
};

Array.prototype.removeBookFromLibrary = function (book) {
  return this.filter((el) => el != book);
};

export default myLibrary;
