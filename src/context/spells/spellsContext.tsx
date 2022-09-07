/* eslint-disable @typescript-eslint/indent */
import { useState, createContext, useMemo } from "react";
import SpellType from "../../types/spell-types";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type SpellsContextType = {
  favourite: SpellType.ISpellList | null;
  setFavourite: React.Dispatch<
    React.SetStateAction<SpellType.ISpellList | null>
  >;
};

// context to be used to access the value directly
export const SpellsContext = createContext({} as SpellsContextType);

// Wrapper to wrap around the components as HOC
export function SpellsContextProvider({ children }: ThemeContextProviderProps) {
  const [favourite, setFavourite] = useState<SpellType.ISpellList | null>(null);
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
