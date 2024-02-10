import "../App.css";
import SearchBar from "../components/SearchBar";
import ListCategory from "../components/ListCategory";
import useAllData from "../hooks/useAllData";

function HomeRoute() {
  const { isLoading } = useAllData();

  return (
    <div className="home">
      <SearchBar />
      {isLoading && <div>Loading...</div>}
      {!isLoading && <ListCategory />}
    </div>
  );
}

export default HomeRoute;
