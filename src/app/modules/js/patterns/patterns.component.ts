import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss'],
})
export class PatternsComponent implements OnInit {
  title = `Module Pattern`;
  definition = `Modules are an integral piece of any robust application's architecture 
  and typically help in keeping the units of code for a project both cleanly separated and organized.`;

  constructor() {}

  ngOnInit(): void {}
}
