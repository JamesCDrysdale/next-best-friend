import { useState } from "react";

const SearchParams = () => {
  // When we use this as a default value, it breaks the input
  // B/C every time the user presses a button, the whole page refreshes, and the default value goes into that space
  // This is where hooks come to the rescue
  //   const location = "Edinburgh, Scotland";

  const [location, setLocation] = useState("Edinburgh, Scotland"); // Example of destructuring
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
