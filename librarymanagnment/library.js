var library = [
    {
        title: 'The Digital Fortress',
        author: 'Dan Brown',
        availability: true,
        holder: ''
    },
    {
        title: 'The Davinci Code',
        author: 'Dan Brown',
        availability: false,
        holder: 'John Smith'
    },
    {
        title: 'Long Eagle',
        author: 'Anonymous',
        availability: true,
        holder: ''
    },
    {
        title: 'Atomic Habits',
        author: 'James Clair',
        availability: false,
        holder: 'Aline'
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        availability: true,
        holder: ''
    },
];
//this function is meant to add a book to a library array and log the length of the library array before and after adding the book.
 const addBooks = (book) => {
   console.log(library.length);
     library.push(book);
     console.log(library.length);
 };

//this function is meant to list all the available books in the library array and log them to the console.
const listAllAvailableBooks = () => {
     var available = library.filter(book => book.availability === true);
     console.log(available);
 }
 listAllAvailableBooks();

const borrow = (bookName, holder) => { 
    //Check whether the book is available 
    var availableBook = library.find(book => book.title === bookName && book.availability === true);
    console.log(availableBook);
    if (!availableBook) {
        console.log('That book is not available');
    //    return;
    }

    var theAvailableBook = {};
    library.forEach(book => {
        if (book.title === bookName && book.availability === true) {
            theAvailableBook = book;
            book.availability = false;
            book.holder = holder;
            console.log("The book is available for borrowing!");
            return;
        }
    });
    

    console.log(theAvailableBook);

    if (theAvailableBook.availability || theAvailableBook.availability === false) {
        console.log(library);
    } else {
        console.log('That book is not available');
    }
}

const returnBook = () => {

}

borrow('Atomic Habits', 'John Smith');