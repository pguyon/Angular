import {Brand} from './brand';
import {Energy} from './energy';

export class Model {

  private _id: string;
  private _name: string;
  private _brand: Brand;
  private _energies: Array<Energy>;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

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

  get energies(): Array<Energy> {
    return this._energies;
  }

  constructor() {
    this._energies = new Array<Energy>();
  }

  addEnergy(energy: Energy): void {
    // Si je passe bien une vraie énergie à mon setter
    if (energy) {
      // Alors, je l'ajoute au tableau des énergies
      this._energies.push(energy);
    }
  }
}
