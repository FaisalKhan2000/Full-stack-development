import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setDate] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/faisalkhan2000")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setDate(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Name: {data.name}
      <img src={data.avatar_url} alt="" width="300" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/faisalkhan2000");
  return response.json();
};
