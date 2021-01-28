export default function Book(title, author, genre, pages,read_pages=0, cover='', isRead=false) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read_pages = read_pages;
  this.cover = cover;
  this.isRead = isRead;

  this.changeStatus = function(status) {
    this.isRead = status;
  }

  this.createCard = function () {
    let defaultImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBVTmWmQDY05iDPuCQSTZDN7EN6Xr_P5jLg&usqp=CAU";
    let imgsrc = this.cover.length > 0 ? this.cover : defaultImage;

    let toogleHTML = `
    <div class="w-full py-2">
        <label 
          for="${this.title}-id"
          class="flex items-center cursor-pointer"
        >
         
          <div class="relative">
            <input id="${this.title}-id" type="checkbox" class="toggle-checkbox hidden" ${this.isRead && "checked"}/>
            <div
              class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
            ></div>
            <div
              class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
            ></div>
          </div>
          <div
            class="toggle-status ml-3 text-gray-700 font-medium"
          >
            ${this.isRead ? "Already read" : "Not finished"}
          </div>
        </label>
    </div>
    `

    let article = `<div class="flex items-center justify-center">
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
                <p class="uppercase tracking-wide text-sm font-bold text-gray-700">${this.author}</p>
                <p class="text-3xl text-gray-900">${this.title}</p>
                <p class="text-gray-700">Total pages: ${this.pages}</p>
            </div>
            <div class="flex p-4 border-t border-gray-300 text-gray-700 h-20">
                <p>${this.genre}</p>
                
            </div>
            <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                ${toogleHTML}
                <div class="flex justify-between items-center pt-2">
                    <button>Edit</button>
                    <button class="remove-btn">Remove</button>
                </div>
            </div>
        </div>
      </div>
    </div>`;

    return article;
  };
}

