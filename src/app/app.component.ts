import { Component } from '@angular/core';
import {Brand} from '../models/brand';
import {Energy} from '../models/energy';
import {Model} from '../models/model';
import {Couvert} from '../models/couvert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'initial-project';
  brand: Brand;
  model: Model;
  tiroir: Array<Couvert>;

  constructor() {
    this.initialiserModel();
    this.remplirTiroir();
    this.initialiserGameLibrary();
  }

  initialiserModel(): void {
    // Instanciation de la classe Brand, à l'attribut de classe brand
    this.brand = new Brand(1, 'Opel');
    // Création de plusieurs énergies
    // Ici, on créé des instances de la classe/objet Energy
    const diesel = new Energy(1, 'Diesel');
    const essence = new Energy(2, 'Essence');
    const electrique = new Energy(3, 'Electrique');
    // Assignation via les propriétés pour un objet avec un constructeur vide
    this.model = new Model();
    this.model.name = 'Astra';
    this.model.brand = this.brand;
    this.model.addEnergy(essence);
    this.model.addEnergy(diesel);
    this.model.addEnergy(electrique);
  }

  remplirTiroir(): void {
    // Création des couverts
    // Déclaration d'une nouvelle variable de nom tiroir, et de type tableau de Couvert
    // C'est une variable qui sera active seulement au sein de la méthode dans laquelle elle se trouve
    // (Ici : le constructor)
    // C'est valable pour fourchette, couteau et cuillere
    this.tiroir = new Array<Couvert>();
    const fourchette = new Couvert();
    fourchette.name = 'Fourchette';
    const couteau = new Couvert();
    couteau.name = 'Couteau';
    const cuillere = new Couvert();
    cuillere.name = 'Cuillere';
    this.tiroir.push(fourchette);
    this.tiroir.push(couteau);
    this.tiroir.push(cuillere);
    this.tiroir.push(cuillere);
    this.tiroir.push(couteau);
  }

  private initialiserGameLibrary(): void {
    // TODO :   créer un objet de type user
    //          créer un objet de type library et la lier au user
    //          créer un ou plusieurs objet(s) de type game, et le(s) lier à la library
  }
}

