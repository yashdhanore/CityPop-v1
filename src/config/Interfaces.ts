export interface GeoOutput {
  totalResultsCount: number;
  geonames: Geoname[];
}

export interface Geoname {
  adminCode1: string;
  lng: string;
  geonameId: number;
  toponymName: string;
  countryId: string;
  fcl: Fcl;
  population: number;
  countryCode: string;
  name: string;
  fclName: FclName;
  adminCodes1: AdminCodes1;
  countryName: string;
  fcodeName: string;
  adminName1: string;
  lat: string;
  fcode: string;
}

export interface AdminCodes1 {
  ISO3166_2: string;
}

export enum Fcl {
  L = "L",
  P = "P",
}

export enum FclName {
  CityVillage = "city, village,...",
  ParksArea = "parks,area, ...",
}
