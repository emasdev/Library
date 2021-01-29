export default function Book(
  title,
  author,
  genre,
  pages,
  readPages = 0,
  cover,
  isRead = false,
  favorite = false,
) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.readPages = readPages;
  this.cover = cover;
  this.isRead = isRead;
  this.favorite = favorite;

  this.changeStatus = function changeStatus(status) {
    this.isRead = status;
    this.readPages = this.pages;
  };

  this.isFavorite = function isFavorite(isFavorite) {
    this.favorite = isFavorite;
  };

  this.createCard = function createCard() {
    const randomId = Math.floor(Math.random() * (10000 - 10) + 10);
    const toogleHTML = `
    <div class="w-full py-2">
        <label 
          for="${this.title}${randomId}-id"
          class="flex items-center cursor-pointer"
        >
         
          <div class="relative">
            <input id="${
  this.title
}${randomId}-id" type="checkbox" class="toggle-checkbox hidden" ${
  this.isRead && 'checked'
}/>
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
            ${this.isRead ? 'Already read' : 'Not finished'}
          </div>
        </label>
    </div>
    `;

    const article = `<div class="flex items-center justify-center">
      <div class="max-w-sm w-full py-6 px-3">
        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
            <div id='cover' class="bg-cover bg-center h-56 p-4" style="background-image: url(${
  this.cover
})">
            <div class="flex justify-end toggle-favorite">
                <img src="./img/heart-off.png" class="bg-gray-300 rounded-full ${
  this.favorite && 'hidden'
} toggle-favorite-off">
                <img src="./img/heart-on.png" class="bg-gray-300 rounded-full ${
  !this.favorite && 'hidden'
} toggle-favorite-on">
            </div>
            </div>
            <div class="p-4">
                <p class="uppercase tracking-wide text-sm font-bold text-gray-700">${
  this.author
}</p>
                <p class="text-3xl text-gray-900">${this.title}</p>
                <p class="text-gray-700">Read pages: <span class="read-pages">${
  this.isRead ? this.pages : this.readPages
}</span> / ${this.pages}</p>
            </div>
            <div class="flex p-4 border-t border-gray-300 text-gray-700 h-20">
                <p>${this.genre}</p>
                
            </div>
            <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                ${toogleHTML}
                <div class="flex justify-end items-center pt-2">
                  <button class="remove-btn hover:bg-red-700 uppercase p-3 flex items-center bg-red-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 ">
                    <svg width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" style="transform: rotate(360deg);"><path d="M12 12h2v12h-2z" fill="currentColor"></path><path d="M18 12h2v12h-2z" fill="currentColor"></path><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path><path d="M12 2h8v2h-8z" fill="currentColor"></path></svg>
                  </button> 
                </div>
            </div>
        </div>
      </div>
    </div>`;

    return article;
  };
}
