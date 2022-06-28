const theForm = document.querySelector('.input-form');
const titleField = theForm.title;
const authorField = theForm.author;
const booksContiner = document.querySelector('.books-section');

// get the list of box from the localStorage
const newbook = JSON.parse(localStorage.getItem('books')) || [];

// ading new book to the list function
function addNewBook(title, author) {
  newbook.push(
    {
      title,
      author,
    },
  );

  localStorage.setItem('books', JSON.stringify(newbook));

  return { title, author };
}

function createBook({ title, author }, index) {
  const divforbook = document.createElement('div');
  const bookName = document.createElement('h2');
  const bookAuthor = document.createElement('h2');
  const removeButton = document.createElement('button');
  const hr = document.createElement('hr');

  divforbook.classList.add('book-div');
  // elements contects
  removeButton.innerHTML = 'Remove';
  bookName.innerHTML = title;
  bookAuthor.innerHTML = author;

  removeButton.addEventListener('click', (event) => {
    event.target.parentElement.remove();
    newbook.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(newbook));
  });

  divforbook.append(bookName, bookAuthor, removeButton, hr);

  booksContiner.appendChild(divforbook);
}

newbook.forEach(createBook);

theForm.onsubmit = (event) => {
  event.preventDefault();

  const thenewbook = addNewBook(titleField.value, authorField.value);

  createBook(thenewbook);
};

// another way of adding books

// const buttonAdd = document.querySelector('.add-button');

// buttonAdd.addEventListener('click', (e)=>{
//     e.preventDefault();

//     addNewBook(titleField.value,authorField.value);

//     createBook(addNewBook(titleField.value,authorField.value));

//     titleField.value ='';
//     authorField.value = '';
// });
