const Pet = ({ name, species, breed, images, location, id }) => {
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <div>
      <a href={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {species} - {breed}
          </h2>
          <h2>{location}</h2>
        </div>
      </a>
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
