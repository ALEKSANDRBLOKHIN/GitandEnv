require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/dev_db',
    port: process.env.PORT || 3000,
};
