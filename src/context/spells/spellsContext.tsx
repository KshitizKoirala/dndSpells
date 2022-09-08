/* eslint-disable @typescript-eslint/indent */
import { useState, createContext, useMemo } from "react";
import SpellType from "../../types/spell-types";

type SpellContextProviderProps = {
  children: React.ReactNode;
};

type SpellsContextType = {
  favourite: SpellType.ISpellList[] | [];
  setFavourite: React.Dispatch<
    React.SetStateAction<SpellType.ISpellList[] | []>
  >;
};

// context to be used to access the value directly
export const SpellsContext = createContext({} as SpellsContextType);

// Wrapper to wrap around the components as HOC
export function SpellsContextProvider({ children }: SpellContextProviderProps) {
  const [favourite, setFavourite] = useState<SpellType.ISpellList[] | []>([]);
  const value = useMemo(
    () => ({
      favourite,
      setFavourite,
    }),
    [favourite],
  );

  return (
    <SpellsContext.Provider value={value}>{children}</SpellsContext.Provider>
  );
}
