var express = require('express');
var converter = require('../converter');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {
        title: 'Markdown To Confluence',
    });
});

router.post('/', function(req, res, next) {

    var markdown = req.body.markdown;
    confluenceCode = converter.markdown2confluence(markdown);

    res.render('index', {
        title: 'Markdown To Confluence',
        markdown: markdown,
        confluenceCode: confluenceCode
    });
});

module.exports = router;
