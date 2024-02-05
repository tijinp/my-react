import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> create an Object. When its rendered on to DOM it then becomes an html element

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX - HTML like/xml syntax
const jsxHeading = (
  <h1 id="heading" className="root">
    Hello from JSX
  </h1>
);

// React Component
// Class based Components - OLD
// Functional Components - NEW

// const HeadingComponent = () => {
//   return <h1>Namaste JS from component</h1>;
// };

const TitleComponent = function () {
  return <h1>Title Component</h1>;
};
const titleElement = <h1>Title Element</h1>;
const number = 1000;

// Different methods to call the component, function, element inside a functional Component
const HeadingComponent = () => (
  <div>
    <TitleComponent />
    {TitleComponent()}
    {titleElement}
    {number + 1}
    <h1>Namaste JS from component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);

// console.log(heading);
// console.log(jsxHeading);
