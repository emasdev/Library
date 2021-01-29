import myLibrary from "./library.js";
import modal from "./modal.js";
import { renderBooks, renderBooksInfo } from "./helper.js";

/* library */
const library = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(library);
library.classList.add("flex", "flex-row", "min-h-full");

/* book table */

const bookTable = document.createElement("div");
bookTable.id = "bookTable";
bookTable.classList.add(
  "bg-gray-200",
  "w-3/4",
  "pt-20",
  "grid",
  "md:grid-cols-3",
  "grid-col-2",
  "row-span-3"
);

// ----------

/* aside component */

const info = document.createElement("aside");
info.id = "info";
info.classList.add(
  'bg-gray-800',
  'text-gray-400',
  "fixed",
  "top-0",
  "bottom-0",
  "right-0",
  "border-l-2",
  "w-1/4",
  "pt-16",
  "px-6",
);

info.innerHTML = `
  <h3 class='text-3xl px-4 text-center py-5 border-b-2 mb-10'>All books</h3>
  <div class='shadow-2xl mb-6'>
    <h4 class='text-2xl text-center pb-4'>Information</h4>
    <div class="flex justify-between px-4 py-2"><p>Books</p><p id="info-total"></p></div>
    <div class="flex justify-between px-4 py-2"><p>Completed Books</p><p id="info-finished"></p></div>
  </div>
  <h4 class='text-2xl text-center pb-2'>Favorite books</h4>
  <div class='absolute flex justify-center left-0 right-0 bottom-0 mb-10'>
    <button class='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none'>Delete all books</button>
  </div>
`;

library.appendChild(bookTable);
library.appendChild(info);
// ----------------

/* header */
let addBookModal = document.getElementById("add-book-modal");

/* Render books */

renderBooks(myLibrary, bookTable);
renderBooksInfo(myLibrary);

/* Add book to library */

addBookModal.addEventListener("click", function (e) {
  modal.classList.remove("hidden");
});
