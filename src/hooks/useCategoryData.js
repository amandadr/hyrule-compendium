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

export const fetchData = async (url, setState) => {
  try {
    const { data: response } = await axios.get(url);
    setState(response.data);
  } catch (error) {
    console.error(error);
  }
};

const categoryEndpoint = (category) =>
  "https://botw-compendium.herokuapp.com/api/v3/compendium/category/" +
  category;

const useCategoryData = () => {
  const [loading, setLoading] = useState(true);
  const [creatures, setCreatures] = useState(creatureState);
  const [equipment, setEquipment] = useState(equipmentState);
  const [materials, setMaterials] = useState(materialState);
  const [monsters, setMonsters] = useState(monsterState);
  const [treasure, setTreasure] = useState(treasureState);

  useEffect(() => {
    fetchData(categoryEndpoint("creatures"), setCreatures);
    fetchData(categoryEndpoint("equipment"), setEquipment);
    fetchData(categoryEndpoint("materials"), setMaterials);
    fetchData(categoryEndpoint("monsters"), setMonsters);
    fetchData(categoryEndpoint("treasure"), setTreasure);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return {
    loading,
    categories: [
      { name: "Creatures", data: creatures },
      { name: "Equipment", data: equipment },
      { name: "Materials", data: materials },
      { name: "Monsters", data: monsters },
      { name: "Treasure", data: treasure },
    ],
  };
};

export default useCategoryData;
