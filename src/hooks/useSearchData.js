import { useState, useEffect } from "react";
import axios from "axios";

const searchEndpoint = (search) =>
  `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/` + search;

function useSearchData(initialSearch = "") {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (search) => {
      setIsLoading(true);
      setError(null);

      try {
        const endpoint = searchEndpoint(search);
        const response = await axios.get(endpoint);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(initialSearch);
  }, [initialSearch]);

  return { data, isLoading, error };
}

export default useSearchData;
