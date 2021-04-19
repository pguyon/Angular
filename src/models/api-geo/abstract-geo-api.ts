
export abstract class AbstractGeoApi {
  protected _nom: string;
  protected _code: string;

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  protected constructor(nom: string, code: string) {
    this._nom = nom;
    this._code = code;
  }

  afficherGeoApi(): string {
    return '(' + this._code + ') ' + this._nom;
  }
}
