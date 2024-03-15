import { useEffect, useState } from "react";
import ProductTile from "../components/product-tile/ProductTile";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("Error fetching data...");
      }

      const data = await res.json();

      if (data && data.length) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading Data! Please wait</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
      {products && products.length
        ? products.map((productItem, index) => (
            <ProductTile key={index} product={productItem} />
          ))
        : null}
    </div>
  );
}

export default Home;
