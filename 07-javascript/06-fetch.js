const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const books = await response.json();

    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');

      const title = document.createElement('h3');
      title.textContent = book.name;

      const authors = document.createElement('p');
      authors.textContent = `by ${book.authors.join(', ')}`;

      const publicationYear = document.createElement('p');
      publicationYear.textContent = new Date(book.released).getFullYear();

      const numberOfPages = document.createElement('p');
      numberOfPages.textContent = book.numberOfPages;

      bookElement.appendChild(title);
      bookElement.appendChild(authors);
      bookElement.appendChild(publicationYear);
      bookElement.appendChild(numberOfPages);

      app.appendChild(bookElement);
    });

    // Update styles to center all the books in the container
    app.style.display = 'flex';
    app.style.flexDirection = 'column'
    app.style.justifyContent = 'center';
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call fetchData function
fetchData(url);
