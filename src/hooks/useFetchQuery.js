import { useQuery } from "@tanstack/react-query";
import fetchAllData from "../helpers/fetchAllData";

const useFetchQuery = () => {
  return useQuery({ queryKey: ["allData"], queryFn: fetchAllData });
};

export default useFetchQuery;
