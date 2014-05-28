/**
 * Created by yangshuguo on 5/28/14.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('demo');
});

module.exports = router;
