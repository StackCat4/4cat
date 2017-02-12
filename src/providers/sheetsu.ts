import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Sheetsu provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Sheetsu {

  constructor(public http: Http) {
    console.log('Hello Sheetsu Provider');
  }

  getRemoteData(): any{
          return this.http.get('https://sheetsu.com/apis/v1.0/04c2d2906a10')
                   .map(res => res.json());
  }

}
