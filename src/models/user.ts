import {Library} from './library';

export class User {

  // On créé dans un premier temps les différents attributs de la classe
  private _name: string;
  private _email: string;
  private _nickname: string;

  // Une personne a une bibliothèque de jeux, donc on ajoute un attribut de type Library à l'utilisateur
  private _library: Library;

  // On génère les propriétés
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get library(): Library {
    return this._library;
  }

  set library(value: Library) {
    this._library = value;
  }

// On génère le constructeur
  constructor(name: string, email: string, nickname: string) {
    this._name = name;
    this._email = email;
    this._nickname = nickname;
  }
}
