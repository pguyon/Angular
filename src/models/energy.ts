import {InterfaceEnergy} from './interface-energy';
import {AbstractNameProperty} from './abstract-name';

// Le type Energy est aussi de type InterfaceEnergy, car il implémente InterfaceEnergy
// (Implémente représente le fait de décrire le comportement, ici le comportement de l'interface InterfaceEnergy,
// et de ses méthodes, ici il n'y a que displayName)
// Car il implémente InterfaceEnergy, il doit implémenter les méthodes de celle-ci, autrement dit la classe Energy doit
// avoir une méthode displayName (qui est déclarée dans l'interface InterfaceEnergy) et pourra décrire son comportement
// >> Une classe peut implémenter une interface, mais une interface ne peut pas
// Cela se représente par le mot clé implements
export class Energy extends AbstractNameProperty implements InterfaceEnergy {

  private _id: number;

  get id(): number {
    return this._id;
  }

  constructor(id: number, name: string) {
    super(name);
    this._id = id;
  }

  displayName(name: string): string {
    return this.name + ' - ' + name;
  }
}
