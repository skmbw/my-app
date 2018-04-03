import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-heros';
import {Observable} from 'rxjs/Observable';
import {ArrayObservable} from 'rxjs/observable/ArrayObservable';

@Injectable()
export class HeroService {

  constructor() {
  }

  getHeros(): Observable<Hero[]> {
    return ArrayObservable.of(HEROS);
  }

}
