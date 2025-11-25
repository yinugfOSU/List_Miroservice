const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let shoppingList = [];

// GET all items
app.get("/items", (req, res) => {
  res.json(shoppingList);
});

// GET one item by ID
app.get("/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const item = shoppingList.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
});

// ADD an item
app.post("/items", (req, res) => {
  const item = req.body;

  if (!item.id || !item.itemName) {
    return res.status(400).json({ error: "id and itemName are required" });
  }

  shoppingList.push(item);
  res.json({ message: "Item added!", item });
});

// DELETE an item by ID
app.delete("/items/:id", (req, res) => {
  const id = Number(req.params.id);

  const originalLength = shoppingList.length;
  shoppingList = shoppingList.filter(item => item.id !== id);

  if (shoppingList.length === originalLength) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json({ message: "Item deleted", id });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Shopping List Service running on port ${PORT}`));
