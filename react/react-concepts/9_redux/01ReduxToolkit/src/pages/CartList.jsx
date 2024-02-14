import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../store/cartSlice";

function CartList({ product }) {
  const { title, id, price, category, image } = product;
  // console.log(product);

  const dispatch = useDispatch();
  function handleRemove() {
    dispatch(removeProduct(id));
  }
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>

      <td>₹ {price}</td>
      <th>
        <div className="card-actions justify-end">
          <button onClick={handleRemove} className="btn btn-primary">
            Remove
          </button>
        </div>
      </th>
    </tr>
  );
}

export default CartList;
