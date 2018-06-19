const app = require('express')();
const bodyParser = require('body-parser');
const port = 1337;

const sortingHat = require('./controllers/sortingHat')

app.use(bodyParser.json());

app.get('/api/houses', sortingHat.getAll)
app.post('/api/houses', sortingHat.addUser)
app.put('/api/houses/:id', sortingHat.updateUser)

app.listen(port, () => {
  console.log(`${port} humans in the centapede`);
})