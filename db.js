const mysql = require('mysql2');
require('dotenv').config();

const connectDB = () => {
    const db = mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'feliiB!nu$13',
        database: process.env.DB_NAME || 'optiview',
    });

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err.stack);
            process.exit(1); 
        }
        console.log('Connected to the database');
    });

    return db;
};

module.exports = connectDB;
