export function renderBooks(arr, parentElement) {
  arr.forEach((book) => {
    let bookCard = createBook(book);

    let editBtn = bookCard.getElementsByTagName("button")[0];
    let removeBtn = bookCard.getElementsByTagName("button")[1];
    let toogle = bookCard.getElementsByClassName("toggle-checkbox")[0];
    let toogleLabel = bookCard.getElementsByClassName("toggle-status")[0];

    toogle.addEventListener("change", () => {
      toogle.checked ? toogleLabel.innerHTML = "Already read" : toogleLabel.innerHTML = "Not finished";
    });

    removeBtn.addEventListener("click", () => {
      arr = arr.removeBookFromLibrary(book);
      document.getElementById("bookTable").innerHTML = "";
      renderBooks(arr, document.getElementById("bookTable"));
    });

    parentElement.appendChild(bookCard);
  });
}

function createBook(book) {
  let card = document.createElement("article");
 
  card.innerHTML = book.createCard()

  return card;
}
