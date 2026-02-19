window.addEventListener("DOMContentLoaded", function () {
  // Let's create a class Book

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
        this.showAlert("Book Successfully added", "success");
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
        elemToDelete.parentElement.remove();
        showAlert("Book successfully removed", "success");
      } else {
        showAlert("Wrong area.. click on X", "error");
      }
    }
  }

  //   Store class will be used to permanently store the books
  class Store {
    // Let's do it after Sprint
  }

  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(evt) {
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;
    let book = new Book(title, author, isbn);
    book.addBookToList(book);
    evt.preventDefault();
  }

  this.document.querySelector("#area").addEventListener("click", handleDelete);

  function handleDelete(evt) {
    let book = new Book();
    book.deleteBook(evt.target);
  }
});
