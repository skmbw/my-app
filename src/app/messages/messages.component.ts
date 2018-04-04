import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // message组件也需要message消息服务，所以注入进来，因为要在html中绑定，所以是public的
  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
  }

}
