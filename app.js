require('dotenv').config();
const express = require("express");
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'))

app.use(express.static("public", {
    extensions: ['html']
}));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Wilhen Cruz',
        title: 'NodeJS Course'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Wilhen Cruz',
        title: 'NodeJS Course'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Wilhen Cruz',
        title: 'NodeJS Course'
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${ port }`);
});
