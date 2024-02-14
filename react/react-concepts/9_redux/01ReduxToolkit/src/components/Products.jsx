import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { STATUSES, fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  // const [products, setProducts] = useState([]);

  const { data: products, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   try {
    //     const res = await fetch("https://fakestoreapi.com/products");
    //     const data = await res.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //   }
    // };
    // fetchProducts();
  }, []);

  if (status === STATUSES.LOADING)
    return <span className="loading loading-spinner loading-lg"></span>;

  if (status === STATUSES.ERROR)
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed.</span>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl px-4 py-8">
      {products.map((product) => (
        <div key={product.id} className="mb-6">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default Products;
