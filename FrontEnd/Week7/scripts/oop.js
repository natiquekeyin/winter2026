window.addEventListener("DOMContentLoaded", function () {
  // Let's create a class Book
  // To access any member of a class WE NEED TO CREATE ITS OBJECT FIRST, without creating an object we cannot access any member method or member fields...
  class Book {
    constructor(t, a, i) {
      this.title = t;
      this.author = a;
      this.isbn = i;
    }
    // addBookToList will take a book object as parameter and creates a new row in the table on our webpage
    addBookToList(book) {
      if (book.title === "" || book.isbn === "" || book.author === "") {
        this.showAlert("No fields should be empty", "error");
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td><td>${book.isbn}</td><td>${book.author}</td><td class="delete" style="cursor:pointer;color:red">X</td>`;
        document.querySelector("#list").appendChild(row);

        this.clearFields();
      }
    }

    showAlert(m, c) {
      let p = document.createElement("p");
      p.innerText = m;
      p.className = c;
      p.id = "box";
      document.querySelector("#notify").appendChild(p);

      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 2000);
    }

    clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#isbn").value = "";
      document.querySelector("#author").value = "";
    }

    deleteBook(elemToDelete) {
      if (elemToDelete.className === "delete") {
        let isbn =
          elemToDelete.previousElementSibling.previousElementSibling
            .textContent;
        Store.removeBook(isbn); //memory removal of the book...

        elemToDelete.parentElement.remove(); //UI removal of the book
        showAlert("Book successfully removed", "success");
      } else {
        showAlert("Wrong area.. click on X", "error");
      }
    }
  }

  //   Store class will be used to permanently store the books
  class Store {
    // Let's do it after Sprint- let's do it on March 12

    // To add a book to the localStorage
    static addBook(book) {
      let books = Store.getBooks();
      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
    }

    // To read/get all the stored books in the localStorage
    static getBooks() {
      let books;
      if (localStorage.getItem("books") === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem("books"));
      }
      return books;
    }

    // To display the stored beooks from local storage to the main page
    static displayBooks() {
      let books = Store.getBooks();
      // each book from memory should be displayed on our web page... infact to display thme on the web page

      books.forEach((book) => {
        let objBook = new Book();
        objBook.addBookToList(book);
      });
    }

    // to remove a particular book from localStorage...
    static removeBook(isbn) {
      let books = Store.getBooks();
      books = books.filter((book) => book.isbn !== isbn);
      localStorage.setItem("books", JSON.stringify(books));
    }
  }

  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(evt) {
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;
    let book = new Book(title, author, isbn);
    book.addBookToList(book);
    book.showAlert("Book Successfully added", "success");
    Store.addBook(book);
    evt.preventDefault();
  }

  this.document.querySelector("#area").addEventListener("click", handleDelete);

  function handleDelete(evt) {
    let book = new Book();
    book.deleteBook(evt.target);
  }

  Store.displayBooks();
});

// Store.addBook(book); CORRECT..

// Class is like a template which contains member methods and member fields... WE CREATE OBJECTS to access everything from class...

// Book.addBookToList(book);NOT CORRECT

// let obj = new Book();
// obj.addBookToList();
// You NEED OBJECT to access anything from Book class.. why because nothing is "static" there...
