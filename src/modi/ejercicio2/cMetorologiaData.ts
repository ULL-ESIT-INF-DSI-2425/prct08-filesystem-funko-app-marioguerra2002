import { iMetorologiaData } from "./iMeterologiaData.js";

export class cMeteorologiaData implements iMetorologiaData {
  accessor _fecha: string;
  accessor _ubicacion: string;
  accessor _temperatura: number;
  accessor _humedad: number;
  accessor _precipitacion: number;
  accessor _viento_kmh: number;
  constructor(
    public fecha: string,
    public ubicacion: string,
    public temperatura: number,
    public humedad: number,
    public precipitacion: number,
    public viento_kmh: number
  ) {
    this._fecha = fecha;
    this._ubicacion = ubicacion;
    this._temperatura = temperatura;
    this._humedad = humedad;
    this._precipitacion = precipitacion;
    this._viento_kmh = viento_kmh;
  }
}