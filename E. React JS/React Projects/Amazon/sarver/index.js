const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
require('dotenv').config();

// set up the basic server settings
const app = express();
const port = process.env.PORT;

// database connection details
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;
const username = process.env.DB_USER_NAME;
const password = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.kdbixyc.mongodb.net/?appName=Cluster0`;

// Prepare the MongoDB connection helper
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// DB Collection global variable
let productsCol;

// Connect to MongoDB when the server starts
async function connectDB() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });

    const db = client.db(dbName);
    productsCol = db.collection(collectionName);

    console.log('You successfully connected to MongoDB!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}
connectDB();

// 1. Home Link
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 2. Add Products
app.post('/addProduct', async (req, res) => {
  try {
    // const Products = req.body;
    // const result = await productsCol.insertMany(Products);

    res.status(201).json({
      message: 'Product added successfully!',
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// 3. Get Products
app.get('/products', async (req, res) => {
  try {
    if (!productsCol) {
      return res.status(503).json({
        message: 'Database connection is still initializing. Please refresh in a moment.',
      });
    }

    const products = await productsCol?.find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// 4. Get Single Product
app.get('/product/:key', async (req, res) => {
  try {
    if (!productsCol) {
      return res.status(503).json({
        message: 'Database connection is still initializing. Please refresh in a moment.',
      });
    }

    const product = await productsCol.find({ key: req.params.key }).toArray();
    res.status(200).json(product[0]);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// 5. Return some products for keys
app.post('/productsByKeys', async (req, res) => {
  try {
    const productKeys = req.body;
    const products = await productsCol.find({ key: { $in: productKeys } }).toArray();

    res.send(products);
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.listen(port);
