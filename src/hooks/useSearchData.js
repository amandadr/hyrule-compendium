import { useState } from "react";
import axios from "axios";

const searchEndpoint = (search) =>
  `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/` + search;

function useSearchData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return { data, isLoading, error, fetchData };
}

export default useSearchData;
