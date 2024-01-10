import React, { useContext } from 'react';
import { listContext } from '../App';


const NavButton = ({ name, category, className }) => {
  const { setListState } = useContext(listContext);

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