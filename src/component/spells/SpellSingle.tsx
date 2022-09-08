import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { SpellsContext } from "../../context/spells/spellsContext";

interface SpellProps {
  spellName: string;
  spellUrl: string;
}

function SpellSingle({ spellName, spellUrl }: SpellProps) {
  const spellsContext = useContext(SpellsContext);
  const [isFavourite, setIsFavourite] = useState(false);

  // Adds to the favourite context
  const addToFavourites = (
    favouriteSpellName: string,
    favouriteSpellUrl: string,
  ) => {
    setIsFavourite(!isFavourite);
    spellsContext.setFavourite([
      ...spellsContext.favourite,
      {
        index: favouriteSpellUrl,
        name: favouriteSpellName,
        url: favouriteSpellUrl,
      },
    ]);
  };

  // Verify if the spells is already in favouites list
  useEffect(() => {
    function getAllFavourites(findSpellName: string) {
      const spellsFavouritefound = spellsContext.favourite.find(
        (obj) => obj.name === findSpellName,
      );
      if (spellsFavouritefound) {
        setIsFavourite(true);
      }
    }
    getAllFavourites(spellName);
  }, [spellName, spellsContext.favourite]);

  return (
    <>
      <Link to={`/spells/${spellUrl}`}>
        <p data-testid="spells-single">{spellName}</p>
      </Link>
      <button
        type="button"
        className="view-btn"
        onClick={() => addToFavourites(spellName, spellUrl)}
      >
        <img
          className="favourite-btn"
          src={isFavourite ? "favourite-yes.png" : "favourite.png"}
          alt="favourite"
        />
      </button>
    </>
  );
}

export default SpellSingle;
