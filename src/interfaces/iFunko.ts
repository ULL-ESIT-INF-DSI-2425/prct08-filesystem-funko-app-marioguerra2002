import { FunkoGenres } from "../enums/funkoGenres.js";
import { FunkoType } from "../enums/funkoType.js";
export interface IFunko {
  id: number;
  name: string;
  description: string;
  type: FunkoType | string;
  genre: FunkoGenres | string;
  franchise: string;
  number: number;
  exclusive: boolean;
  specialFeature: string;
  marketValue: number;
}

