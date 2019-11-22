const book = function (req, res) {
    res.render('list-display', {
        books: bookArray
    });
};
var bookArray = [
    {
        title: "The Monk Who Sold his Ferrari",
        author: "Robin sharma"
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides"
    },
    {
        title: "The Institute",
        type: "Stephen King"
    },
    {
        title: "The Queen of Nothing",
        type: "Holly Black"
    }
];


module.exports = {

    book
};
