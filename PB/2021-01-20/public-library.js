
const BOOKS_IN_SHELVES_MAX = 5;
const BOOKS_IN_SHELVES_MIN = 0;


class Library {
    shelves = []
    constructor(libraryName) {
        this.libraryName = libraryName;
    }

    addShelf(shelf) {
        if (!shelf.assignLibrary(this)) {
            console.log(`The shelf ${shelf.shelfCode} already belongs to library ${shelf.library.libraryName} and therefore cannot be assigned to ${this.libraryName}`);
            return;
        }

        this.shelves.push(shelf);
    }

    burnBooksPublishedBefore(year) {
        for (var shelf of this.shelves) {
            shelf.burnBooksPublishedBefore(year);
        }
    }

    /**
     * Returns an array of books.
     * If there no books matching the query, then it
     * returns an empty array.
     */
    getBooksOfAuthor(author) {
        if (author instanceof String || typeof author === 'string')
            return this.getBooksOfAuthorLastName(author);

        if (!(author instanceof Author))
            throw new Error(`Parameter must be of type Author`);

        var returnValue = [];

        for (var shelf of this.shelves) {
            for (var book of shelf.books) {
                
                if (book.author === author) {
                    returnValue.push(book);
                }
            }
        }

        return returnValue;
    }

    getBooksOfAuthorLastName(authorLastName) {
        var returnValue = [];

        for (var shelf of this.shelves) {
            for (var book of shelf.books) {
                
                if (book.author.lastName === authorLastName) {
                    returnValue.push(book);
                }
            }
        }

        return returnValue;
    }

}

class Shelf {
    library = null;

    constructor(shelfCode) {
        this.shelfCode = shelfCode;
        this.books = [];
    }

    assignLibrary(library) {
        if (this.library != null) {
            // a library has already been assigned
            return false;
        }

        this.library = library;
        return true;

    }

    addBook(book) {
        if (this.books.length >= BOOKS_IN_SHELVES_MAX) {
            console.log("This shelf already has max books");
            return;
        }

        if (this.hasBook(book)) {
            console.log("This book is already present");
            return;
        }

        this.books.push(book);
    }

    burnBooksPublishedBefore(year) {

        for (var i = 0; i < this.books.length; i++) {
            var book = this.books[i];

            if (book.publishYear <= year) {
                var index = this.books.indexOf(book);
                this.books.splice(index, 1);
                i--;
            }
        }
    }

    displayBooks() {
        console.log("---------------------------------------------");
        console.log(`The shelf ${this.shelfCode} has ${this.books.length} books`);
        console.log(this.books);
    }

    moveToOtherShelf(book, otherShelf) {
        if (!this.hasBook(book)) {
            console.log(`The book ${book.title} is not present in the shelf ${this.shelfCode}`);
            return;
        }

        // you can only move to shelves that belong to the same library
        if (this.library !== otherShelf.library) {
            console.log("The two shelves belong to different libraries");
            return;
        }
        
        // remove the book from the books array
        var indexToRemove = this.books.indexOf(book);
        this.books.splice(indexToRemove, 1);

        // add the book to the other shelf
        otherShelf.addBook(book);
    }

    /**
     * In the future, when we see 'passing filter functions' as parameters,
     * you would have one single method for all cases... E.g:
     * 
     * moveToOtherShelf(otherShelf, condition)
     */
    moveToOtherShelfIfMoreThanXPages(otherShelf, pages) {
        // we go through all of this, instead of simply moving 
        // books from one shelf to the other, becasue we learned
        // that we should not delete elements from an array that we are iterating over.

        // create an empty temporary array where to store the books that we will later move
        var booksToMove = [];
        
        // determine what books need to be moved
        for (var book of this.books) {
            console.log(`Iterating book ${book.author}`);
            if (book.pages > pages) {
                // if the book has more than X pages, place it in the array
                // so it will be later moved
                booksToMove.push(book);
            }
        }

        // finally iterate over the temp array, and move the books
        // using the proper function
        for (var book of booksToMove) {
            this.moveToOtherShelf(book, otherShelf);
        }
    }

    hasBook(book) {
        return this.books.indexOf(book) >= 0;
    }

}

class Author {
    constructor(firstName, lastName, age, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
    }
}

class Book {    
    constructor(pages, author, title, publishYear) {
        this.pages = pages;
        this.author = author;
        this.title = title;
        this.publishYear = publishYear;
    }
}


// ----------------------------------------------------------------------------------

var author1 = new Author("Jack", "John", 87, "Nordhausen");
var author2 = new Author("Uknown", "Auhtor", 17, "Erfurt");
var author3 = new Author("Jackie", "Chan", 17, "Leipzig");

var book1 = new Book(344, author1, "Tales of code", 1995);
var book11 = new Book(344, author1, "Tales of code", 1942);

var book2 = new Book(324, author1, "Book 2e", 1995);
var book3 = new Book(14, author2, "Code for dummies", 1915);
var book4 = new Book(62, author2, "Book 4", 1925);
var book5 = new Book(3213214, author3, "How to learn programming", 1971);

var shelf1 = new Shelf("Shelf-1");
var shelf2 = new Shelf("Shelf-2");

var library1 = new Library("State Library");
var library2 = new Library("Private Library");

library1.addShelf(shelf1);
library1.addShelf(shelf2);

var shelf3 = new Shelf("Shelf-3");
library2.addShelf(shelf3);

shelf1.addBook(book1);
shelf1.addBook(book11);
shelf1.addBook(book3);

// shelf1.displayBooks();
// shelf2.displayBooks();

// shelf1.moveToOtherShelf(book11, shelf3);

// shelf1.displayBooks();
// shelf2.displayBooks();

// library1.burnBooksPublishedBefore(2005);
// console.log("After having burned the books");
// shelf1.displayBooks();
// shelf2.displayBooks();

// console.log(library1.getBooksOfAuthor(author1));
// console.log(library1.getBooksOfAuthor("John"));

shelf1.moveToOtherShelfIfMoreThanXPages(shelf2, 14);

shelf1.displayBooks();
shelf2.displayBooks();