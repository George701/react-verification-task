let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    res.json([
        {
            id:1,
            title: "iPhone 6s",
            price: "347.34",
            img: 'https://geniusidentity.files.wordpress.com/2013/10/index6.jpg?w=625',
            color: '#3a378b'
        },
        {
            id:2,
            title: "LG v30",
            price: "444.49",
            img: 'https://www.dilaxy.ru/netcat_files/109/70/v30.jpg',
            color: '#390d60'
        },
        {
            id:3,
            title: "Nokia 3",
            price: "269.99",
            img: 'https://i.pinimg.com/236x/9c/a7/38/9ca73847916e05afc9d7ac9cd03905e3.jpg',
            color: '#3a3a3a'
        }
    ])
});

module.exports = router;
