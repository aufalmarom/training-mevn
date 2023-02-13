const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const AuthRoute =  require('./routes/AuthRoute.js');
const ProjectRoute =  require('./routes/ProjectRoute.js');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(AuthRoute, ProjectRoute);

app.listen(5000, () => {
    console.log('Server up and running at localhost with port 5000');
  });