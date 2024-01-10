import { fetchData } from "./useCategoryData";
import { useState, useEffect } from "react";

const useAllData = () => {
  const [allEntries, setEntries] = useState([]);

  useEffect(() => {
    fetchData(
      "https://botw-compendium.herokuapp.com/api/v3/compendium/all",
      setEntries
    );
  }, []);

  return {
    allEntries: {
      name: "All Entries",
      data: allEntries,
    },
  };
};

export default useAllData;
