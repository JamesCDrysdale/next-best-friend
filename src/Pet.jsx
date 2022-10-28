const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.species}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////
// JSX translates the above into the below under the hood.              //
// Writing JSX is much simpler and quicker than the following long-form //
// It's better than thinking of html, but having to write JS which then //
// is translated to html. JSX lets us just write HTML                   //
//////////////////////////////////////////////////////////////////////////

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     // Create a div with an array
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.species),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

export default Pet;
