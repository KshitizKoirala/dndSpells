import axios from "axios";
import api from "./api";

/**
 * FETCH ALL SPELLS FROM API
 * @export fetchAllSpells Function
 */

const fetchAllSpells = async () => {
  await axios.get(api.fetch).then((res) => {
    const spells = res.data.results;
    return spells;
  });
};

export default fetchAllSpells;
