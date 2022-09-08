import SpellType from "../types/spell-types";

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

export const spellDetail: SpellType.Detail = {
  _id: "62c5ceedf352af7c71a7bd61",
  index: "acid-arrow",
  name: "Acid Arrow",
  desc: [
    "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
  ],
  higher_level: [
    "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
  ],
  range: "90 feet",
  components: ["V", "S", "M"],
  material: "Powdered rhubarb leaf and an adder's stomach.",
  ritual: false,
  duration: "Instantaneous",
  concentration: false,
  casting_time: "1 action",
  level: 2,
  attack_type: "ranged",
  url: "/api/spells/acid-arrow",
};
