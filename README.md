# Mini-Microservice
 microservice-based application across the connected VMs.

# In-Depth Service Documentation

## 1. Product Service

### Technical Specifications
1. VM Assignment: microservice-1 (192.168.15.4)
2. Port: 3001
3. Database: SQLite (products.db)

### Dependencies
1. Express.js: Web framework
2. better-sqlite3: Database driver

### Database Schema
```sql
CREATE TABLE products (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 name TEXT NOT NULL,
 price REAL CHECK(price > 0)
);
```

#### API Endpoints

Example Workflow
```curl -X POST http://192.168.15.4:3001/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Keyboard", "price":49.99}'
```
List products
```curl http://192.168.15.4:3001/products```

## 2. Inventory Service
Technical Specifications

VM Assignment: microservice-2 (192.168.15.5)   
Port: 3002              
Database: SQLite (inventory.db)

Database Schema
```sql
CREATE TABLE inventory (
  product_id INTEGER PRIMARY KEY,
  quantity INTEGER DEFAULT 0 CHECK(quantity >= 0)
);
```

#### API Endpoints

Example Workflow
```curl -X PATCH http://192.168.15.5:3002/inventory/1 \
  -H "Content-Type: application/json" \
  -d '{"quantity": 50}'
```

#### Check inventory
```curl http://192.168.15.5:3002/inventory```


## 3. Review Service
Technical Specifications

VM Assignment: microservice-3 (192.168.15.6)    
Port: 3003   
Database: SQLite (reviews.db)    

Database Schema
```sql CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  rating INTEGER CHECK(rating BETWEEN 1 AND 5),
  comment TEXT
);
```

### API Endpoints

Example Workflow
```
curl -X POST http://192.168.15.6:3003/reviews \
  -H "Content-Type: application/json" \
  -d '{"product_id":1,"rating":4,"comment":"Good quality"}'
```

#### List reviews

```curl http://192.168.15.6:3003/reviews```
