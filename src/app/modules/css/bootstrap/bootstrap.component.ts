import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
})
export class BootstrapComponent implements OnInit {
  title = `Bootstrap`;
  definition = `Bootstrap is a powerful toolset, a collection of HTML, CSS and JavaScript tools for creating and building responsive web pages and web applications. 
  and build responsive web pages and web applications. Bootstrap is a free and open source project hosted on GitHub and created by Twitter. \n
  Bootstrap offers responsive CSS that conforms to phones, tablets and desktops. 
  Bootstrap is also cross-browser compatible and supports Chrome, Firefox, Internet Explorer, Safari and Opera.
  \n 
  `;

  constructor() {}

  ngOnInit(): void {}
}
