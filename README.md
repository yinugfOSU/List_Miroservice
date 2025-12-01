# List_Miroservice
My microservice provides a REST API at http://localhost:4000/items for managing shopping list items. 
To request data, fetch using the standard HTTP methods:
  GET /items → retrieves all items

  GET /items/:id → retrieves a single item by its id

  POST /items → adds a new item; send a JSON body with id, itemName, price, quantity, and notes

  DELETE /items/:id → deletes the item with the specified id

All responses are in JSON format.
To request data, do a https GET request to http://localhost:4000/items. Your response will be a list of items in JSON.

Example call of requesting all items and receving a JSON back:
/*
fetch(http://localhost:4000/items)
    .then(res => {
        if(!res.ok) {
            throw Error("Error! I could not fetch shopping lists");
        }
        return res.json();
    });
*/

Example GET all response:

[
  {
    "id": 1763689721163,
    "itemName": "Balloons",
    "price": "12.99",
    "quantity": "1",
    "notes": "for brother's party"
  }
]

Example call to GET an item by its ID:

fetch("http://localhost:4000/items/1763689721163")
  .then(res => res.json())
  .then(data => {
    console.log("GET item by ID response:", data);
  })
  .catch(err => console.error(err));

Example GET response:

[
  {
    "id": 1763689721163,
    "itemName": "Balloons",
    "price": "12.99",
    "quantity": "1",
    "notes": "for brother's party"
  }
]

Example call to POST (add new item):

fetch("http://localhost:4000/items", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: Date.now(),
    itemName: "Balloons",
    price: "12.99",
    quantity: "1",
    notes: "for brother's party"
  })
})
.then(res => res.json())
.then(data => {
  console.log("POST add item response:", data);
})
.catch(err => console.error(err));

Example POST response: 

{
  "item": {
    "id": 1763689721163,
    "itemName": "Balloons",
    "price": "12.99",
    "quantity": "1",
    "notes": "for brother's party"
  }
}

Example call to DELETE an item by its ID:
fetch("http://localhost:4000/items/1763689721163", {
  method: "DELETE"
})
.then(res => res.json())
.then(data => {
  console.log("DELETE item response:", data);
})
.catch(err => console.error(err));

Example DELETE response:

{
  "message": "Item deleted",
  "id": 1763689721163
}

Requesting and receiving is done in one go with fetch and return res.json().
