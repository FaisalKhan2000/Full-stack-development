import { useSelector } from "react-redux";
import CartList from "./CartList";

function Cart() {
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <h1>cart</h1>
      <div className="mb-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {products.map((product) => (
                <CartList key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
