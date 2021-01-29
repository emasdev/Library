import Book from './book.js';

const defaultData = [
  new Book(
    'Fight club',
    'Chuck Palahniuk',
    'psychology',
    128,
    0,
    'https://http2.mlstatic.com/D_NQ_NP_2X_961845-MLM43604844141_092020-F.webp',
    false,
    false,
  ),

  new Book(
    '1Q84',
    'Haruki Murakami',
    ' Parallel universes in fiction,Fiction',
    442,
    0,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL',
    true,
    true,
  ),

  new Book(
    'dddddd',
    'Haruki Murakami',
    'Parallel universes in fiction,Fiction',
    442,
    0,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBVTmWmQDY05iDPuCQSTZDN7EN6Xr_P5jLg&usqp=CAU',
    true,
    true,
  ),
];

let myLibrary = [];
if (!localStorage.getItem('myLibrary')) {
  localStorage.setItem('myLibrary', JSON.stringify(defaultData));
  myLibrary = defaultData;
} else {
  const myLibraryData = JSON.parse(localStorage.getItem('myLibrary'));
  myLibraryData.forEach((e) => {
    myLibrary.push(
      new Book(
        e.title,
        e.author,
        e.genre,
        e.pages,
        e.read_pages,
        e.cover,
        e.isRead,
        e.favorite,
      ),
    );
  });
}

export default myLibrary;
