import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-heros';
import {Observable} from 'rxjs/Observable';
// import {ArrayObservable} from 'rxjs/observable/ArrayObservable';
import {MessageService} from './message.service';
import {of} from 'rxjs/observable/of'; // 这个和ArrayObservable使用一个就行，那个是具体的实现

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // return ArrayObservable.of(HEROS);
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero> {
    // 注意，反引号 ( ` ) 用于定义 JavaScript 的 模板字符串字面量，以便嵌入 id
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => hero.id === id));
  }
}
