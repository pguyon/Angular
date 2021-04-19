import {InterfaceEnergy} from './interface-energy';

// Le type Energy est aussi de type InterfaceEnergy, car il implémente InterfaceEnergy
// (Implémente représente le fait de décrire le comportement, ici le comportement de l'interface InterfaceEnergy,
// et de ses méthodes, ici il n'y a que displayName)
// Car il implémente InterfaceEnergy, il doit implémenter les méthodes de celle-ci, autrement dit la classe Energy doit
// avoir une méthode displayName (qui est déclarée dans l'interface InterfaceEnergy) et pourra décrire son comportement
// >> Une classe peut implémenter une interface, mais une interface ne peut pas
// Cela se représente par le mot clé implements
export class Energy implements InterfaceEnergy {

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

  displayName(name: string): string {
    return this.name + ' - ' + name;
  }
}
