export function createElement(tag,text,parrent){
  let el =document.createElement(tag);
  el.innerText = text;
  parrent.appendChild(el)
  return el
}

export function renderBooks(arr,domElement){
  arr.forEach(book=>{

    let title = createElement('li',book.title,domElement);
    let author = createElement('li',book.author,domElement)
    let genre = createElement('li',book.genre,domElement)
    let pages = createElement('li',book.pages,domElement)
    let cover = createElement('li',book.cover,domElement)
  
    let separator = document.createElement('hr')
    domElement.appendChild(separator)
  })
}

