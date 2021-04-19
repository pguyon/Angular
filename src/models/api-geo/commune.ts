import {AbstractGeoApi} from './abstract-geo-api';

export class Commune extends AbstractGeoApi {

  private _codeDepartment: string;
  private _codeRegion: string;
  private _codePostaux: string[];
  private _population: number;

  get codeDepartment(): string {
    return this._codeDepartment;
  }

  set codeDepartment(value: string) {
    this._codeDepartment = value;
  }

  get codeRegion(): string {
    return this._codeRegion;
  }

  set codeRegion(value: string) {
    this._codeRegion = value;
  }

  get codePostaux(): string[] {
    return this._codePostaux;
  }

  set codePostaux(value: string[]) {
    this._codePostaux = value;
  }

  get population(): number {
    return this._population;
  }

  set population(value: number) {
    this._population = value;
  }

  constructor(nom: string, code: string, codeDepartment: string,
              codeRegion: string, codePostaux: string[], population: number
  ) {
    super(nom, code);
    this._codeDepartment = codeDepartment;
    this._codeRegion = codeRegion;
    this._codePostaux = codePostaux;
    this._population = population;
  }
}

//
// Les deux exemples de déclarations de classes, sont identiques !
//
// export class Commune extends AbstractGeoApi {
// }
//
// export class Commune {
//   protected nom: string;
//   protected code: string;
// }
//

