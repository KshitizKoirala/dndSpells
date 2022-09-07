import axios from "axios";
import { useEffect, useState } from "react";

import api from "../../utils/api";
import SpellSingle from "./SpellSingle";

// Type Definition of Spells Array
interface IMapSpell {
  index: string;
  name: string;
}

function SpellsList() {
  const [allSpells, setAllSpells] = useState([]);

  useEffect(() => {
    const getAllSpells = async () => {
      await axios.get(api.fetch).then((res) => {
        setAllSpells(res.data.results);
      });
    };
    getAllSpells();
  }, []);

  return (
    <div className="spells-parent" data-testid="spells-list">
      <ul className="mt-3 spells-list">
        {allSpells.map((spell: IMapSpell) => (
          <SpellSingle key={spell.index} spellName={spell.name} />
        ))}
      </ul>
    </div>
  );
}

export default SpellsList;
