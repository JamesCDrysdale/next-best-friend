import { useState, useEffect, useContext } from "react";
import useBreedList from "../useBreedList";
import Results from "../components/Results";
import ThemeContext from "./ThemeContext";

const SPECIES = [
  "cat",
  "dog",
  "bird",
  "hamster",
  "rabbit",
  "snake",
  "spider",
  "fish",
  "guinea pig",
  "gerbil",
  "bearded dragon",
  "gecko",
];

const SearchParams = () => {
  // When we use a default value, it breaks the input
  // B/C every time the user presses a button, the whole page refreshes, and the default value goes into that space
  // This is where hooks come to the rescue

  const [location, setLocation] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(species);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); // Makes a request to fetch Pets when we load the page

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${species}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div>
      <div className="search-params">
        <form>
          <label htmlFor="theme">
            Theme
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              onBlur={(e) => setTheme(e.target.value)}
            >
              <option value="#009B72">Green</option>
              <option value="#009ddc">Carolina Blue</option>
              <option value="#F26430">Satsuma</option>
              <option value="#2A2D34">Gunmetal</option>
              <option value="#6761A8">Orchid</option>
            </select>
          </label>
        </form>
      </div>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestPets();
          }}
        >
          <label htmlFor="location">
            Location
            <input
              id="location"
              value={location}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label htmlFor="species">
            Species
            <select
              id="species"
              value={species}
              onChange={(e) => {
                setSpecies(e.target.value);
                setBreed("");
              }}
              onBlur={(e) => {
                setSpecies(e.target.value);
                setBreed("");
              }}
            >
              <option />
              {SPECIES.map((species) => (
                <option key={species} value={species}>
                  {species}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              disabled={!breeds.length}
              id="breed"
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
              onBlur={(e) => {
                setBreed(e.target.value);
              }}
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button style={{ backgroundColor: theme }}>Submit</button>
        </form>
        <Results pets={pets} />
      </div>
    </div>
  );
};

export default SearchParams;
