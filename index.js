function fetchBooks() {
  return fetch ("https://anapioficeandfire.com/api/books")
    .then (resp => resp.json())
    .then (data => renderBooks(data));
}

function renderBooks(data) {
  for (const key in data) {
    return (data[key]["name"]);
  }
}