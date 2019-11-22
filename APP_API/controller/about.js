const about =function(req,res)
{
    res.render('about', {title: 'About Book Store'});
};
module.exports = {
    about
};