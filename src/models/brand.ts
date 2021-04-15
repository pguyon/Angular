
//////////////////////////////
// déclaration d'une classe //
//////////////////////////////
export class Brand {

  ///////////////////////////////
  // déclaration des attributs //
  ///////////////////////////////

  // Ils sont toujours en privé dans le cas d'une classe métier, afin d'encapsuler
  // son comportement
  // C'est la classe qui décide comment on accède à ses attributs
  private _id: number;
  private _name: string;

  ////////////////////////////////
  // déclaration des propriétés //
  ////////////////////////////////

  // Les propriétés correspondent aux getters/setters des attributs de la classe
  // La différente entre une propriété et une méthode c'est le mot clé get/set devant
  // Ainsi que l'utilisation de celle-ci : avec ou sans parenthèses

  // Seulement la propriété get a été définit pour l'id
  // car il n'y a aucun intérêt à vouloir le modifier
  get id(): number {
    return this._id;
  }

  // get : on récupère quelque chose
  get name(): string {
    return this._name;
  }

  // set : on modifie la valeur de notre attribut
  set name(value: string) {
    this._name = value;
  }

  ///////////////////////////////////
  // déclaration d'un constructeur //
  ///////////////////////////////////

  // Déclaration d'un constructeur pour instancier la classe, celui-ci est rempli,
  // c'est à dire qu'il initialise ses attributs via les paramètres qu'il a
  // Si un constructeur n'est pas définit dans une classe, il existe implicitement,
  // il est juste vide
  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  //////////////////////////////
  // déclaration des méthodes //
  //////////////////////////////

  // Déclaration d'une méthode/fonction
  toString(): string {
    return '(' + this.id + ') ' + this.name;
  }
}
