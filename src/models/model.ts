import {Brand} from './brand';
import {Category} from './category';

export class Model {

  private _name: string;
  private _brand: Brand;
  private _category: Category;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get brand(): Brand {
    return this._brand;
  }

  set brand(value: Brand) {
    this._brand = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }

  constructor(name: string, brand: Brand, category: Category) {
    this._name = name;
    this._brand = brand;
    this._category = category;
  }
}
