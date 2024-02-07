import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Countries from "./features/countries/Countries";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Countries />,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import { getCountries } from "./apiCountries.js";

// async function displayCountryData() {
//   try {
//     const countriesData = await getCountries();

//     let countries = [];

//     countriesData.forEach(country => {
//       const name = country.name.common;
//       const population = country.population.toLocaleString();
//       const region = country.region;
//       const capital = country.capital?.[0];

//       // Append each country's data to the countries array
//       countries.push({
//         name: name,
//         population: population,
//         region: region,
//         capital: capital
//       });
//     });

//     // Now you have all country data in the 'countries' array
//     console.log(countries);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// // Call the function to display country data
// displayCountryData();
