import {Component} from '@angular/core';
import {Brand} from '../models/brand';
import {Energy} from '../models/energy';
import {Model} from '../models/model';
import {Couvert} from '../models/couvert';
import {User} from '../models/user';
import {Library} from '../models/library';
import {Game} from '../models/game';
import {RegionInterface} from '../models/region';
import {AbstractNameProperty} from '../models/abstract-name';
import {Region} from '../models/api-geo/region';
import {Departement} from '../models/api-geo/departement';
import {Commune} from '../models/api-geo/commune';
import {AbstractGeoApi} from '../models/api-geo/abstract-geo-api';

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
  auvergneRA: RegionInterface;
  energy: Energy;
  arrayAbstractType: Array<AbstractNameProperty>;
  auvergneRhoneAlpes: Region;
  allier: Departement;
  commune: Commune;
  arrayAbstractGeoApi: Array<AbstractGeoApi>;

  constructor() {
    this.initialiserModel();
    this.remplirTiroir();
    this.initialiserGameLibrary();
    this.howToWorkWithInterface();
    this.howToWorkWithAbstractClasses();
    this.exerciceLundiGeoApiAffichage();
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
    this.model = new Model('Astra');
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

  howToWorkWithInterface(): void {
    // Assignations des attributs de l'interface
    // (Un objet en javascript peut être représenté avec les accolades et les noms des attributs)
    this.auvergneRA = {
      nom: 'Auvergne-Rhône-Alpes',
      code: '98',
    };
    // Modification des attributs de l'interface, une fois que celle-ci a été "initialisée"
    // this.auvergneRA.nom = 'Auvergne-Rhône-Alpes';
    this.auvergneRA.code = '84';
    // Utilisation de la classe Energy qui implémente l'interface InterfaceEnergy
    this.energy = new Energy(1, 'Diesel');
  }

  howToWorkWithAbstractClasses(): void {
    this.arrayAbstractType = new Array<AbstractNameProperty>();
    // Instanciation de la classe Brand, à l'attribut de classe brand
    this.brand = new Brand(1, 'Opel');
    // Création de plusieurs énergies
    // Ici, on créé des instances de la classe/objet Energy
    const diesel = new Energy(1, 'Diesel');
    const essence = new Energy(2, 'Essence');
    const electrique = new Energy(3, 'Electrique');
    // Assignation via les propriétés pour un objet avec un constructeur vide
    this.model = new Model('Astra');
    this.model.brand = this.brand;
    this.model.addEnergy(essence);
    this.model.addEnergy(diesel);
    this.model.addEnergy(electrique);
    // Model étend le type AbstractNameProperty, du coup Model est aussi de type AbstractNameProperty
    // Je peux donc l'ajouter à mon tableau, qui va gérer que des objets de type AbstractNameProperty
    // Idem pour les variables de type Energy !
    this.arrayAbstractType.push(this.model);
    this.arrayAbstractType.push(diesel);
    this.arrayAbstractType.push(essence);
    this.arrayAbstractType.push(electrique);

    // On itère sur le tableau de nos objet de type AbstractNameProperty
    for (const abstractType of this.arrayAbstractType) {
      // On peut vérifier le typage de notre variable via le mot clé instanceof
      // Par exemple :
      // Ici on vérifie que l'objet en cours d'itération ai aussi le type Model
      if (abstractType instanceof Model) {
        // alert(abstractType.brand.name);
      // Ici on vérifie que l'objet en cours d'itération ai aussi le type Energy
      } else if (abstractType instanceof Energy) {
        // alert(abstractType.id);
      }
    }
  }

  exerciceLundiGeoApiAffichage(): void {
    this.auvergneRhoneAlpes = new Region('Auvergne-Rhône-Alpes', '84');
    this.allier = new Departement('Allier', '03', '84');
    this.commune = new Commune('Vichy', '03310', '03', '84', ['03200'], 24383);
    this.arrayAbstractGeoApi = new Array<AbstractGeoApi>();
    this.arrayAbstractGeoApi.push(this.auvergneRhoneAlpes);
    this.arrayAbstractGeoApi.push(this.allier);
    this.arrayAbstractGeoApi.push(this.commune);
  }
}

