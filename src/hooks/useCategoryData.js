import useFetchQuery from "./useFetchQuery";

const categories = [
  "creatures",
  "equipment",
  "materials",
  "monsters",
  "treasure",
];

const useCategoryData = async (category) => {
  let { data, isLoading } = useFetchQuery();

  data = data?.allData.data;

  const categoryData = data.filter((entry) => entry.category === category);
  return { categoryData, isLoading };
};

export default useCategoryData;

export const useAllCategoryData = () => {
  let { data, isLoading } = useFetchQuery();

  data = data?.allData.data;

  const allCategoryData = categories.map((category) => {
    return {
      name: category,
      data: data.filter((entry) => entry.category === category),
    };
  });

  if (!isLoading) {
    return { allCategoryData, isLoading };
  }

  // return { allCategoryData, isLoading };
};
