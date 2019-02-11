let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
    res.json([
        {id:1, username: "Acato Isimura"},
        {id:2, username: "Helen Grave"}
    ])
});

module.exports = router;
