let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];

// addBook, which will take title, author, and ID as inputs. It will create a new book object and add it to the libraryBooks if not exists. addBook should return the newly created book.

function addBook(title, author, ID) {
    const bookExists = libraryBooks.find(b => b.title === title && b.author === author && b.ID === ID);
    if (bookExists) {
        console.log("Book already exists!");
        return null;
    }
    let book = { title, author, ID };
    libraryBooks.push(book);
    console.log("Added a book.");
    return book;
}

// getTitles, which will return all the book titles (string array). The array should be sorted alphabetically.
function getTitles() {
    const titles = libraryBooks.map(book => book.title).sort();
    return titles;
}

// findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in the title and return books (object array). The books should be sorted by ID.
function findBooks(titleKeyword) {
    return libraryBooks
        .filter(b => b.title.toLowerCase().includes(titleKeyword.toLowerCase()))
        .sort((b1, b2) => b1.ID - b2.ID);
}

addBook("Two things", "Seuss", 1000);
addBook("Two siblings", "Seuss", 1000);
addBook("Two things", "Seuss", 1000);
addBook("a", "Seuss", 1000);
addBook("b", "Seuss", 1000);
addBook("c", "Seuss", 1000);
console.log(libraryBooks);
console.log("Book Titles \n" + getTitles());
let titleKeyword = "Things";
let books = findBooks(titleKeyword);
console.log(`Searching for books title like ${titleKeyword}`)
books.forEach(b => console.log(b.title,b.author,b.ID));
titleKeyword = "The Road Ahead";
books = findBooks(titleKeyword);
console.log(`Searching for books title like ${titleKeyword}`)
books.forEach(b => console.log(b.title,b.author,b.ID));