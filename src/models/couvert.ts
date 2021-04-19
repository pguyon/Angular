
export class Couvert {

  // On met un _ devant le nom d'un attribut pour dire que celui-ci a une propriété de définit
  // tslint:disable-next-line:variable-name
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    // if value permet de dire que si on passe un undefined, null ou une chaîne de caractères vide, on ne l'ajoute pas
    if (value) {
      if (value.length > 3) {
        this._name = value;
      }
    }
  }
}
