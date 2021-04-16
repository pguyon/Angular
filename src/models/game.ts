
export class Game {
  private _name: string;
  private _price: number;
  private _publishedAt: Date;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  set publishedAt(value: Date) {
    this._publishedAt = value;
  }

  constructor(name: string, price: number, publishedAt: Date) {
    this._name = name;
    this._price = price;
    this._publishedAt = publishedAt;
  }
}
