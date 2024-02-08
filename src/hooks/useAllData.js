import { fetchData } from "./useCategoryData";
import { useState, useEffect } from "react";

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
