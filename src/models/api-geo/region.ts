import {AbstractGeoApi} from './abstract-geo-api';

export class Region extends AbstractGeoApi {

  constructor(nom: string, code: string) {
    super(nom, code);
  }
}

//
// Les deux exemples de déclarations de classes, sont identiques !
//
// export class Region extends AbstractGeoApi {
// }
//
// export class Region {
//   protected nom: string;
//   protected code: string;
// }
//
