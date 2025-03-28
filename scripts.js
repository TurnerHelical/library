// initialize the library array
let library = [];

const bookContainer = document.querySelector('.bookContainer')
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


let test = new Book('test1','test',23,'yes','https://gratisography.com/wp-content/uploads/2025/03/gratisography-cruising-cat-800x525.jpg');
let test1 = new Book('test2','test',24,'no',);

// take the created book objects and push them into a Library array
function addBookToLibrary(bookObj) {
    library.push(bookObj);
}
// make a function that displays the books on the page, with cards
function addBookCardToPage(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    const bookImage = document.createElement('img');
    bookImage.src = ((book.image === undefined) ? './images/libraryImage.jpg' : book.image );
    bookCard.appendChild(bookImage);
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = 'By: ' + book.author;
    const bookPages = document.createElement('p');
    bookPages.textContent = 'Pages: ' + book.pages;
    const bookRead = document.createElement('p');
    bookRead.textContent = 'Finished Reading: '+ book.read;
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
    buttonContainer.appendChild(deleteButton);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(buttonContainer);
    bookContainer.appendChild(bookCard);
}
// have a button that will bring up a form and allow a user to add a new book to the library array
function addBookForm() {
    const addForm = document.createElement('div');
    addForm.id = 'formModal';
    
}
// have another button on the book cards that removes the book from the library array
// and one more button to change the read property on the book

