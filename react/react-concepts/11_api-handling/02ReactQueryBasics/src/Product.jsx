import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();

  // Mutation
  const mutation = useMutation({
    mutationFn: async (newTitle) => {
      // Change the argument to newTitle
      const res = await fetch(
        `https://dummyjson.com/products/${params.productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: newTitle, // Use newTitle directly
          }),
        }
      );
      const data = await res.json();
      return data;
    },
    // // Add onSuccess handler if needed
    // onSuccess: () => {
    //   // Handle success if needed
    // },
    // // Add onError handler if needed
    // onError: (error) => {
    //   // Handle error if needed
    // },
  });

  const getProduct = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    const data = await res.json();
    return data;
  };

  // Query
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: getProduct,
    // staleTime: 10000, // 10 seconds
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error {error.message}</h1>;

  if (mutation.isLoading) return <h1>Updating...</h1>;
  if (mutation.isError)
    return <h1>Error while updating: {mutation.error.message}</h1>;

  return (
    <div>
      <div>Product: {product.title}</div>
      <button
        onClick={() => {
          mutation.mutate("Updated Product"); // Pass the new title directly
        }}
      >
        Update Product
      </button>
    </div>
  );
}

export default Product;
