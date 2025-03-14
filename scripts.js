// initialize the library array
let library = [];
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


let test = new Book('test','test',24,'yes');

// take the created book objects and push them into a Library array
function addBookToLibrary(bookObj) {
    library.push(bookObj);
}
// make a function that displays the books on the page, with cards
// have a button that will bring up a form and allow a user to add a new book to the library array
// have another button on the book cards that removes the book from the library array
// and one more button to change the read property on the book

