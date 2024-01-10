import useFetchData from "../hooks/useFetchData";
import NavButton from "./NavButton";

const Navigation = () => {
  const { categories } = useFetchData();


  return (
      <div className="navigation">
        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              <NavButton
                name={category.name}
                data={category.data}
              />
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Navigation;
