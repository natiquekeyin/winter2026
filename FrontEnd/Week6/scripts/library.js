window.addEventListener("DOMContentLoaded", function () {
  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(evt) {
    //    read all the values(title,isbn,and author) form form fields

    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    addBookToList(title, isbn, author);
    evt.preventDefault();
  }

  function addBookToList(t, i, a) {
    // this function will create row of the provided values into the table below form
    if (t === "" || i === "" || a === "") {
      showAlert("No fields should be empty", "error");
    } else {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${t}</td><td>${i}</td><td>${a}</td><td class="delete" style="cursor:pointer;color:red">X</td>`;
      document.querySelector("#list").appendChild(row);
      showAlert("Book Successfully added", "success");
      clearFields();
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#isbn").value = "";
    document.querySelector("#author").value = "";
  }

  function showAlert(m, c) {
    // it will create a notification for 2 seconds under "Add book " title

    let p = document.createElement("p");
    p.innerText = m;
    p.className = c;
    p.id = "box";
    document.querySelector("#notify").appendChild(p);

    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 2000);
  }
});
