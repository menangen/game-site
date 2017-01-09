const port = 3000;

let express = require('express');
let app = express();

app.use(express.static('browser/dist'));

app.set('view engine', 'pug');


app.get('/', function (req, res) {
    res.render('index', { title: 'Website', message: 'Hello there!' })
});


app.listen(port, function () {
    console.log(`Web appliccation server listening on http://localhost:${port}`)
});