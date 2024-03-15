import { useState } from "react";

/*
1. tabsContent has label and content in an array
2. we will map the label and content
3. create a onClick on the label which has current index of every label, onClick={() => handleOnClick(index)}
4. now, create a useState, currentTabIndex and set it to 0
5. now function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
  }
6. when we click on labe1 , index = 0 so , currenTabIndex = 0
7. tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content based on this we will condionally render
*/

function Tabs({ tabsContent }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
