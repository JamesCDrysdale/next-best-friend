import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Next Best Friend</h1>
      <SearchParams />
      {/* Don't need for now but will resuse later so keeping commented out for now
      <Pet name="Ollie" species="Dog" breed="Border Collie" />
      <Pet name="Harry" species="Hamster" breed="Syrian" />
      <Pet name="Dexter" species="Cat" breed="Ragdoll" /> */}
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////
// JSX translates the above into the below under the hood.              //
//////////////////////////////////////////////////////////////////////////

// //  Define the content of the app as 'App'
// // This is a function component
// const App = () => {
//   return React.createElement(
//     "div", // create a simple div
//     {}, // which has no additional paramaters //P.S. null can be used instead of {}
//     [
//       React.createElement(
//         // whose content is another new element
//         "h1", // create a h1 inside the div
//         {}, // with no additional parameters such as class name or id // id: "brand"
//         "Next Best Friend" // with the content 'Next Best Friend'
//       ),
//       React.createElement(Pet, {
//         //Include the Pet component in the app, define value of props in object
//         name: "Ollie",
//         species: "dog",
//         breed: "Collie",
//       }),
//       React.createElement(Pet, {
//         name: "Harry",
//         species: "Hamster",
//         breed: "Syrian",
//       }),
//       React.createElement(Pet, {
//         name: "Dexter",
//         species: "Cat",
//         breed: "Ragdoll",
//       }),
//     ]
//   );
// };

// render the app 'App' inside the HTML element with the id of 'root'
render(<App />, document.getElementById("root"));
