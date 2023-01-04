import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  title = `JavaScript Events
  `;
  definition = `HTML events are "things" that happen to HTML elements.

  When JavaScript is used in HTML pages, JavaScript can "react" on these events. `;

  code1 = `<button onclick="displayDate()">The time is?</button>`;

  constructor() {}

  ngOnInit(): void {}
}
