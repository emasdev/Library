export function renderBooks(arr, parentElement) {
  arr.forEach((book) => {
    let bookCard = createBook(book);

    let editBtn = bookCard.getElementsByTagName("button")[0];
    let removeBtn = bookCard.getElementsByTagName("button")[1];
    let toogle = bookCard.getElementsByClassName("toggle-checkbox")[0];
    let toogleLabel = bookCard.getElementsByClassName("toggle-status")[0];

    toogle.addEventListener("change", () => {
      toogle.checked ? toogleLabel.innerHTML = "Already read" : toogleLabel.innerHTML = "Not finished";
      book.changeStatus(toogle.checked);
      renderBooksInfo(arr, document.getElementsByTagName("aside")[0]);
    });

    removeBtn.addEventListener("click", () => {
      arr = arr.removeBookFromLibrary(book);
      document.getElementById("bookTable").innerHTML = "";
      renderBooks(arr, document.getElementById("bookTable"));
      renderBooksInfo(arr, document.getElementsByTagName("aside")[0]);
    });

    parentElement.appendChild(bookCard);
  });
  console.log(arr);
}

export function renderBooksInfo(books, domElement) {
  let finishedBooks = books.filter(item =>item.isRead).length;
  domElement.innerHTML = "<h3 class='text-center'>Information</h3>";
  domElement.innerHTML += "<hr>";
  domElement.innerHTML += '<div class="flex justify-between px-4 py-2"><p>Books</p><p>' + books.length + '</p></div>';
  domElement.innerHTML += '<div class="flex justify-between px-4 py-2"><p>Completed Books</p><p> '+finishedBooks+' </p></div>'; 
}

function createBook(book) {
  let card = document.createElement("article");
 
  card.innerHTML = book.createCard()

  return card;
}
