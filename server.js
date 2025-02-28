const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
console.log(`Running in ${process.env.NODE_ENV} mode`);

const app = express();
app.use(express.json());


mongoose.connect(config.mongoURI)


    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


const itemRoutes = require('./routes/itemRoutes');
app.use('/items', itemRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/env', (req, res) => {
    res.json({ environment: process.env.NODE_ENV });
});


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
