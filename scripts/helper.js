export function renderBooks(arr, parentElement) {
  arr.forEach((book) => {
    let bookCard = createBook(book);

    let editBtn = bookCard.getElementsByTagName("button")[0];
    let removeBtn = bookCard.getElementsByTagName("button")[1];
    let toogle = bookCard.getElementsByClassName("toggle-checkbox")[0];
    let toogleLabel = bookCard.getElementsByClassName("toggle-status")[0];
    let toogleFavorite = bookCard.getElementsByClassName("toggle-favorite")[0];
    let toogleFavoriteOn = bookCard.getElementsByClassName("toggle-favorite-on")[0];
    let toogleFavoriteOff = bookCard.getElementsByClassName("toggle-favorite-off")[0];

    toogle.addEventListener("change", () => {
      toogle.checked
        ? (toogleLabel.innerHTML = "Already read")
        : (toogleLabel.innerHTML = "Not finished");
      book.changeStatus(toogle.checked);

      let finishedBooks = arr.filter((item) => item.isRead).length;
      document.getElementById("info-finished").innerHTML = finishedBooks;
    });

    toogleFavorite.addEventListener("click", () => {
      if(toogleFavoriteOn.classList.contains('hidden')){
        toogleFavoriteOn.classList.remove('hidden');
        toogleFavoriteOff.classList.add('hidden');
      } else {
        toogleFavoriteOn.classList.add('hidden');
        toogleFavoriteOff.classList.remove('hidden');
      }
    })

    removeBtn.addEventListener("click", () => {
      arr = arr.removeBookFromLibrary(book);
      document.getElementById("bookTable").innerHTML = "";
      renderBooks(arr, document.getElementById("bookTable"));
      renderBooksInfo(arr);
    });

    parentElement.appendChild(bookCard);
  });
}

export function renderBooksInfo(books) {
  let finishedBooks = books.filter((item) => item.isRead).length;
  document.getElementById("info-total").innerHTML = books.length;
  document.getElementById("info-finished").innerHTML = finishedBooks;
}

function createBook(book) {
  let card = document.createElement("article");

  card.innerHTML = book.createCard();

  return card;
}
