import {Component} from '@angular/core';
import {Brand} from '../models/brand';
import {Energy} from '../models/energy';
import {Model} from '../models/model';
import {Couvert} from '../models/couvert';
import {User} from '../models/user';
import {Library} from '../models/library';
import {Game} from '../models/game';

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
  user: User;

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

  initialiserGameLibrary(): void {
    // TODO :   créer un objet de type user
    // this.user : on appelle l'attribut de la classe courante, de nom : user
    this.user = new User('Kevin', 'kevin@drosalys.fr', 'KvN');

    //          créer un objet de type library et la lier au user
    // la propriété library de la variable user (qui est de type User) est elle-même de type Library
    // Je peux donc l'instancier et faire un new Library() dessus
    this.user.library = new Library('Steam');

    //          créer un ou plusieurs objet(s) de type game, et le(s) lier à la library
    // Je déclare une variable de nom game, comme étant une instance de la classe Game
    // Avec les attributs passés en paramètre au constructeur
    const game = new Game('Civilization 6', 45.00, new Date());

    // La variable game est maintenant une instance de la classe Game, je peux peux donc la passer
    // en paramètre à la méthode addGame de la classe Library
    // (PS : pour visualiser tout ça, penser à la navigation entre les classes ! (CTRL + clic gauche))
    this.user.library.addGame(game);

    const game2 = new Game('Civilization 5', 25.00, new Date());
    this.user.library.addGame(game2);
  }
}

