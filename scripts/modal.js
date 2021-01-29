import myLibrary from './library.js';
import Book from './book.js';
import { renderBooks, renderBooksInfo, renderFavoriteInfo } from './helper.js';

const modal = document.getElementById('modal');
const modalCancelButton = modal.getElementsByTagName('button')[1];
const modalAddButton = modal.getElementsByTagName('button')[0];

const title = document.getElementById('title');
const author = document.getElementById('author');
const genre = document.getElementById('genre');
const pages = document.getElementById('pages');
const readPages = document.getElementById('readPages');
const cover = document.getElementById('cover');
const isRead = document.getElementById('isRead');

modalAddButton.addEventListener('click', () => {
  const book = new Book(
    title.value,
    author.value,
    genre.value,
    pages.value,
    readPages.value,
    cover.value === ''
      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBVTmWmQDY05iDPuCQSTZDN7EN6Xr_P5jLg&usqp=CAU'
      : cover.value,
    isRead.checked,
  );
  myLibrary.push(book);
  renderBooks(myLibrary);
  renderBooksInfo(myLibrary);
  renderFavoriteInfo(myLibrary);
  modal.classList.add('hidden');
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
});

modalCancelButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

export default modal;
