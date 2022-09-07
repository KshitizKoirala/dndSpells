import { useState } from "react";

interface SpellProps {
  spellName: string;
}

function SpellSingle({ spellName }: SpellProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <li className="spells-single" data-testId="spellsSingleComponent">
      <p>{spellName}</p>
      <button
        type="button"
        className="view-btn"
        onClick={() => setIsFavourite(!isFavourite)}
      >
        <img
          className="favourite-btn"
          src={isFavourite ? "favourite-yes.png" : "favourite.png"}
          alt="favourite"
        />
      </button>
    </li>
  );
}

export default SpellSingle;
