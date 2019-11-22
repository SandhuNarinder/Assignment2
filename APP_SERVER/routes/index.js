const express = require('express');
const router = express.Router();
const ctrlHome = require('../controllers/home');
const ctrlAbout = require('../controllers/about');
const ctrlBook = require('../controllers/book');
const ctrlDisplay = require('../controllers/display');

router.get('/', ctrlHome.index);
router.get('/about',ctrlAbout.about);
router.get('/booklist',ctrlBook.book);
router.get('/display', ctrlDisplay.display);

module.exports = router;

