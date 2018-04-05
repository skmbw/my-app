import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

// @Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
@Component({
  selector: 'app-heroes', // 这个名字在根组件的html中
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] // 这里的样式局部的，不会对其他组件产生影响
})
// 导出这个组件，以便在其他地方导入并使用它
export class HeroesComponent implements OnInit {
  // selectedHero: Hero;
  heroes: Hero[];

  // DI系统会将HeroService服务注入进来
  constructor(private heroService: HeroService) {
  }

  // 生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。
  // 固然可以在构造函数中调用 getHeroes()，但那不是最佳实践，构造函数应该保持简单
  ngOnInit() {
    this.getHeros();
  }

  // onSelect(hero: Hero): void { // : void 可以省略
  //   this.selectedHero = hero;
  // }

  getHeros() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // this.heros = this.heroService.getHeros();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
