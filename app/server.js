const express = require('express'),
morgan = require('morgan');

const app  = express();

//top ten movies
let movies = [ {
  title: 'Inception'
},
{
  title: 'Jusrasic Park'
},
{
  title: 'Shutter Island'
},
{
  title: 'Pulp Fiction'
},
{
  title: 'Elf'
},
{
  title: 'A Quiet Place'
},
{
  title: 'Black Panther'
},
{
  title: 'Us'
},
{
  title: 'Logan'
},
{
  title: 'Get Out'
},

]


app.use(morgan('common'));

app.use(express.static('public'));

app.get('/movies', function(req, res) {
  res.json(movies)
});

app.get('/', function(req, res) {
  res.send('Welcome to Instaflix, Instant Flix on demand!')
});

app.get('/documentation', function(req, res) {
  res.sendFile('./public/documentation.html', { root: __dirname});
});


app.get('/movies/:name', (req, res) => {
  res.json(Students.find( (student) =>
    { return student.name === req.params.name   }));
});

app.post('/movies', (req,res) => {
  let newMovie = req.body;

  if(!newMovie.name) {
    const message = 'missing "name" in request body';
    res.status(400).send.apply(message);
  } else {
    newMovie.id = uuid.v4();
    topMovies.push(newMovie);
    res.status(201).send(newMovie);
  }


});








app.listen(8080, () =>
console.log('App is listening on port 8080')
);

app.use(function (err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
