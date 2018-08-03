import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {helloworld} from '../bundle';
import HelloRequest = helloworld.HelloRequest;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();

    const h = new Hero();
    h.id = 11;
    h.name = 'yinlei';
    const request = new HelloRequest();
    request.name = 'yinlei';

    const req = HelloRequest.fromObject(h);
    const writer = HelloRequest.encode(req);
    const msg = writer.finish();
    console.log(msg.length);
    const result = HelloRequest.decode(msg);
    console.log(result);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heros => this.heroes = heros.slice(1, 5));
  }
}
