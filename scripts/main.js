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
  "flex-1",
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
info.classList.add("bg-red-400", "border-l-2", "w-1/4", "pt-20");
info.innerHTML = "<h3 class='text-center'>Information</h3>";
info.innerHTML += "<hr>";
info.innerHTML +=
  '<div class="flex justify-between px-4 py-2"><p>Books</p><p id="info-total"></p></div>';
info.innerHTML +=
  '<div class="flex justify-between px-4 py-2"><p>Completed Books</p><p id="info-finished"></p></div>';

// -----------------

library.appendChild(bookTable);
library.appendChild(info);
// ----------------

/* header */
let addBookModal = document.getElementById("add-book-modal");

/* Render books */

renderBooks(myLibrary, bookTable);
renderBooksInfo(myLibrary, info);

/* Add book to library */

addBookModal.addEventListener("click", function (e) {
  modal.classList.remove("hidden");
});
