import {Game} from './game';

export class Library {
  private _name: string;

  // Une bibliothèque de jeux, est composé de plusieurs jeux
  // Donc pour en avoir plusieurs, on utilise un tableau
  private _games: Array<Game>;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get games(): Array<Game> {
    return this._games;
  }

  constructor(name: string) {
    this._name = name;
  }

  /**
   * Permet d'ajouter un jeu au tableau de jeu, qui représente les différents jeux de la bibliothèque de l'utilisateur
   * @param game le jeu à ajouter
   */
  addGame(game: Game): void {
    if (game) {
      this._games.push(game);
    }
  }
}
