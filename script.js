//declares Book object//
class Book {
    constructor(booktitle, bookauthor, bookpages, bookstatus) {
            this.title = booktitle;
            this.author = bookauthor;
            this.pages = Number(bookpages);
            this.read = false; 
        }
    }

  
//DOM declarations//
const bookCountRead = document.getElementById('books-read');
const bookCountUnread = document.getElementById('books-unread');
const totalBookCount = document.getElementById('total-books');
const booktable = document.querySelector('tbody');
const editButton = document.querySelector('.changestatus');
  //global variables//
let booksRead = 0;
let booksUnread = 0;
let myLibrary = [
    {title: "Divergent", author: "Veronica Roth", pages: "487", read: true},
    {title: "The Eye of the World", author: "Robert Jordan", pages: "782", read: false}
]; 

//display original books in array//
function displayOriginalBooks() {
    let booksContainer = document.getElementById("tbody");
    let bookHTML = "";
  
    for (let book of myLibrary) {
      bookHTML += `
        <div class="book">
        <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><button class="changeStatus">${book.read ? 'read' : 'unread'}</td>
        </div>
      `;

      if (book.read) {
        booksRead++;
        booksUnread--;
    
      }
      else {
        booksUnread++;
        booksRead--;
      }
    
    }
  
    booktable.innerHTML = bookHTML;
  }
// Function to add a new book to the library
function addBookToLibrary() {
    let title = document.getElementById("bookname").value;
    let author = document.getElementById("bookauthor").value;
    let pages = document.getElementById("bookpages").value;
    let read = document.getElementById("read").checked;
  
    let newBook = { title, author, pages, read };
    myLibrary.push(newBook);
  
    // Only update the UI with the new book
    let booksContainer = document.getElementById("books-container");
    let bookHTML = `
      <div class="book">
      <tr>
        <td>${newBook.title}</td>
        <td>${newBook.author}</td>
        <td>${newBook.pages}</td>
        <td><button class="read">${newBook.read}</td>
      </div>
    `;
    booksContainer.innerHTML += bookHTML;

    if (newBook.read) {
        booksRead++;
        booksUnread--;
    }
    else {
        booksUnread++; 
        booksRead--;
    }
    updateBookCount();
  }
  
  // Call the displayOriginalBooks function
  displayOriginalBooks();
  
function removeBook(node) { //remove book//
    r=node.parentNode.parentNode; 
    r.parentNode.removeChild(r); 
}

function updateBookCount() {
    myLibrary.forEach((Book) => {
       if (Book.read === true) {
        booksRead++; 
       
       }
       else if (Book.read === false) {
        booksUnread++;
   
    
       }}
       )
       bookCountUnread.innerHTML = "Books Unread: " + booksUnread;
       totalBookCount.innerHTML = "Total Books: " + myLibrary.length; 
       bookCountRead.innerHTML = "Books Read: " + booksRead; 
    }
 

    //change book status and update count accordingly// 
    booktable.addEventListener('click', (e) => { 
        if (e.target.getAttribute('class') == 'changeStatus') {
          let bookRow = e.target.parentNode.parentNode.parentNode;
          let bookIndex = [...booktable.children].indexOf(bookRow);
          let book = new Book(myLibrary[bookIndex].title, myLibrary[bookIndex].author, myLibrary[bookIndex].pages, myLibrary[bookIndex].read);

      
          book.read = (book.read === true) ? false : true; 
          e.target.textContent = book.read;
      
          if (book.read === true) {
            booksRead++;
            booksUnread--;
          } else if (book.read === false) {
            booksUnread++;
            booksRead--;
          }
          bookCountRead.innerHTML = "Books Read: " + booksRead;
          bookCountUnread.innerHTML = "Books Unread: " + booksUnread;
        }
       console.log(booksRead, booksUnread)
      })
  


updateBookCount();



const form = document.getElementById('form');
const titleInput = document.getElementById('bookname').value; 
const authorInput = document.getElementById('bookauthor').value; 
const pagesInput = document.getElementById('bookpages').value; 
const isRead = document.getElementById('read').value; 

form.addEventListener('submit', (event) => {
  event.preventDefault();
let bookInput = new Book (titleInput, authorInput, pagesInput, isRead)
let isNew = true; 

for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title === bookInput.title && myLibrary[i].author === bookInput.author) {
        isNew = false; 
        break; 
    }

    if (isNew) {
        myLibrary.push(bookInput);
        bookCount(bookInput);
        displayBook(bookInput)
    }
}
})