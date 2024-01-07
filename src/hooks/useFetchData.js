import axios from 'axios';
import { useEffect, useState} from 'react';

// REFACTOR: move endpoints to a separate file
const monstersEndpoint =
  "http://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";

const useFetchData = () => {
  const monsterState = [
    {
      category: "",
      common_locations: "",
      description: "",
      drops: "",
      id: "",
      image: "",
      name: "",
      size: "",
      strength: "",
      weaknesses: "",
    },
  ];
  
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState(monsterState);

  const fetchData = async (url, setState) => {
    try {
      const { data: response } = await axios.get(url);
      setState(response.data);
    } catch (error) {
      console.error(error)
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(monstersEndpoint, setMonsters);
  }, []);

  return {
    loading,
    monsters,
  };
};

export default useFetchData;