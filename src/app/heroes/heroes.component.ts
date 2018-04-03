import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../mock-heros';

// @Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
@Component({
  selector: 'app-heroes', // 这个名字在根组件的html中
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// 导出这个组件，以便在其他地方导入并使用它
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: '尹雷'
  };
  heros = HEROS;

  constructor() {
  }

  // 生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。
  ngOnInit() {
  }
}
