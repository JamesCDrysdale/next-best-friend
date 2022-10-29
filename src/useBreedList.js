import { useState, useEffect } from "react";

// This is a custom hook.

const localCache = {}; // For production you would want to use local storage

export default function useBreedList(species) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!species) {
      setBreedList([]); // If there is no breedlist associated with a species, return empty array
    } else if (localCache[species]) {
      setBreedList(localCache[species]); // Return the breed list associated with selected species
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${species}`
      );
      const json = await res.json();
      localCache[species] = json.breeds || [];
      setBreedList(localCache[species]);
      setStatus("loaded");
    }
  }, [species]);

  return [breedList, status];
}
