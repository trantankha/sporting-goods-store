const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataRouter = require('./router/index');
const dotenv = require('dotenv');
const app = express();
const path = require('path');

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', dataRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});