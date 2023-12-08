import { Country } from "../interfaces/countries";
import { Region } from "../interfaces/types";

export interface CacheStorage {
  porPais: PorPais,
  porCapital: PorCapital,
  porRegion: PorRegion
}

export interface PorPais{
  termino: string,
  paises: Country[]
}

export interface PorCapital{
  termino: string,
  paises: Country[]
}

export interface PorRegion{
  region: Region,
  paises: Country[]
}
