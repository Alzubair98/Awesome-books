const theForm = document.querySelector('.input-form');
const titleField = theForm.title;
const authorField = theForm.author;
const booksContiner = document.querySelector('.books-section');
const buttonAdd = document.querySelector('.add-button');

// get the list of box from the localStorage
const newbook = JSON.parse(localStorage.getItem('books')) || [];

// ading new book to the list function

class Books {
    static addNewBook = (title, author) => {
    newbook.push(
      {
        title,
        author,
      },
    );

    localStorage.setItem('books', JSON.stringify(newbook));

    return { title, author };
  }

  static createBook = ({ title, author }, index) => {
    const divforbook = document.createElement('div');
    const bookName = document.createElement('h2');
    const bookAuthor = document.createElement('h2');
    const removeButton = document.createElement('button');
  
    //adding classes to items 
    bookName.classList.add("title-author");
    bookAuthor.classList.add("title-author");
    removeButton.classList.add("remove-btn")

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

    divforbook.append(bookName, bookAuthor, removeButton);

    booksContiner.appendChild(divforbook);
  }

  static createHTML = () => {
    newbook.forEach(createBook);
  }
  
  static addEventListeners = () => {
      buttonAdd.addEventListener('click', (e)=>{
        e.preventDefault();
    
        const thenewbook = this.addNewBook(titleField.value,authorField.value);
    
        this.createBook(thenewbook);
    
        titleField.value ='';
        authorField.value = '';
    });
  }
  
  










  // static theForm.onsubmit = (event) => {
  //   event.preventDefault();

  //   const thenewbook = addNewBook(titleField.value, authorField.value);

  //   createBook(thenewbook);
};

Books.addEventListeners();



// another way of adding books

// const buttonAdd = document.querySelector('.add-button');

// buttonAdd.addEventListener('click', (e)=>{
//     e.preventDefault();

//     const thenewbook = addNewBook(titleField.value,authorField.value);

//     createBook(thenewbook);

//     titleField.value ='';
//     authorField.value = '';
// });


