import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {helloworld} from '../bundle';
import {helloworld as hh} from '../grpc-namespaces';
import HelloRequest = helloworld.HelloRequest;
import {clientFactory} from 'rxjs-grpc';

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

    // type ClientFactory = hh.ClientFactory;
    // const Services = clientFactory<ClientFactory>('helloworld.proto', 'helloworld');
    //
    // const services = new Services('localhost:50051');
    // const greeter = services.getGreeter();
    //
    // greeter.sayHello({ name: 'world' }).forEach(response => {
    //   console.log(`Greeting: ${response.message}`);
    // });
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heros => this.heroes = heros.slice(1, 5));
  }
}
