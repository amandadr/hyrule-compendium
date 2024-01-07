import axios from "axios";
import { useEffect, useState } from "react";
import { initialState } from "../data/initialState";

const {
  creatures: creatureState,
  equipment: equipmentState,
  materials: materialState,
  monsters: monsterState,
  treasure: treasureState,
} = initialState;

const categoryEndpoint = (category) =>
  "http://botw-compendium.herokuapp.com/api/v3/compendium/category/" + category;

const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [creatures, setCreatures] = useState(creatureState);
  const [equipment, setEquipment] = useState(equipmentState);
  const [materials, setMaterials] = useState(materialState);
  const [monsters, setMonsters] = useState(monsterState);
  const [treasure, setTreasure] = useState(treasureState);

  const fetchData = async (url, setState) => {
    try {
      const { data: response } = await axios.get(url);
      setState(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(categoryEndpoint("creatures"), setCreatures);
    fetchData(categoryEndpoint("equipment"), setEquipment);
    fetchData(categoryEndpoint("materials"), setMaterials);
    fetchData(categoryEndpoint("monsters"), setMonsters);
    fetchData(categoryEndpoint("treasure"), setTreasure);
  }, []);

  return {
    loading,
    creatures,
    equipment,
    materials,
    monsters,
    treasure,
  };
};

export default useFetchData;
