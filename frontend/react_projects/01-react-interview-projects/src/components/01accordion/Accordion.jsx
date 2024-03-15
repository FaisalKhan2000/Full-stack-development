import { useState } from "react";
import data from "./data";
import "./accordion.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // handleSingleSelection
  // when an accordion is clicked the id of that accordian is passed to the setSelected and its sets the value of selected
  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // handleMutliSelection
  // 1. check if an id is present or not
  // 2. if id is not present then push the id to the copymultiplte
  // 3. else remove the value from the copy multiple
  // 4. finally setMutiple to copyMultiple

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  }

  console.log(multiple);
  // console.log(selected);

  return (
    <div className="acc-wrapper ">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multi selection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1
                      ? "-"
                      : "+"
                    : selected === dataItem.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
