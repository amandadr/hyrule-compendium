import { useQuery } from "@tanstack/react-query";

const urlAll = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";

const fetchAllData = async () => {
  try {
    const response = await fetch(urlAll);
    const data = await response.json();
    return { category: "All Entries", allData: data };
  } catch (error) {
    console.error(error);
  }
};

export default fetchAllData;

// export const useFetched = () => {
//   return useQuery({ queryKey: ["allData"], queryFn: fetchAllData });
// };
