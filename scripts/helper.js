export function makeElement(tag, text = "", parent) {
  let el = document.createElement(tag);
  console.log(el);
  el.innerText = text;
  parent.appendChild(el);
  return el;
}

export function renderBooks(arr, domElement) {
  let index = 0;
  arr.forEach((book) => {


    let bookCard = createBook(book);

    console.log(bookCard.children);
    domElement.appendChild(bookCard);
  });
}

function createBook(book) {
  let card = document.createElement("article");
  let imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBVTmWmQDY05iDPuCQSTZDN7EN6Xr_P5jLg&usqp=CAU"
  if(book.cover.length > 0)
    imgsrc = book.cover;
  card.innerHTML = `<div class="flex items-center justify-center min-h-screen">
            <div class="max-w-sm w-full py-6 px-3">
                <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div class="bg-cover bg-center h-56 p-4" style="background-image: url(${imgsrc})">
                        <div class="flex justify-end">
                            <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="uppercase tracking-wide text-sm font-bold text-gray-700">${book.author}</p>
                        <p class="text-3xl text-gray-900">${book.title}</p>
                        <p class="text-gray-700">${book.pages}</p>
                    </div>
                    <div class="flex p-4 border-t border-gray-300 text-gray-700 h-20">
                        <p>${book.genre}</p>
                        
                    </div>
                    <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                        <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Realtor</div>
                        <div class="flex justify-between items-center pt-2">
                            <button>Read</button>
                            <button class="remove-btn">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

  // card.classList.add("m-6", "border",'bg-red-300');

  // makeElement("h3", book.title, card);
  // makeElement("p", book.author, card);
  // makeElement("p", book.gender, card);
  // makeElement("p", book.pages, card);
  return card;
}
