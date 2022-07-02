var express = require('express');
var router = express.Router();
const pdf = require('pdf-parse');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post(
    "/upload",
    (req, res) => {
        let file;

        if(!req.files)
        {
            res.send("File was not found");
            return;
        }
        file = req.files.file
        const data = file.data
        pdf(data).then(function(data) {
            // // number of pages
            // console.log(data.numpages);
            // // number of rendered pages
            // console.log(data.numrender);
            // // PDF info
            // console.log(data.info);
            // // PDF metadata
            // console.log(data.metadata);
            // // PDF.js version
            // // check https://mozilla.github.io/pdf.js/getting_started/
            // console.log(data.version);
            // // PDF text
            // console.log(data.text);
            res.send({"data": data.text});
        });
    }
);


module.exports = router;
