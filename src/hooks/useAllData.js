import { useQuery } from "@tanstack/react-query";
import fetchAllData from "../helpers/fetchAllData";

const useAllData = () => {
  const useFetched = () => {
    return useQuery({ queryKey: ["allData"], queryFn: fetchAllData });
  };

  const { data } = useFetched();

  const allEntries = { name: "All Entries", data: data?.allData.data };

  return { allEntries };
};
export default useAllData;

export const useCategoryData = async (category) => {
  const useFetched = () => {
    return useQuery({ queryKey: ["allData"], queryFn: fetchAllData });
  };

  let { data } = useFetched();

  data = data?.allData.data;

  const categoryData = data.filter((entry) => entry.category === category);
  return categoryData;
};
