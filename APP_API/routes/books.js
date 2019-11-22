const express = require('express');
const router = express.Router();

const ctrlBook = require('../controller/book');
// locations
router
.route('/book')
.get(ctrlBook.getBook)
.post(ctrlBook.createBook);
router
.route('/book/:bookid')
.get(ctrlBook.getSingleBook)
.put(ctrlBook.updateBook)
.delete(ctrlBook.deleteBook);

module.exports = router;