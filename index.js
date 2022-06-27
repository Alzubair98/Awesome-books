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



// the collection of books 

booksCollection = [
    firstBook = {
        title:'whatever',
        author:'whoever',
    },
]


function addNewBook(titleName, authorName){
    booksCollection.push(
       {title: titleName,
        author:authorName}
    )
}