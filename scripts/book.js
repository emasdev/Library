export default function Book(title, author, genre, pages,read_pages=0, cover, isRead=false,favorite=false) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read_pages = read_pages;
  this.cover = cover;
  this.isRead = isRead;
  this.favorite = favorite

  this.changeStatus = function(status) {
    this.isRead = status;
    this.read_pages = this.pages;
  }

  this.isFavorite = function(isFavorite){
    this.favorite = isFavorite;
  }

  this.createCard = function () {
  
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
            <div id='cover' class="bg-cover bg-center h-56 p-4" style="background-image: url(${this.cover})">
            <div class="flex justify-end toggle-favorite">
                <img src="./img/heart-off.png" class="bg-gray-300 rounded-full ${this.favorite && 'hidden'} toggle-favorite-off">
                <img src="./img/heart-on.png" class="bg-gray-300 rounded-full ${!this.favorite && 'hidden'} toggle-favorite-on">
            </div>
            </div>
            <div class="p-4">
                <p class="uppercase tracking-wide text-sm font-bold text-gray-700">${this.author}</p>
                <p class="text-3xl text-gray-900">${this.title}</p>
                <p class="text-gray-700">Read pages: <span class="read-pages">${this.isRead ? this.pages : this.read_pages}</span> / ${this.pages}</p>
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

