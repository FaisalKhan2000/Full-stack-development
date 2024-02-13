import React from "react";
import { useQuery } from "../context/queryContext";
import DataList from "./DataList";
import { IoTriangleSharp } from "react-icons/io5";

function MainComponent() {
  const { data, loading, error } = useQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Check if data is null
  if (!data) {
    return null; // Display nothing if data is null
  }

  const { word, phonetics, meanings } = data;

  const filteredPhonetics = phonetics.filter((item) => item.audio && item.text);
  const phoneticsText = filteredPhonetics[0].text;
  const phoneticsAudio = filteredPhonetics[0].audio; //

  // Rendering dataArray
  return (
    <div className="flex w-full flex-col mt-8 dark:text-white-100 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-black-100 text-6xl font-bold dark:text-white-100">
            {word}
          </h1>
          <p className="text-purple text-lg ">{phoneticsText}</p>
        </div>
        <div>
          <button className="bg-violet-300 px-4 py-4 text-purple rounded-full hover:text-violet-50 hover:bg-purple dark:bg-violet-300 dark:text-purple dark:hover:bg-violet-500">
            <IoTriangleSharp className="transform rotate-90" />
          </button>
        </div>
      </div>
      <DataList meanings={meanings} />
    </div>
  );
}

export default MainComponent;
