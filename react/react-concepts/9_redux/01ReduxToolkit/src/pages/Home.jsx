import Products from "../components/Products";

function Home() {
  return (
    <div>
      <h2 className="text-center">Welcome to the Redux toolkit store</h2>
      <section>
        <h3 className="text-center">Products</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
