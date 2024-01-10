import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavButton from "./NavButton";
import useCategoryData from "../hooks/useCategoryData";
import useAllData from "../hooks/useAllData";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-evenly",
    width: "100%",
    maxWidth: "90vw",
    margin: "1em auto",
  },
  navItem: {
    height: "4em",
    width: "100%",
    maxWidth: "12%",
    border: "1px solid black",
    borderRadius: "5px",
    marginBottom: "5px",
    backgroundColor: "#aeb3ba",
    cursor: "pointer",
  },
});

const Navigation = () => {
  const classes = useStyles();

  const { categories } = useCategoryData();

  const { allEntries } = useAllData();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className={classes.nav}>
        <NavButton name={allEntries.name} category={allEntries} className={classes.navItem} key={allEntries.name} />
        {categories.map((category) => (
          <NavButton
            name={category.name}
            category={category}
            key={category.name}
            className={classes.navItem}
          />
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
