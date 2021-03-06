/*global
    fetch, Promise, Response, alert
 */
'use strict';

var errorInst = new Error('Error. Please refresh your browser');

/**
 * @param {Object} response
 * @returns {Promise}
 */
function checkStatus(response) {
    return (response.status === 200) ? Promise.resolve(response) : Promise.reject(errorInst);
}

/**
 * @param {number} id
 */
function getBookById(id) {
    var book = document.getElementById('book');
    book.textContent = 'Please wait. Book is loading';

    fetch('api/books/' + id)
        .then(checkStatus)
        .then(function (response) {
            return response.json();
        })
        .then(function (bookData) {
            book.textContent = bookData.name;
        })
        .catch(function (err) {
            book.textContent = err.message;
        });
}

/**
 * @param {number} bookId
 */
function loadPage(bookId) {
    var book = document.getElementById('book'),
        author = document.getElementById('author'),
        similar = document.getElementById('similar');

    book.textContent = 'Please wait. Book is loading';
    author.textContent = 'Please wait. Author details are loading';
    similar.textContent = 'Please wait. Similar books are loading';

    fetch('api/books/' + bookId)
        .then(checkStatus)
        .then(function (response) {
            return response.json();
        })
        .then(function (bookData) {
            book.textContent = bookData.name;
            return fetch('api/autors' + bookData.authorId);
        })
        .then(checkStatus)
        .then(function (response) {
            return response.json();
        })
        .then(function (authorData) {
            var similarBooks;
            author.textContent = authorData.name;
            similarBooks = authorData.books.map(function (similarBookId) {
                return fetch('api/bestsellers/similar/' + similarBookId);
            });
            return Promise.all(similarBooks);
        })
        .then(function (responses) {
            return Promise.all(responses.map(checkStatus));
        })
        .then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.text();
            }));
        })
        .then(function (similarBooksNames) {
            similarBooksNames.forEach(function (item) {
                var p = document.createElement('p');
                p.textContent = item;
                similar.appendChild(p);
            });
            alert('Horray everything loaded');
        })
        .catch(function (err) {
            book.textContent = err.message;
        });
}