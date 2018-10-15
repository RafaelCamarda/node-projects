const debug = require('debug')('app:startup');
const morgan = require('morgan');
const express = require('express');
const app = express();
const courses = require('./routes/courses');
const home = require('./routes/home');

app.set('view engine', 'pug');
app.use(express.json());
app.use('/api/courses', courses);
app.use('/', home);

if(app.get('env') === 'development'){
  app.use(morgan('tiny'));
  debug('Morgan enabled...');
}

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`));
