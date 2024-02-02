/**
 *
 */
const heading = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "Im h1"),
    React.createElement("h2", { id: "h2" }, "Im h2"),
  ])
);
// const heading = React.createElement("hi", {id: "heading"},"HelloWorld from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
