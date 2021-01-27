export function makeElement(tag, text = "", parent) {
  let el = document.createElement(tag);
  console.log(el);
  el.innerText = text;
  parent.appendChild(el);
  return el;
}

export function renderBooks(arr, domElement) {
  arr.forEach((book) => {
    console.log(book);

    let bookCard = createBook(book);
    domElement.appendChild(bookCard);
    let separator = document.createElement("hr");
    domElement.appendChild(separator);
  });
}

function createBook(book, domElement) {
  let card = document.createElement("article");
  card.classList.add("m-6", "border");

  makeElement("h3", book.title, card);
  makeElement("p", book.author, card);
  makeElement("p", book.gender, card);
  makeElement("p", book.pages, card);
  return card;
}
