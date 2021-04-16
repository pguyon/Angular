
export class Energy {

  private _id: number;
  private _name: string;

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }
}
