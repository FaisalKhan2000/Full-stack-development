const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const getDictionaryData = async (word) => {
  try {
    const res = await fetch(API + word);
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching dictionary data:", error);
    return error;
  }
};

export default getDictionaryData;

// Example usage:
// getDictionaryData("example").then(data => console.log(data));
