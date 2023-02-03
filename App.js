import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
        "h1",
        { id: "title" },
        "Hello World!"
      );
const heading2 = React.createElement(
        "h2",
        { id: "title" },
        "Hello Bhumika!"
      );
const container = React.createElement("div", { id: "container" }, [
        heading1,
        heading2,
      ]);
// console.log(heading);
//Creating a root element to inform react
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);