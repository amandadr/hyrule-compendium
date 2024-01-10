import React, { useContext } from 'react';
import { listContext } from '../App';


const NavButton = ({ name, data }) => {
  const { setListState } = useContext(listContext);

  return (
    <button
      onClick={() => {
        setListState(data);
      }}
    >
      {name}
    </button>
  );
}

export default NavButton;