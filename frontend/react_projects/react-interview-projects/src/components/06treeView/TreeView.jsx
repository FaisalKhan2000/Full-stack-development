import React from "react";
import MenuList from "./MenuList";
import "./tree-styles.css";

/*
!NOT IMP

only remember on how to display the menu recursively

*/

function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
