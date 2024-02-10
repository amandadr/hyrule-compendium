import React, { useContext, useEffect } from "react";
import { ListContext } from "../App";

const NavButton = ({ name, category, className, all }) => {
  const { setListState } = useContext(ListContext);

  const data = all?.data;

  useEffect(() => {
    if (data) {
      setListState(all);
    }
  }, []);

  return (
    <button
      onClick={() => {
        setListState(category);
      }}
      className={className}
    >
      {name}
    </button>
  );
};

export default NavButton;
