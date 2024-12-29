const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes'); 
const transactionRoutes = require('./routes/transactionRoutes'); 

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/asset', express.static(path.join(__dirname, 'asset'))); 

app.get('/', (req, res) => {
    res.send('Server is running. Access /api/products to see products.');
});

connectDB();

app.use('/api', productRoutes); 
app.use('/api', contactRoutes); 
app.use('/api', transactionRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
