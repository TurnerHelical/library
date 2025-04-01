

const container = document.querySelector('#container');
const bookContainer = document.querySelector('.bookContainer');
const addBook = document.querySelector('#addBook');
let finished = '';
addBook.addEventListener('click', function (e) {
    addBookForm();
});
// create a constructor function to add new books, include title, author, # of pages, and if you've read it, and unique id
function Book(title, author, pages, read, image) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = image;
    // create a function that generates a unique ID for each book and adds it to the book object on creation, can be created with crypto.randomUUID()
    this.id = crypto.randomUUID();
}

// initialize the library array
let library = [];

// take the created book objects and push them into a Library array
function addBookToLibrary(bookObj) {
    library.push(bookObj);
}
// make a function that displays the books on the page, with cards
function addBookCardToPage(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    const bookImage = document.createElement('img');
    
    bookImage.src = ((book.image === undefined || book.image === '') ? './images/libraryImage.jpg' : book.image);
    bookImage.setAttribute('onerror', "this.src='./images/libraryImage.jpg'");
    bookCard.appendChild(bookImage);
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = 'By: ' + book.author;
    const bookPages = document.createElement('p');
    bookPages.textContent = 'Pages: ' + book.pages;
    const bookRead = document.createElement('p');
    bookRead.textContent = 'Finished Reading: ' + book.read;
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'cardButtonContainer';
    const readButton = document.createElement('button');
    readButton.id = 'finishedButton';
    const deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    readButton.textContent = 'Finished it!';
    deleteButton.textContent = 'Delete';
    if (book.read === 'no')
        buttonContainer.appendChild(readButton);
    readButton.addEventListener('click', function (e) {
        book.read = 'yes';
        bookRead.textContent = 'Finished Reading: ' + book.read;
        readButton.remove(this);
    })
    buttonContainer.appendChild(deleteButton);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(buttonContainer);
    bookContainer.appendChild(bookCard);
    deleteButton.addEventListener('click', function (e) {
        library.splice(library.indexOf(this.title), 1);
        bookCard.remove(this);
    })
}

function clearForm() {
    const titleField = document.querySelector('#title');
    const authorField = document.querySelector('#author');
    const pagesField = document.querySelector('#pages');
    const imageField = document.querySelector('#image');
    const haveRead = document.querySelector('#read');
    const notRead = document.querySelector('#notRead');
    titleField.value = '';
    authorField.value = '';
    pagesField.value = '';
    imageField.value = '';
    haveRead.value = '';
    notRead.value = '';
}

function duplicateBook(newBook) {
    if (library.length >= 1) {
        for (let book of library) {
            if (newBook.title === book.title && newBook.author === book.author) {
                closeBookForm();
                alert('Book is already in Library');
                return 'fail';   
            } 
        }

    }
    return newBook;
}

function validateBook(book) {
    const titlePattern = /^[A-Za-z0-9\s\-:,.!?'";()&]{1,50}$/;
    const authorPattern = /^[A-Za-z\s\-'.]{2,50}$/;

    if (!titlePattern.test(book.title)) {
        closeBookForm();
        alert('Book Title contains invalid characters or is too long');
        return 'fail';  

    } else if (!authorPattern.test(book.author)) {
        closeBookForm();
        alert('Author name contains invalid characters or is too long');
        return 'fail';

    } 
}


// have a button that will bring up a form and allow a user to add a new book to the library array
function addBookForm() {
    const modal = document.querySelector('#formContainer');
    const content = document.querySelector('#container');
    modal.classList.remove('modalClose');
    content.classList.add('modalOpen');
}

function closeBookForm() {
    const modal = document.querySelector('#formContainer');
    const content = document.querySelector('#container');
    modal.classList.add('modalClose');
    content.classList.remove('modalOpen');
}
// have another button on the book cards that removes the book from the library array
// Pass the data from the form submit to the object constructor and use that information to add cards to the page
function theOne(finished) {
    const titleField = document.querySelector('#title');
    const authorField = document.querySelector('#author');
    const pagesField = document.querySelector('#pages');
    const imageField = document.querySelector('#image');
    let bookTitle = titleField.value;
    let authorName = authorField.value;
    let pagesNumber = pagesField.value;
    let imageURL = imageField.value
    if (imageField.value === '') {
        imageURL = './images/libraryImage.jpg'
        
    }
    clearForm();
    let newBook = new Book(bookTitle, authorName, pagesNumber, finished, imageURL);
    if (duplicateBook(newBook) === 'fail') {
        return
    } else if (validateBook(newBook) === 'fail') {
        return
    }
    addBookCardToPage(newBook);
    addBookToLibrary(newBook);
}

const haveRead = document.querySelector('#read');
const notRead = document.querySelector('#notRead');
haveRead.addEventListener('change', function (e) {
    return finished = 'yes';
})
notRead.addEventListener('change', function (e) {
    return finished = 'no';
})

const formSubmit = document.querySelector('#formSubmit');
formSubmit.addEventListener('click', function (e) {
    theOne(finished);
    closeBookForm();
});

const cancelButton = document.querySelector('#formCancel');
cancelButton.addEventListener('click', function (e) {
    closeBookForm();
});


