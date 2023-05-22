function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((books) => renderBooks(books));  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks, fetchDogs);

function fetchDogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((resp) => resp.json())
  .then((image) => renderBooks(image));  
}

function renderImages(images) {
  const main = document.querySelector('main');
  images.forEach(pic => {
    const img = document.createElement('img');
    img.innerHTML = pic.random;
    main.appendChild(img);
  })
}