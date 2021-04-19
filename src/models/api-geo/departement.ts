import {AbstractGeoApi} from './abstract-geo-api';

export class Departement extends AbstractGeoApi {

  private _codeRegion: string;

  get codeRegion(): string {
    return this._codeRegion;
  }

  set codeRegion(value: string) {
    this._codeRegion = value;
  }

  constructor(nom: string, code: string, codeRegion: string) {
    super(nom, code);
    this.codeRegion = codeRegion;
  }
}
