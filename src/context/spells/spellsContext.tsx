// import React, { useContext, useState } from "react";

// type ThemeContextProviderProps = {
//   children: React.ReactNode;
// };

// const SpellsContext = React.createContext([]);

// export const useFavourites = () => useContext(SpellsContext);

// export function UserContextProvider({ children }: ThemeContextProviderProps) {
//   // Creating a spells state to be accessed overall
//   const [spells, setSpells] = useState([]);
//   const value = React.useMemo(
//     () => ({
//       spells,
//       setSpells,
//     }),
//     [spells],
//   );

//   return (
//     <SpellsContext.Provider value={value}>{children}</SpellsContext.Provider>
//   );
// }

function spellsContext() {
  return <div>spellsContext</div>;
}

export default spellsContext;
