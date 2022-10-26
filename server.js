var express = require('express');
var app = express();
bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var listInfo = [{title: "John", description: "Hello im John and im from the beutiful city of Zapopan"}, {title: "Mary", description: "im Mary and i really like dogs, i actually have 6 in my house!"}];


app.get('/', (req, res) => {
    res.render('pages/index', {
        listInfo: listInfo,
    });
})

app.post('/postblog' , (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    listInfo.push({title: title, description: description})

    res.render('pages/index', {listInfo: listInfo});
})

app.post('/editblog' , (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    for (var i = 0; i < listInfo.length; i++) {
        if (listInfo[i].title == title) {
            listInfo[i].description = description;          
            res.render('pages/index', {listInfo: listInfo});
        }
    }
    //res.send(title + description)
})


app.listen(8080);
console.log('Server is listening on port 8080');
