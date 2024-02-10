import React, { useEffect, useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import "../styles/Navigation.scss";
import NavButton from "./NavButton";

import useAllData from "../hooks/useAllData";
import { useAllCategoryData } from "../hooks/useCategoryData";

const Navigation = () => {
  const { allEntries } = useAllData();
  const { allCategoryData, isLoading } = useAllCategoryData();
  const [allCatDataState, setAllCatDataState] = useState([]);

  useEffect(() => {
    setAllCatDataState(allCategoryData);
  }, [isLoading]);

  return (
    allEntries.data &&
    !isLoading && (
      <AppBar position="static" color="transparent">
        <Toolbar className="Nav">
          <NavButton
            name={allEntries.name}
            category={allEntries}
            className="Nav-item"
            key={allEntries.name}
            all={allEntries}
          />
          {allCatDataState.map((category) => (
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
    )
  );
};

export default Navigation;
