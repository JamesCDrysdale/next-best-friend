import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? ( // Ternary statement used here because we can't use an if statement
        <h1>No Pets Found</h1> // If there are no pets, return this
      ) : (
        // If there are pets, display the following
        pets.map((pet) => (
          <Pet
            name={pet.name}
            species={pet.species}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
