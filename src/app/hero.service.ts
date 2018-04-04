import {Injectable} from '@angular/core';
import {Hero} from './hero';
// import {HEROS} from './mock-heros';
import {Observable} from 'rxjs/Observable';
// import {ArrayObservable} from 'rxjs/observable/ArrayObservable';
import {MessageService} from './message.service';
// 这个和ArrayObservable使用一个就行，那个是具体的实现
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

// 常量要定义在最外面（类外面）
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes'; // 对内存数据访问的url
  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // return ArrayObservable.of(HEROS);
    // return of(HEROS);
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log(`fetched heroes from url`)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    // 注意，反引号 ( ` ) 用于定义 JavaScript 的 模板字符串字面量，以便嵌入 id
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROS.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
