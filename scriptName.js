class Book {
    constructor(title, author, pages, status) {
        this.title = title; 
        this.author = author; 
        this.pages = Number(pages);
        this.status = false; 
    }
}

const bookCountRead = document.getElementById('books-read');
const bookCountUnread = document.getElementById('books-unread');
const totalBooks = document.getElementById('total-books');
const changeStatus = document.querySelector('changestatus');
const bookForm = document.getElementById('form');
const bookTable = document.querySelector('tbody');


let myLibrary = [
    {title: "Divergent", author: "Veronica Roth", pages: "487", status: true}, 
    {title: "The Eye of the World", author: "Robert Jordan", pages: "782", status: false}
]

//add book to myLibrary array//
bookForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
  
    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pages.value; 
    const readStatus = event.target.status.checked; 
    if (event.target.checked) {
        readStatus === true; 
    }
    let formInput = new Book(title, author, pages, readStatus);
    myLibrary.push(formInput)
    
    console.log(formInput)
    console.log(myLibrary)
    displayBooks(formInput)
    countBooks();
})


  function countBooks() {
    let booksRead = 0;
    let booksUnread = 0;
    let allBooks = myLibrary.length; 
    myLibrary.forEach((Book) => {
        if (Book.status === true) {
            booksRead++
           
        }
        if (Book.status === false) {
            booksUnread++
            
        }
    })
    bookCountUnread.innerHTML = "Books Unread: " + booksUnread;
    totalBooks.innerHTML = "Total Books: " + myLibrary.length; 
    bookCountRead.innerHTML = "Books Read: " + booksRead; 
    console.log(allBooks)
    console.log(booksRead)
    console.log(booksUnread)
  }

  function displayBooks() {
 
    let markup = '';
  
    for (let i = 0; i < myLibrary.length; i++) {
      markup += 
        '<tr>' +
          '<td>' + myLibrary[i].title + '</td>' +
          '<td>' + myLibrary[i].author + '</td>' +
          '<td>' + myLibrary[i].pages + '</td>' +
          '<td><button class="changeStatus">' + (myLibrary[i].status ? 'read' : 'unread') + '</button></td>' +
            '<td><button class="remove" onclick="removeBook(this)">remove</button></td>' + '</tr>';
        '</tr>';
    }
    
    bookTable.innerHTML = markup;
  }
        //change book read status does not update more than once. It will not add a book back to the read status)//
  bookTable.addEventListener('click', (e) => { 
    if (e.target.className === 'changeStatus') {
      let bookRow = e.target.parentNode.parentNode;
      let bookIndex = [...bookTable.children].indexOf(bookRow);
      let book = myLibrary[bookIndex];
      book.status = (book.status === 'read') ? 'unread' : 'read';
      e.target.textContent = book.status;
    }
    countBooks();
  });

  function removeBook(node) { //remove book//
    r=node.parentNode.parentNode; 
    r.parentNode.removeChild(r); 
    countBooks();
}

  displayBooks(); 
  countBooks();