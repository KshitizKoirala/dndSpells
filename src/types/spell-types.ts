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

  // For SpellsList Component
  interface ISpellDetail {
    name: string;
    desc: string;
  }

  interface ISpellDetail {
    name: string;
    desc: string;
  }

  // For Spell Context
  interface ISpellList {
    index: string;
    name: string;
    url: string;
  }
  // For SpellDetail Page
  interface Detail {
    _id: string;
    index: string;
    name: string;
    desc: Array<string>;
    higher_level: Array<string>;
    range: string;
    components: Array<string>;
    material: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    attack_type: string;
    url: string;
  }
}

export default SpellType;
