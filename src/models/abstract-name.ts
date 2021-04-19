
export abstract class AbstractNameProperty {

  // tslint:disable-next-line:variable-name
  protected _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  protected constructor(name: string) {
    this._name = name;
  }
}
