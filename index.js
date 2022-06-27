const theForm = document.querySelector(".input-form");
const titleField = theForm.elements.title;
const authorField = theForm.elements.author;

// local storage 

theForm.addEventListener('input', () =>{
    const theInputs = {
        title: titleField.value,
        author: authorField.value,
    }
    const data = JSON.stringify(theInputs);
    localStorage.setItem('data',data)
})


function reTakeData(){
    if(localStorage.getItem('data')){
        const fullData = JSON.parse(localStorage.getItem('data')); //parse to divide the object
        titleField.value = fullData.title;
        authorField.value = fullData.author;
    }
}

reTakeData();



const bookTemplate = ` <h4 class='the-title'></h4>
<h4 class='the-author'></h4>
<button class="remove-button">Remove</button>
<hr>`

// the collection of books 

let booksCollection = JSON.parse(localStorage.getItem('books')) || [];

function addNewBook(titleName, authorName){
    booksCollection.push(
       {title: titleName,
        author:authorName}
    )
    localStorage.setItem('books', JSON.stringify(booksCollection));

    forEach((book, title) =>{
        bookList.innerHTML += bookTemplate;
        bookTemplate.elements.the-title.innerHTML = titleName;
        bookTemplate.elements.the-author.innerHTML = authorName;
    })
}

const addButton = document.querySelector(".add-button");

addButton.addEventListener('click', () =>{
    addNewBook( titleField.value,  authorField.value);
})

function removeBook (index_number) {
    booksCollection.splice(index_number, 1);
    localStorage.setItem('books', JSON.stringify(booksCollection));
}

const removeButton = document.querySelector(".remove-button");

removeButton.addEventListener('click', () =>{
    removeBook(e);
})

function getLocalStorage (){
    const booksCollection = JSON.parse(localStorage.getItem('books'));
    return booksCollection;
}

function renderBooks(){
    const bookList = document.querySelector(".books-section");
    getLocalStorage().forEach((book) => {
        bookList.innerHTML += bookTemplate;
    })
}


