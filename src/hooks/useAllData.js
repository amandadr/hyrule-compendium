import useFetchQuery from "./useFetchQuery";

const useAllData = () => {
  const { data, isLoading } = useFetchQuery();

  const allEntries = { name: "All Entries", data: data?.allData.data };

  return { allEntries, isLoading };
};
export default useAllData;
