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
