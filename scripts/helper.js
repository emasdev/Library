import Book from './book.js';
function createBook(book) {
  const card = document.createElement('article');
  card.innerHTML = book.createCard();
  return card;
}

export function getLibraryFromLocalStorage(){
  let myLibrary = [];
  JSON.parse(localStorage.getItem('myLibrary')).forEach((e) => {
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
  return myLibrary
}

export function renderBooksInfo(books) {
  const finishedBooks = books.filter((item) => item.isRead).length;
  document.getElementById('info-total').innerHTML = books.length;
  document.getElementById('info-finished').innerHTML = finishedBooks;
}

export function renderFavoriteInfo(books) {
  const favoriteBooks = books.filter((item) => item.favorite);
  const list = document.getElementById('favorite_list');
  list.innerHTML = '';
  favoriteBooks.forEach((el, i) => {
    const likedBook = document.createElement('li');
    likedBook.classList.add('py-2');
    likedBook.innerText = `${i + 1}. ${el.title}`;
    list.appendChild(likedBook);
  });
}

export function renderBooks(arr) {
  const bookTable = document.getElementById('bookTable');
  bookTable.innerHTML = '';
  arr.forEach((book) => {
    const bookCard = createBook(book);

    const removeBtn = bookCard.getElementsByTagName('button')[0];
    const toogle = bookCard.getElementsByClassName('toggle-checkbox')[0];
    const toogleLabel = bookCard.getElementsByClassName('toggle-status')[0];
    const toogleFavorite = bookCard.getElementsByClassName('toggle-favorite')[0];
    const toogleFavoriteOn = bookCard.getElementsByClassName('toggle-favorite-on')[0];
    const toogleFavoriteOff = bookCard.getElementsByClassName('toggle-favorite-off')[0];
    const readPagesLabel = bookCard.getElementsByClassName('read-pages')[0];

    toogle.addEventListener('change', () => {
      if (toogle.checked) {
        toogleLabel.innerHTML = 'Already read';
        readPagesLabel.innerHTML = book.pages;
      } else {
        toogleLabel.innerHTML = 'Not finished';
        readPagesLabel.innerHTML = '0';
      }

      book.changeStatus(toogle.checked);

      const finishedBooks = arr.filter((item) => item.isRead).length;
      document.getElementById('info-finished').innerHTML = finishedBooks;
      localStorage.setItem('myLibrary', JSON.stringify(arr));
    });

    toogleFavorite.addEventListener('click', () => {
      if (toogleFavoriteOn.classList.contains('hidden')) {
        toogleFavoriteOn.classList.remove('hidden');
        toogleFavoriteOff.classList.add('hidden');
        book.isFavorite(true);
      } else {
        toogleFavoriteOn.classList.add('hidden');
        toogleFavoriteOff.classList.remove('hidden');
        book.isFavorite(false);
      }
      localStorage.setItem('myLibrary', JSON.stringify(arr));
      renderFavoriteInfo(arr);
    });

    removeBtn.addEventListener('click', () => {

      arr = arr.filter((el) => el !== book);
      document.getElementById('bookTable').innerHTML = '';
      renderBooks(arr);
      renderBooksInfo(arr);
      localStorage.setItem('myLibrary', JSON.stringify(arr));
    });

    document.getElementById('bookTable').appendChild(bookCard);
  });
}
