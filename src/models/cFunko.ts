import { IFunko } from "../interfaces/iFunko.js";
import { FunkoType } from "../enums/funkoType.js";
import { FunkoGenres } from "../enums/funkoGenres.js";

export class CFunko implements IFunko {
  accessor _id: number;
  accessor _name: string;
  accessor _description: string;
  accessor _type: FunkoType | string;
  accessor _genre: FunkoGenres | string;
  accessor _franchise: string;
  accessor _number: number;
  accessor _exclusive: boolean;
  accessor _specialFeature: string;
  accessor _marketValue: number;

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public type: FunkoType | string,
    public genre: FunkoGenres | string,
    public franchise: string,
    public number: number,
    public exclusive: boolean,
    public specialFeature: string,
    public marketValue: number
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._type = type;
    this._genre = genre;
    this._franchise = franchise;
    this._number = number;
    this._exclusive = exclusive;
    this._specialFeature = specialFeature;
    this._marketValue = marketValue;
  }


}