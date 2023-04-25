//Example 3

import { useState } from "react";

//Directly exporting the Component
export const HeaderComponent2 = function () {
  //searchText - local state variable
  //useState("default value") - To create state variable
  //returns an array - [variableName, setVariableName]
  //setVariableName - To modify the value of variableName
  //can be used as a normal js variable
  const [searchText, setSearchText] = useState("KFC");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Here..."
          value={searchText}
          //cannot be directly modified like this
          /* onChange={(e) => {
            searchText = e.target.value;
          }} */
          //to modify the value of the variable
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="search-btn">Search</button>
      </div>
      <div>
        <h1 id="title" key="headerX">
          Namaste React!
        </h1>
        <h2>This is the novel heading!</h2>
      </div>
    </>
  );
};
