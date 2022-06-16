
# MyStore

MyStore is a ecommerce application build for Udacity Full Stack Developer program.


## Features

- Display Products
- Display Product Details
- Add to Cart
- Checkout by filling person details


## About Stack

The project is built on Angular v14.0, Angular CLI v14.0, Bootstrap 5, open source API (`https://fakestoreapi.com/`) for making get request 
## Backend

The app doesnt have any active backend. The `GET` http request are made using the open source API (`https://fakestoreapi.com/`)
## Frontend

Front is built upon ANgular v14.0

Folder Structure

- `home` : This is Home component which holds all the major components of the app and programatically route to those component using Angular Routing.
- `products` : This component is used to display the list of products which are fetched on the home page of the app. This is the first route which is activated when the app is loaded.
- `product-detail`: This component is used to display the product detail based on a specific prodct id
- `cart`: This component is used to display the cart items and proceed to checkout
- `checkout`: This component is where the user enter their personal detail to buy the cart items.
- `order-confirm`: This component confirms the order placement, and redirect user back to Home component.
- `not-found`: This component is use to display a 404 when the user try to visit a route not available in the app.


## Installation

Fork, Clone or Copy and open terminal/command prompt/powershell in the program directory

Navigate to project directory

```bash
  cd MyStore
```

 Install the dependencies via npm

 ```bash
  npm install
```

Run the app

```bash
  ng serve
```

The app open on localhost:4200 by default, in the browser type or go to `http://localhost/4200` to open the app.


## API Reference

`https://fakestoreapi.com/` API is used for fetching products and their details.
Which is an open source API for faking a store.



#### Get all products

```http
  GET https://fakestoreapi.com/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Not Required** |


#### Get product detail

```http
  GET https://fakestoreapi.com/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |




## Authors

- [@shu-chou](https://github.com/shu-chou)

## Acknowledgements

 - Udacity's Angular Fundamental course instructor Andrew Wong 
 - Program mentor Ujjawal Sharma, and all the program batchmates
 - [Bipin Gosain](https://github.com/bipinGosain) for helping me understand Services basics and folder structure in Angular.