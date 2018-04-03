import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-heros';
import {Observable} from 'rxjs/Observable';
import {ArrayObservable} from 'rxjs/observable/ArrayObservable';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return ArrayObservable.of(HEROS);
  }

}
