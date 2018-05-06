const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers/helpers')

const port = process.env.PORT !== undefined ? process.env.PORT : 8080;
// const port = process.env.PORT || 8080; el obj este PORT es porque no sabes el puerto que
//te van a asignar al deployar

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'patricio',
    });
})

app.get('/about', (req, res) => {
    res.render('about');

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})