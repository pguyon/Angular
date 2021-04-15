import { Component } from '@angular/core';
import {Brand} from '../models/brand';
import {Category} from '../models/category';
import {Model} from '../models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'initial-project';
  brand: Brand;
  category: Category;
  model: Model;

  constructor() {
    this.brand = new Brand(1, 'Opel');
    this.brand.toString();
    this.category = new Category(1, 'Citadine');
    this.model = new Model('Astra', this.brand, this.category);
  }
}

