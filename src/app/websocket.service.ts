import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/websocket';

const websocketUrl = 'wss://echo.websocket.org';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  subToSocket() {
    const socketObs = webSocket(websocketUrl);
    return socketObs;
  }
}
