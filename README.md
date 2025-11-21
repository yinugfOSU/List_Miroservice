# List_Miroservice
This microservice provides a REST API at http://localhost:4000/items for managing shopping list items. 
To request data, use the standard HTTP methods:
  GET /items → retrieves all items

  GET /items/:id → retrieves a single item by its id

  POST /items → adds a new item; send a JSON body with id, itemName, price, quantity, and notes

  DELETE /items/:id → deletes the item with the specified id

All responses are in JSON format.
To recieve data, do a https GET request to http://localhost:4000/items. Your response will be a list of items in JSON.

Example fetch all items request:
GET http://localhost:4000/items

Example response:
[
  {
    "id": 1763689721163,
    "itemName": "Balloons",
    "price": "12.99",
    "quantity": "1",
    "notes": "for brother's party"
  }
]
