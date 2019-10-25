import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    const socket = this.websocketService.subToSocket();
    socket.subscribe(
      message => console.log(message)
    );
    socket.next('1');
    socket.next('2');
    socket.next({
      name: 'Andrej Blesic',
      age: 25,
      address: 'Trg Heroja 8',
      job: 'Semi-developer'
    });
  }
}
