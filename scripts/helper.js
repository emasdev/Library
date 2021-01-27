export default function createElement(tag,text,parrent){
  let el =document.createElement(tag);
  el.innerText = text;
  parrent.appendChild(el)
  return el
}

