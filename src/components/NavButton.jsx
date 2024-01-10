import React, { useContext } from 'react';
import { ListContext } from '../App';


const NavButton = ({ name, category, className }) => {
  const { setListState } = useContext(ListContext);

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
}

export default NavButton;