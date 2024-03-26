const myLibrary = [];
const addbtn = document.getElementById('add-btn');
const dialog = document.querySelector("dialog");
const submitBtn = document.getElementById('submit-btn')
const newTitle = document.getElementById('title');
const newAuthor = document.getElementById('author');
const newPages = document.getElementById('pages');
const wasRead = document.getElementById('read');

const booksGrid = document.getElementById('books-grid');


function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);

}

addbtn.addEventListener('click', () => {
    dialog.showModal();

})

submitBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault();

    const title = newTitle.value;
    const author = newAuthor.value;
    const pages = newPages.value;
    const read = wasRead.checked;

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = '';
    wasRead.checked = false;

    dialog.close();

    updateLibrary();

    console.log('added!');

    

    function updateLibrary() {

        booksGrid.innerHTML = '';

        myLibrary.forEach((book) => {

            const bookTile = document.createElement('div');
            bookTile.classList.add('book-tile');
            booksGrid.appendChild(bookTile);

            const bookTitle = document.createElement('h2');
            bookTitle.textContent = book.title;
            bookTile.appendChild(bookTitle);

            const bookAuthor = document.createElement('p');
            bookAuthor.textContent = book.author;
            bookTile.appendChild(bookAuthor);

            const bookPages = document.createElement('p');
            bookPages.textContent = book.pages;
            bookTile.appendChild(bookPages);

            const readOrNot = document.createElement('p');
            book.read ? readOrNot.textContent = "Read" : readOrNot.textContent = "Not read";
            bookTile.appendChild(readOrNot);

            const switchBtn = document.createElement('button');
            bookTile.appendChild(switchBtn);
            switchBtn.innerText = 'switch';
            switchBtn.addEventListener('click', () => {
                book.read = !book.read;
                updateLibrary();
            })

            const deleteBtn = document.createElement('button');
            bookTile.appendChild(deleteBtn);
            deleteBtn.textContent = 'Delete entry';
            deleteBtn.addEventListener('click', () => {
                const index = myLibrary.indexOf(book);
                if (index !== -1) {
                    myLibrary.splice(index, 1);

                    updateLibrary();


                }
            });

        }
        )


    }

}
