const myLibrary = [];
const addbtn = document.getElementById('add-btn');
const dialogElement = document.querySelector("dialog");
const submitBtn = document.getElementById('submit-btn')
const newTitle = document.getElementById('title');
const newAuthor = document.getElementById('author');
const newPages = document.getElementById('pages');
const readStatus = document.getElementById('read-status');
let wasRead = false;

const booksGrid = document.getElementById('books-grid');




function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);

}


const dune = new Book('Dune', 'Frank Herbert', 896, true);


myLibrary.push(dune);

document.addEventListener('DOMContentLoaded', updateLibrary);

function updateLibrary() {

    booksGrid.innerHTML = '';

    myLibrary.forEach((book) => {

        const bookTile = document.createElement('div');
        bookTile.classList.add('book-tile');
        booksGrid.appendChild(bookTile);

        const bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;
        bookTile.appendChild(bookTitle);

        const divider = document.createElement('hr');
        bookTile.appendChild(divider);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `By: ${book.author}`;
        bookTile.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${book.pages}`;
        bookTile.appendChild(bookPages);



        const switchBtn = document.createElement('button');
        const btnBox = document.createElement('div');

        btnBox.classList.add('btn-box');

        bookTile.appendChild(btnBox);
        btnBox.appendChild(switchBtn);

        if (!book.read) {
            switchBtn.innerText = 'Not read';
            switchBtn.style.backgroundColor = '#B91C1C';
        } else {
            switchBtn.innerText = 'Read'
            switchBtn.style.backgroundColor = '#166534';
        }
        switchBtn.addEventListener('click', () => {
            book.read = !book.read;
            updateLibrary();
        })

        const deleteBtn = document.createElement('button');
        btnBox.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            const index = myLibrary.indexOf(book);
            if (index !== -1) {
                myLibrary.splice(index, 1);

                updateLibrary();


            }
        });

        switchBtn.classList.add('switch-btn');
        deleteBtn.classList.add('delete-btn')

    }
    )


}

addbtn.addEventListener('click', () => {
    dialogElement.showModal();

})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (newTitle.value && newAuthor.value && newPages.value) {
        addBookToLibrary();
    }
});

function addBookToLibrary(e) {


    const title = newTitle.value;
    const author = newAuthor.value;
    const pages = newPages.value;
    const read = readStatus;
    ;

    const newBook = new Book(title, author, pages, read);

    readStatus.checked ? newBook.read = true : newBook.read = false

    myLibrary.push(newBook);

    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = '';
    readStatus.checked = false;

    dialogElement.close();

    updateLibrary();

    console.log('Added new book to library.');



}
