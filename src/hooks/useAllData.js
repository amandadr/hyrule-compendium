import { useQuery } from "@tanstack/react-query";
import fetchAllData from "../helpers/fetchAllData";

const useFetched = () => {
  return useQuery({ queryKey: ["allData"], queryFn: fetchAllData });
};

const useAllData = () => {
  const { data } = useFetched();

  const allEntries = { name: "All Entries", data: data?.allData.data };

  return { allEntries };
};
export default useAllData;

export const useCategoryData = async (category) => {
  let { data } = useFetched();

  data = data?.allData.data;

  const categoryData = data.filter((entry) => entry.category === category);
  return categoryData;
};
