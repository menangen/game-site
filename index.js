let express = require('express');
let app = express();

app.use(express.static('browser/dist'));

app.set('view engine', 'pug');


app.get('/', function (req, res) {
    res.render('index', { title: 'Website', message: 'Hello there!' })
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});