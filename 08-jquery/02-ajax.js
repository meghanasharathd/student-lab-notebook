// const url = 'https://anapioficeandfire.com/api/books/';

// const app = document.querySelector('#books');
// app.style.paddingLeft = 0;
// const loading = document.querySelector('#loading');

// const addBookToDOM = (item) => {
//   console.log(item);
//   let element = document.createElement('div');
//   let title = document.createElement('h4');
//   let author = document.createElement('p');
//   let published = document.createElement('p');
//   let pages = document.createElement('p');

//   element.style.display = 'flex';
//   element.style.flexDirection = 'column';
//   element.style.alignItems = 'center';
//   element.style.marginTop = '20px';

//   title.textContent = item.name;
//   author.textContent = `by ${item.authors[0]}`;
//   published.textContent = item.released.substr(0, 4);
//   pages.textContent = `${item.numberOfPages} pages`;

//   element.append(title);
//   element.append(author);
//   element.append(published);
//   element.append(pages);

//   app.append(element);
// };

// const fetchData = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((item) => {
//         addBookToDOM(item);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       let li = document.createElement('li');
//       li.textContent = `An error occured. Please try again.`;
//       app.append(li);
//     })
//     .finally(() => {
//       app.removeChild(loading);
//     });
// };

// fetchData(url);

$(document).ready(function() {
  // API endpoint for fetching books
  const apiUrl = "https://anapioficeandfire.com/api/books";

  // Function to fetch books from the API
  function fetchBooks() {
    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function(response) {
        // Loop through each book in the response
        response.forEach(function(book) {
          // Create elements for each book
          let bookElement = $("<div>").addClass("book");
          let titleElement = $("<h3>").text(book.name);
          let authorElement = $("<p>").text("Author: " + book.authors.join(", "));
          let releasedElement = $("<p>").text("Released: " + book.released);

          // Append elements to the book container
          bookElement.append(titleElement, authorElement, releasedElement);

          // Append book container to the DOM
          $("#booksContainer").append(bookElement);
        });
      },
      error: function(error) {
        console.log("Error fetching books:", error);
      }
    });
  }

  // Call the fetchBooks function to fetch and append books when the document is ready
  fetchBooks();
});