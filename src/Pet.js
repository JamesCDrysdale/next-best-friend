import React from "react";

const Pet = (props) => {
  return React.createElement("div", {}, [
    // Create a div with an array
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.species),
    React.createElement("h2", {}, props.breed),
  ]);
};

export default Pet;
