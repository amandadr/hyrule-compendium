import { useState } from "react";
import axios from "axios";

const fuzzyEndpoint = `https://bpkb9up1mj.execute-api.us-east-1.amazonaws.com/fuzzy-search`; // Lambda function hosting Python code

const searchEndpoint = (search) =>
  `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/` + search;

const fuzzy = async (search) =>
  await axios.get(fuzzyEndpoint, {
    params: { search_term: search },
  });

function useSearchData() {
  const [data, setData] = useState([]); // data = array of objects
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (search) => {
    setIsLoading(true);
    setError(null);

    try {
      const fuzzyTerms = await fuzzy(search);
      let searchResults = [];
      const apiEndpoints = fuzzyTerms.data.map((term) => searchEndpoint(term));
      const endpointsArray = apiEndpoints.map((endpoint) =>
        axios.get(endpoint)
      );
      const apiResponses = await Promise.all(endpointsArray);
      searchResults = apiResponses.map((response) => response.data);

      searchResults.length > 0
        ? setData(searchResults)
        : setError("No results found");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
}

export default useSearchData;
