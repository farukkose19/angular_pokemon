import { Attack } from './Attack';
import { Resistance } from './Resistance';
import { Weakness } from './Weakness';
import { Ability } from './Ability';

export interface Pokemon {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    types: string[];
    supertype: string;
    subtype: string;
    hp: string;
    retreatCost: string[];
    convertedRetreatCost: number;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    attacks: Attack[];
    resistances: Resistance[];
    weaknesses: Weakness[];
    ability: Ability;
  }
