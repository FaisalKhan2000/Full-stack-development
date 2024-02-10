export async function getCountriesData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getCountry(code) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const data = await response.json();
    // console.log(data[0].flag);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
