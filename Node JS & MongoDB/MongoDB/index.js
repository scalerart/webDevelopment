const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); //  Fixed Import Here

// Set up the basic server settings
const app = express();
const port = 3000;

// Your database connection details
const password = "YDPLXHFhQjupZJXZ";
const dbName = "scalerArtDB";
const collectionName = "products";
const uri = `mongodb+srv://scalerArt:${password}@cluster0.kdbixyc.mongodb.net/?appName=Cluster0`;

// Prepare the MongoDB connection helper
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// --- Tools / Middlewares ---
app.use(cors()); // Allows other websites (like your frontend) to talk to this backend
app.use(express.json()); // Allows your backend to read JSON data sent to it
app.use(express.urlencoded({ extended: true })); // Allows your backend to read form data

// A global variable to hold our database folder so any route can use it
let collection;

// Connect to MongoDB when the server starts
async function connectDB() {
  try {
    // Try connecting to the internet database
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Select the database and the specific collection (table) inside it
    const db = client.db(dbName);
    collection = db.collection(collectionName);
  } catch (error) {
    // If something goes wrong, show the error and stop the server
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}
connectDB();

// Server Routes / URLs

// 1. Home Link (http://localhost:3000/)
app.get("/", (req, res) => {
  res.send("I am Working."); // Just a test message to see if server is alive
});

// 2. Get Products Link (http://localhost:3000/products)
app.get("/products", async (req, res) => {
  try {
    // FIX: Check if the collection is initialized
    if (!collection) {
      return res.status(503).json({
        message:
          "Database connection is still initializing. Please refresh in a moment.",
      });
    }

    // Find all items in the database and turn them into a standard list (array)
    const products = await collection.find({}).toArray();

    // Send the list back to whoever asked for it
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 3. Add Product Link (http://localhost:3000/addProduct)
app.post("/addProduct", async (req, res) => {
  try {
    // Grab the product data that was sent in the request body
    const product = req.body;

    // Save that product into our MongoDB database
    const result = await collection.insertOne(product);

    // Tell the user it worked and give them the new database ID
    res.status(201).json({
      message: "Product added successfully!",
      insertedId: result.insertedId,
    });
  } catch (error) {
    // If saving fails, show the error
    console.error("Error inserting product:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

// 4. Delete Product Link (http://localhost:3000/delete/:id)
app.delete("/delete/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Uses the correctly imported ObjectId
    const query = { _id: new ObjectId(userId) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 1) {
      console.log("Successfully deleted one product");
      return res
        .status(200)
        .json({ success: true, message: "Product deleted" });
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

// 5. Load Single Product Link (http://localhost:3000/product/:id)
app.get("/product/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const query = { _id: new ObjectId(userId) };

    const result = await collection.findOne(query);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

// 6. Update Product L
app.patch("/update/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;

    const query = { _id: new ObjectId(productId) };

    const updateProduct = {
      $set: {
        name: name,
        price: price,
        stock: stock,
      },
    };

    const result = await collection.updateOne(query, updateProduct);
    res.json(result);
  } catch (error) {
    console.error("Update route error:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// Start the server and make it listen for visitors
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/*
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Set up the basic server settings
const app = express();
const port = 3000;

// Your database connection details
const password = "YDPLXHFhQjupZJXZ";
const dbName = "scalerArtDB";
const collectionName = "products";
const uri = `mongodb+srv://scalerArt:${password}@cluster0.kdbixyc.mongodb.net/?appName=Cluster0`;

// Prepare the MongoDB connection helper
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// --- Tools / Middlewares ---
app.use(cors()); // Allows other websites (like your frontend) to talk to this backend
app.use(express.json()); // Allows your backend to read JSON data sent to it
app.use(express.urlencoded({ extended: true })); // Allows your backend to read form data

// A global variable to hold our database folder so any route can use it
let collection;

// Connect to MongoDB when the server starts
async function connectDB() {
    try {
        // Try connecting to the internet database
        await client.connect();
        console.log("Successfully connected to MongoDB!");

        // Select the database and the specific collection (table) inside it
        const db = client.db(dbName);
        collection = db.collection(collectionName);
    } catch (error) {
        // If something goes wrong, show the error and stop the server
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}
connectDB();

// Server Routes / URLs

// 1. Home Link (http://localhost:3000/)
app.get("/", (req, res) => {
    res.send("I am Working."); // Just a test message to see if server is alive
});

// 2. Get Products Link (http://localhost:3000/products)
app.get("/products", async (req, res) => {
    try {
        // Find all items in the database and turn them into a standard list (array)
        const products = await collection.find({}).toArray();

        // Send the list back to whoever asked for it
        res.status(200).json(products);
    } catch (error) {
        // If an error happens, send a 500 failure message
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// 3. Add Product Link (http://localhost:3000/addProduct)
app.post("/addProduct", async (req, res) => {
    try {
        // Grab the product data that was sent in the request body
        const product = req.body;

        // Save that product into our MongoDB database
        const result = await collection.insertOne(product);

        // Tell the user it worked and give them the new database ID
        res.status(201).json({
            message: "Product added successfully!",
            insertedId: result.insertedId,
        });
    } catch (error) {
        // If saving fails, show the error
        console.error("Error inserting product:", error);
        res
            .status(500)
            .json({ message: "Internal Server Error", error: error.message });
    }
});

// 4. Delete Product Link (http://localhost:3000/delete)
app.delete("/delete/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        const query = { _id: new ObjectId(userId) };
        const result = await collection.deleteOne(query);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one product");
            return res.status(200).json({ success: true, message: "Product deleted" });
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
            return res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Start the server and make it listen for visitors
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

*/
