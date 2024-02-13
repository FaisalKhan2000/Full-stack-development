import React from "react";

function DataList({ meanings }) {
  return (
    <div>
      <ul className="mt-7 list-dis ">
        {meanings.map((meaning, index) => (
          <li key={index}>
            <h1 className="text-black-100 font-bold text-xl italic dark:text-white-100">
              {meaning.partOfSpeech}
            </h1>

            <p className="py-4">
              <strong>Meaning</strong>
            </p>
            <ul className="list-disc marker:text-purple dark:marker:text-white-100">
              {meaning.definitions.map((def, idx) => (
                <li className="py-1" key={idx}>
                  {def.definition}
                </li>
              ))}
            </ul>
            {meaning.definitions.some((def) => def.synonyms.length > 0) && (
              <p className="text-purple">
                <strong>Synonyms:</strong>{" "}
                {meaning.definitions.flatMap((def) => def.synonyms).join(", ")}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
