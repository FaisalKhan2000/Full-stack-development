# Redux Toolkit Implementation

## Index

- [Installation](#installation)
- [Configuring Store](#configuring-store)
- [Creating Slice](#creating-slice)
- [Dispatching Action](#dispatching-action)
- [Reading the State](#reading-the-state)
- [Creating Product Slice for Data Fetching using Thunk Middleware](#creating-product-slice-for-data-fetching-using-thunk-middleware)
- [Adding the Product Slice in the Store](#adding-the-product-slice-in-the-store)
- [Fetching Data Using Thunk](#fetching-data-using-thunk)

## Installation

To install Redux Toolkit and React Redux, use the following npm commands:

```bash
npm install @reduxjs/toolkit
npm install react-redux
```

## Configuring Store

```javascript
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

// Configure the Redux store with reducers
const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign cart reducer to manage cart state
    product: productReducer, // Assign product reducer to manage product state
    // Optionally, you can add more reducers here for different parts of your state
  },
});

export default store;
```

## Creating Slice

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      return [...state, action.payload]; // we are creating a new array here

      // state.push(action.payload); // since we are using create slice method we can directly push the payload in the state
    },
    removeProduct(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

```

## Dispatching Action

```javascript
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { title, price, image } = product;

  function handleAdd() {
    dispatch(addProduct(product));
  }
  return (
    <div className="card w-full h-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-40 h-40" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold">{title}</h2>
        <p className="font-semibold ">₹ {price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAdd} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
```

## Reading the State

```javascript
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  // Get cart items from Redux store state
  const items = useSelector((state) => state.cart);

  // Render Navbar component
  return <div className="navbar bg-base-100">{/* Navbar content */}</div>;
}

export default Navbar;
```

## Creating Product Slice for Data Fetching using Thunk Middleware

```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Creating this so that the user cannot change the value i.e. read only
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

// Define initial state for the product slice
const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

// Create a slice for managing product state
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Define reducers for handling async actions
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING; // Set status to loading when fetching products
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload; // Set product data when fetching is successful
        state.status = STATUSES.IDLE; // Set status back to idle
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR; // Set status to error if fetching fails
      });
  },
});

// Export action creators and reducer from the product slice
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
// Async thunk function to fetch products from an external API
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});
```

## Adding the Product Slice in the Store

```javascript
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

// Configure the Redux store with reducers
const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign cart reducer to manage cart state
    product: productReducer, // Assign product reducer to manage product state
    // Optionally, you can add more reducers here for different parts of your state
  },
});

export default store;
```

## Fetching Data Using Thunk

```javascript
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { STATUSES, fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const { data: products, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) return <div>Loading....</div>;

  if (status === STATUSES.ERROR) return <div>Error loading data</div>;

  return <div>...</div>;
}

export default Products;
```
