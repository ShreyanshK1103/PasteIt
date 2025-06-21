const mongoose = require('mongoose');
const app = require('./app');

const DB = 'mongodb+srv://ShreyanshKaushal:Harsh%40123@cluster0.jgq76fa.mongodb.net/';

mongoose.connect(DB);

const port = 7000; 

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

