import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http2',
  templateUrl: './http2.component.html',
  styleUrls: ['./http2.component.scss'],
})
export class Http2Component implements OnInit {
  title = `Introduction to HTTP/2
  `;
  definition = `HTTP/2 will make our applications faster, simpler, and more robust — 
  a rare combination — by allowing us to undo many of the HTTP/1.1 workarounds previously done 
  within our applications and address these concerns within the transport layer itself. 
  Even better, it also opens up a number of entirely new opportunities to optimize our applications and improve performance!`;
  constructor() {}

  ngOnInit(): void {}
}
