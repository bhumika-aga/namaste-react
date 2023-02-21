import React from "react";
import ReactDOM from "react-dom/client";

//Gives the output of the json object of the element heading1 using JSX
//React Element
const heading = (
  <h1 id="title" key="header">
    Namaste React
  </h1>
);

//React Functional Component
//Example 1 (Most Used)
const HeaderComponent1 = () => (
  <div>
    <h1 id="title" key="header">
      Namaste React!
    </h1>
    <h2>This is the new heading!</h2>
  </div>
);

//Example 2
const HeaderComponent = () => {
  return (
    <div>
      {/*Using React element in the Functional Component. Won't work if it is made a Functional Component. */}
      {heading}
      {/* Component Composition- Using a React Functional Component inside another Functional Component */}
      <HeaderComponent1 />
      {/* Using as a function */}
      {HeaderComponent2()}
      <h1 id="title" key="header">
        Namaste React!
      </h1>
      <h2>This is the second heading!</h2>
    </div>
  );
};

//Example 3
const HeaderComponent2 = function () {
  return (
    <div>
      <h1 id="title" key="header">
        Namaste React!
      </h1>
      <h2>This is the novel heading!</h2>
    </div>
  );
};

//Example 4
const heading1 = () => (
  //JSX
  <h1 id="title" key="header">
    Namaste React
  </h1>
);

//Creating a root element to inform react
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeaderComponent />); //To render a functional component to root
