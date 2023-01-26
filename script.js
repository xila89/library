
let myLibrary = [
    {
    "title": "The Eye of the World",
    "author": "Robert Jordan",
    "pages" : "782",
    "status": "unread",
    "rating" : "N/A"
},
{
    "title": "Divergent",
    "author": "Veronica Roth",
    "pages": "487",
    "status": "read",
    "rating": "4/5" 
}
]; 

class Book {
    constructor(title, author, pages, status, rating) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.status = status;
            this.rating = rating; 
        }
}

// looping through array //

for (let i = 0; i < myLibrary.length; i++) {
    const bookListing = myLibrary[i];
    console.log(bookListing)
}