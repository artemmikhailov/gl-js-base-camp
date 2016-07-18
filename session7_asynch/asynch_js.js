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
 * @param {Object} response
 * @returns {Promise}
 */
function getJson(response) {
    return response.json();
}

/**
 * @param {number} id
 */
function getBookById(id) {
    var book = document.getElementById('book');
    book.textContent = 'Please wait. Book is loading';

    fetch('api/books/' + id)
        .then(checkStatus)
        .then(getJson)
        .then(function (json) {
            book.textContent = json.name;
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
        .catch(function (err) {
            book.textContent = err.message;
        })
        .then(getJson)
        .then(function (bookData) {
            book.textContent = bookData.name;
            return fetch('api/autors' + bookData.authorId);
        })
        .then(checkStatus)
        .catch(function (err) {
            author.textContent = err.message;
        })
        .then(getJson)
        .then(function (authorData) {
            var similarPromises;
            author.textContent = authorData.name;
            similarPromises = authorData.books.map(function (similarBookId) {
                return fetch('api/bestsellers/similar/' + similarBookId)
                    .then(checkStatus)
                    .then(function (response) {
                        return response.text();
                    })
                    .then(function (similarBookName) {
                        var p = document.createElement('p');
                        p.textContent = similarBookName;
                        similar.appendChild(p);
                    });
            });
            return Promise.all(similarPromises);
        })
        .then(function () {
            alert('Horray everything loaded');
        })
        .catch(function (err) {
            similar.textContent = err.message;
        });
}
