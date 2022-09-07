declare namespace SpellType {
  interface Single {
    index: string;
    name: string;
    url: string;
  }
  interface List {
    count: number;
    results: Array<Single>;
  }
}

export const spellData: SpellType.List = {
  count: 5,
  results: [
    {
      index: "acid-arrow",
      name: "Acid Arrow",
      url: "/api/spells/acid-arrow",
    },
    {
      index: "acid-splash",
      name: "Acid Splash",
      url: "/api/spells/acid-splash",
    },
    {
      index: "aid",
      name: "Aid",
      url: "/api/spells/aid",
    },
    {
      index: "alarm",
      name: "Alarm",
      url: "/api/spells/alarm",
    },
    {
      index: "alter-self",
      name: "Alter Self",
      url: "/api/spells/alter-self",
    },
  ],
};

export default spellData;
