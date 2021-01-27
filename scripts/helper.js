export function createElement(tag,text='',parent){
  let el =document.createElement(tag);
  console.log(el);
  el.innerText = text;
  parent.appendChild(el)
  return el
}

export function renderBooks(arr,domElement){
  arr.forEach(book=>{
    console.log(book);

    let bookCard = createBook(book)
    domElement.appendChild(bookCard)
    let separator = document.createElement('hr')
    domElement.appendChild(separator)
  })
}

function createBook(book, domElement){

  let card = createElement('li');
  card.classList.add('m-6 border')

  createElement('h3',book.title,card);
  createElement('p',book.author,card);
  createElement('p',book.gender,card);
  createElement('p',book.pages,card);
  return card;
  // createElement('p',book.cover,card);

  // createElement('li',book.author,card);
  // createElement('li',book.genre,card);
  // createElement('li',book.pages,card);
  // createElement('li',book.cover,card);


}

