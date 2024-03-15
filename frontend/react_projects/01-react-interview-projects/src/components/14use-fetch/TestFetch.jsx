import useFetch from "./useFetch";

function TestFetch() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data, error, pending);

  if (error) return <h1>{error}</h1>;
  if (pending) return <h1>Pending ! Please wait</h1>;

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {data && data.products && data.products.length
        ? data.products.map((item) => <p>{item.title}</p>)
        : null}
    </div>
  );
}

export default TestFetch;
