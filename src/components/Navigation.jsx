import { AppBar, Toolbar } from "@mui/material";
import NavButton from "./NavButton";
import useCategoryData from "../hooks/useCategoryData";
import useAllData from "../hooks/useAllData";
import "../styles/Navigation.scss";

const Navigation = () => {
  const { categories } = useCategoryData();

  const { allEntries } = useAllData();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className="Nav">
        <NavButton
          name={allEntries.name}
          category={allEntries}
          className="Nav-item"
          key={allEntries.name}
        />
        {categories.map((category) => (
          <NavButton
            id={category.name}
            name={category.name}
            category={category}
            key={category.name}
            className="Nav-item"
          />
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
