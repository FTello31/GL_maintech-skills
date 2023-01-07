import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-sockets',
  templateUrl: './web-sockets.component.html',
  styleUrls: ['./web-sockets.component.scss'],
})
export class WebSocketsComponent implements OnInit {
  title = `WebSocket`;
  definition = `The WebSocket API is an advanced technology that makes it possible to open a 
  two-way interactive communication session between the user's browser and a server. 
  With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.
  `;

  constructor() {}

  ngOnInit(): void {}
}
